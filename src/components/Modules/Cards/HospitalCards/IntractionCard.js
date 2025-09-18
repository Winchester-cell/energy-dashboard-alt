import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function IntractionCard({ time, patient, drugs, risk, status, action , index }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    console.log('laber' , action);
    

    return (
        <div className={`p-5 ${style.cardStyleB} shadow-lg rounded-2xl gap-5 grid grid-cols-7 transition-all duration-500`}>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{toPersianDigits(index + 1)}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{toPersianDigits(time)}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{patient}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{drugs}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{risk}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{status}</div>
            <div>{action}</div>
        </div >
    )
}
