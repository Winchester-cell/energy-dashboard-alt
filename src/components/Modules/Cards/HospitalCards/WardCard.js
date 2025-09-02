import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React from 'react'

export default function WardCard(props) {
    const { secName, occupaidBed, totalBed } = props
    const bedPercent = Math.floor(occupaidBed / totalBed * 100)
    let barColor = "";
    if (bedPercent <= 40) {
        barColor = "bg-green-600";
    } else if (bedPercent <= 80) {
        barColor = "bg-yellow-600";
    } else {
        barColor = "bg-red-600";
    }
    return (
        <div className='w-full bg-[var(--colCard)] p-5 rounded-xl flex flex-col gap-2'>
            <div>
                نام بخش : {secName}
            </div>
            <div>
                تخت های اشغال شده : {toPersianDigits(occupaidBed)} از {toPersianDigits(totalBed)}
            </div>
            <div className='flex items-center gap-2'>
                <span>{toPersianDigits(bedPercent)}%</span>
                <div className='w-full h-3 rounded-full bg-gray-700'>
                    <div style={{ width: `${bedPercent}%` }} className={`h-full rounded-full ${barColor}`} />
                </div>
            </div>
        </div>
    )
}
