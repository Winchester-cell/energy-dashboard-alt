import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";

export default function MainDashboardTableItems(props) {
    return (
        <div style={{ boxShadow: `2px 2px 4px #3b82f6 ` }} className={`p-5 bg-[var(--colCard)] shadow-lg rounded-2xl gap-5 grid grid-cols-8 cursor-pointer hover:py-7 transition-all duration-500`}>
            <div className={`border-l-2 border-[white] flex items-center`}>{toPersianDigits(props.orderCode)}</div>
            <div className={`border-l-2 border-[white] flex items-center`}>{toPersianDigits(props.product)}</div>
            <div className={`border-l-2 border-[white] flex items-center`}>{toPersianDigits(props.quantity)}</div>
            <div className={`border-l-2 border-[white] flex items-center`}>{toPersianDigits(props.status)}</div>
            <div className={`border-l-2 border-[white] flex flex-col justify-center items-center gap-2 pe-5`}>
                <div>{toPersianDigits(props.progress)}%</div>
                <div className='bg-gray-400 h-[10px] rounded-full w-full overflow-hidden'>
                    <div style={{ width: `${props.progress !== 0 ? props.progress : 0}%` }} className='bg-sky-600 h-full' />
                </div>
            </div>
            <div className={`border-l-2 border-[white] flex items-center`}>{toPersianDigits(props.startDate)}</div>
            <div className={`border-l-2 border-[white] flex items-center`}>{toPersianDigits(props.endDate)}</div>
            <div className='flex items-center gap-5'>
                <MdEdit className='w-5 h-5' />
                <MdDelete className='w-5 h-5' />
            </div>
        </div >
    )
}
