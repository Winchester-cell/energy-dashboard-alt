import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function WardCard(props) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)


    const { secName, occupaidBed, totalBed } = props
    const bedPercent = Math.floor(occupaidBed / totalBed * 100)
    let barColor = "";
    if (bedPercent <= 40) {
        barColor = "bg-blue-300";
    } else if (bedPercent <= 80) {
        barColor = "bg-orange-300";
    } else {
        barColor = "bg-red-300";
    }
    return (
        <div className={`w-full shadow-lg ${style.cardStyleA} p-5 rounded-2xl flex flex-col gap-2`}>
            <div>
                نام بخش : {secName}
            </div>
            <div className={`${style.textStyleB}`}>
                تخت های اشغال شده : {toPersianDigits(occupaidBed)} از {toPersianDigits(totalBed)}
            </div>
            <div className='flex items-center gap-2'>
                <span>{toPersianDigits(bedPercent)}%</span>
                <div className='w-full h-3 rounded-full bg-gray-700'>
                    <div style={{ width: `${bedPercent}%` }} className={`h-full rounded-full transition-all duration-500 ${barColor}`} />
                </div>
            </div>
        </div>
    )
}
