import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import { usePathname } from 'next/navigation'
import { FaChartArea } from "react-icons/fa";

import React from 'react'

export default function FinanceKPiCard(props) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div style={{boxShadow:`2px 2px 4px ${props.color}`}} className={`${style.cardStyleA} rounded-xl p-5 relative shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]`}>
            {props.svg}
            <div style={{color:props.color,  textShadow:`2px 2px 4px ${props.color}`}} className='text-lg'>{props.title}</div>
            <div className='text-3xl mt-2'><span style={{color:props.color,  textShadow:`2px 2px 4px ${props.color}`}}>{toPersianDigits(props.price)}</span> میلیارد تومان</div>
            <div className={`${style.textStyleB} mt-3`}>{props.desc}</div>
        </div>
    )
}
