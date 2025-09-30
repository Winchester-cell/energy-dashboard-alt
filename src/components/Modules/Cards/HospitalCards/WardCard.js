import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import { usePathname } from 'next/navigation'
import React from 'react'
import CircularProgressAlt from '../../Charts/RadialChartAlt'

export default function WardCard(props) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)


    const { secName, occupaidBed, totalBed } = props
    const bedPercent = Math.floor(occupaidBed / totalBed * 100)
    let barColor = "";
    let status = ""
    if (bedPercent <= 40) {
        barColor = "#008ffb";
        status = 'ظرفیت مطلوب' 
    } else if (bedPercent <= 80) {
        barColor = "#f6a824";
        status = 'ظرفیت بالا'
    } else {
        barColor = "#f580bd";
        status = 'ظرفیت بحرانی'
    }
    return (
        // <div className={`w-full shadow-lg ${style.cardStyleA} p-5 rounded-2xl flex flex-col gap-2 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]`}>
        //     <div>
        //         نام بخش : {secName}
        //     </div>
        //     <div className={`${style.textStyleB}`}>
        //         تخت های اشغال شده : {toPersianDigits(occupaidBed)} از {toPersianDigits(totalBed)}
        //     </div>
        //     <div className='flex items-center gap-2'>
        //         <span>{toPersianDigits(bedPercent)}%</span>
        //         <div className='w-full h-3 rounded-full bg-[#878787]'>
        //             <div style={{ width: `${bedPercent}%` }} className={`h-full rounded-full transition-all duration-500 ${barColor}`} />
        //         </div>
        //     </div>
        // </div>
        <div style={{ boxShadow: `2px 2px 4px ${barColor}` }} className={`w-full shadow-lg ${style.cardStyleA} p-5 rounded-2xl flex flex-col gap-2 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]`}>
            <div style={{ color: barColor, textShadow: `2px 2px 4px ${barColor}` }} className='text-xl w-full flex justify-center items-center'>
                {secName}
            </div>
            <div className='w-full h-[170px] flex items-center justify-center'>
                <CircularProgressAlt value={bedPercent} color={barColor} />
            </div>
            <div className='flex justify-center text-xl'>
                {toPersianDigits(occupaidBed)} / {toPersianDigits(totalBed)}
            </div>
            <div className={`flex justify-center ${style.textStyleB}`}>تخت موجود</div>

            <div style={{backgroundColor:barColor}} className='text-white w-[170px] py-2 rounded-full flex justify-center mx-auto'>{status}</div>

        </div>
    )
}
