import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function PatientAlert({ message, patientName, bed, minutesAgo }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div className={`cursor-pointer w-full ${style.cardStyleB} shadow-lg text-[12px] p-3 rounded-xl flex justify-between items-center`} >
            <div className='flex flex-col gap-2'>
                <div className='font-bold'>{message}</div>
                <div className='text-[10px]'>{patientName}</div>
                <div className='font-bold text-[10px]'>{bed}</div>
                <div className='font-bold text-[10px]'>{minutesAgo} دقیقه پیش</div>
            </div>
        </div>
    )
}
