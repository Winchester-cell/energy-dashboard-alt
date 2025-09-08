'use client'
import PatientInfoTabSelector from '@/components/Templates/Hospital/Patients/PatientsDynamicInfo/PatientInfoTabSelector'
import { patientInfoTabsContent } from '@/content/tabs'
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";


export default function PatientInfoPage() {
    const [selectedTab, setSelectedTab] = useState(patientInfoTabsContent[0])

    return (
        <div className='px-5 pb-5'>
            <div className='glass-card p-5 mt-5 rounded-2xl flex items-center gap-7'>
                <FaUserCircle className='text-4xl' />
                <div>نام : محمد احمدی</div>
                <div>شماره پرونده : ۱۲۳۴۵۶</div>
                <div>سن : ۴۵ سال</div>
                <div>جنسیت : مرد</div>
                <div>بخش : قلب و عروق</div>
            </div>
            <PatientInfoTabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <div className='glass-card' />
            <div className='mt-5 rounded-full'>
                {selectedTab.elem}
            </div>
        </div>
    )
}
