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
        <div className={`${style.cardStyleA} rounded-xl p-5 relative shadow-lg`}>
            <FaChartArea className='absolute top-5 end-5 text-5xl' />
            <div className='text-lg'>{props.title}</div>
            <div className='text-3xl mt-2'>{toPersianDigits(props.price)} میلیارد تومان</div>
            <div className={`${style.textStyleB} mt-3`}>{props.desc}</div>
        </div>
    )
}
