import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { SlUserFemale } from "react-icons/sl";
import { SlUser } from "react-icons/sl";



export default function PatientPersonalInfoSection({ selectedPatient }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                {selectedPatient.gender === 'زن' ? <SlUserFemale className='w-16 h-16' /> : <SlUser className='w-16 h-16' /> }
                
                <div className={`${style.cardStyleB} text-[16px] shadow-lg p-3 rounded-full`}>{selectedPatient.name}</div>
                <div className={`text-[16px] ${style.cardStyleB} ${style.textStyleB} shadow-lg p-3 rounded-full`}>{selectedPatient.gender} | {selectedPatient.age} ساله</div>
            </div>
            <div className={`text-[16px] ${style.cardStyleB} w-[200px] py-3 rounded-full shadow-lg text-center`}>
                وضعیت بیمار : {selectedPatient.status}
            </div>
        </div>
    )
}
