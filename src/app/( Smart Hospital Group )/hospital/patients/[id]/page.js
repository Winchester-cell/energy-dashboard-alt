'use client'
import PatientInfoTabSelector from '@/components/Templates/Hospital/Patients/PatientsDynamicInfo/PatientInfoTabSelector'
import { patientInfoTabsContent } from '@/content/tabs'
import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";


export default function PatientInfoPage() {

    const [selectedTab, setSelectedTab] = useState(patientInfoTabsContent[0])

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div className='px-5 pb-5'>
            <div className={`${style.cardStyleA} shadow-lg p-5 mt-5 rounded-2xl flex items-center gap-7`}>
                <FaUserCircle className='text-4xl' />
                <div>نام : محمد احمدی</div>
                <div>شماره پرونده : ۱۲۳۴۵۶</div>
                <div>سن : ۴۵ سال</div>
                <div>جنسیت : مرد</div>
                <div>بخش : قلب و عروق</div>
            </div>
            <PatientInfoTabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {themeType === 'hospital' && <div className='glass-card' />}
            <div className={`${themeType === 'hospital' ? `` : `bg-[var(--colCard)]`} p-5 rounded-xl`}>
                <div className='rounded-full'>
                    {selectedTab.elem}
                </div>
            </div>
        </div>
    )
}
