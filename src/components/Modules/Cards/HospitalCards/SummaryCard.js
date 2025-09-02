import '@/styles/cardStyle.css'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits';
import React from 'react'

export default function SummryCard({ icon, cardTitle, metricA, valA, metricB, valB, extraText, extraVal }) {

    return (
        <div className='w-full backdrop-blur-sm bg-[var(--colCard)] rounded-xl p-10 flex flex-col gap-5 text-[var(--colTextA)] shadow-lg'> 
            <div className='w-full flex items-center justify-between'>
                {icon}
                <div>
                    <div className='text-[14px]'>{metricA}</div>
                    <div className='text-[12px] text-[var(--colTextB)]'>{valA}</div>
                </div>
            </div>
            <div className='text-[20px] font-bold'>
                {cardTitle}
            </div>
            <div className='text-[20px] font-bold'>
                {toPersianDigits(valB)} <span className='text-[14px] text-[var(--colTextB)]'>{metricB}</span>
            </div>
            <div className='w-full flex items-center justify-between'>
                <div>{extraText}</div>
                <div>{extraVal}</div>
            </div>
        </div>
    )
}
