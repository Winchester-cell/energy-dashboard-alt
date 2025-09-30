'use client'
import { getUserInfo } from '@/axios/requests/account/users/getUserInfo';
import { getPatient } from '@/axios/requests/solutions/ehr/patients/getPatient';
import TabSelector from '@/components/Modules/TabSelector/TabSelector';
import { patientInfoTabsContent } from '@/content/tabs'
import { patients } from '@/data/fakeData';
import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { toPersianDigits } from '@/utils/formaters/toPersianDigits';
import { useQuery } from '@tanstack/react-query';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { SlUser, SlUserFemale } from 'react-icons/sl';


export default function PatientInfoPage() {

    const [selectedTab, setSelectedTab] = useState(patientInfoTabsContent[0])

    const { themeType } = useThemeTypeStore()
    const params = useParams()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const { data: patientData } = useQuery({
        queryKey: ['patient', params.id],
        queryFn: () => getPatient(params.id)
    })

    return (
        <div className='px-5 pb-5'>
            {
                patientData &&
                <div className={`${style.cardStyleA} shadow-lg p-5 mt-5 rounded-2xl flex items-center gap-7`}>
                    {patientData?.gender === 'female' ? <SlUserFemale className='w-16 h-16' /> : <SlUser className='w-16 h-16' /> }
                    <div>نام : {patientData.user.first_name} {patientData.user.last_name}</div>
                    <div>کد ملی : {toPersianDigits(patientData.national_id)}</div>
                    <div>شماره پرونده : ۱۲۳۴۵۶</div>
                    <div>تاریخ تولد : {toPersianDigits(patientData.date_of_birth)}</div>
                    <div>جنسیت : {patientData.gender === 'female' ? 'زن' : 'مرد'}</div>
                    <div>گروه خونی : {patientData.blood_type}</div>
                    <div>بیمه : {patientData.insurance_provider}</div>
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
