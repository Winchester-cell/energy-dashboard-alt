import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function FinanceTableCard(props) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div style={{ boxShadow: `2px 2px 4px #00e396` }} className={`p-5 ${style.cardStyleB} shadow-lg rounded-2xl gap-5 grid grid-cols-6 cursor-pointer hover:py-7 transition-all duration-500`}>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{props.service}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{toPersianDigits(props.patientCount)}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{toPersianDigits(props.avgRevenuePerPatient)}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{toPersianDigits(props.avgCostPerPatient)}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>{toPersianDigits(props.avgProfitPerPatient)}</div>
            <div>{toPersianDigits(props.profitMargin)}</div>
        </div >
    )

}
