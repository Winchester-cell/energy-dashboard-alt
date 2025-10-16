import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React from 'react'

export default function SuppliesConsumeCard(props) {
    return (
        <div style={{ boxShadow: `2px 2px 4px #0ea5e9` }} className={`p-5 bg-[var(--colBg)] shadow-lg rounded-2xl gap-5 grid grid-cols-5 cursor-pointer hover:py-7 transition-all duration-500`}>
            <div className={`border-l-2 border-[white] gap-2 flex flex-col justify-center-center`}>
                {props.name}
                <div className='text-[var(--colTextB)]'>{props.code}</div>
            </div>
            <div className={`border-l-2 border-[white] flex items-center`}>{props.required}</div>
            <div className={`border-l-2 border-[white] flex items-center`}>{props.used}</div>
            <div className={`border-l-2 border-[white] flex items-center`}>{props.remaining}</div>
            <div className='flex items-center'>{props.status}</div>
        </div >
    )
}
