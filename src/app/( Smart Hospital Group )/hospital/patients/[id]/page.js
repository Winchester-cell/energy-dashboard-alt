'use client'
import TabSelector from '@/components/Modules/TabSelector/TabSelector';
import { patientInfoTabsContent } from '@/content/tabs'
import { patients } from '@/data/fakeData';
import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { toPersianDigits } from '@/utils/formaters/toPersianDigits';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { SlUser, SlUserFemale } from 'react-icons/sl';


export default function PatientInfoPage() {

    const [selectedTab, setSelectedTab] = useState(patientInfoTabsContent[0])

    const { themeType } = useThemeTypeStore()
    const params = useParams()
    const pathname = usePathname()
    const [currentPatient, setCurrentPatient] = useState(null)
    const style = colorVariantSelector(pathname, themeType)

    useEffect(() => {
        if (params) {
            const targetPatient = patients.find(p => p.id === +params.id)
            setCurrentPatient(targetPatient)
        }
    }, [params])

    return (
        <div className='px-5 pb-5'>
            {
                currentPatient &&
                <div style={{boxShadow:`2px 2px 4px #008ffb`}} className={`${style.cardStyleA} shadow-lg p-5 mt-5 rounded-2xl flex items-center gap-7`}>
                    {currentPatient.gender === 'زن' ? <SlUserFemale className='w-16 h-16' /> : <SlUser className='w-16 h-16' /> }
                    <div>نام : {currentPatient.name}</div>
                    <div>شماره پرونده : ۱۲۳۴۵۶</div>
                    <div>سن : {toPersianDigits(currentPatient.age)} سال</div>
                    <div>جنسیت : {currentPatient.gender}</div>
                    <div>بخش : {currentPatient.ward}</div>
                </div>
            }
            <TabSelector tabs={patientInfoTabsContent} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {themeType === 'hospital' && <div className='glass-card' />}
            <div className={`${themeType === 'hospital' ? `` : `bg-[var(--colCard)]`} p-5 rounded-xl`}>
                <div className='rounded-full'>
                    {selectedTab.elem}
                </div>
            </div>
        </div>
    )
}
