import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";


export default function SuppliesInfoCard(props) {

    return (
        <div style={{ boxShadow: `2px 2px 4px #0ea5e9` }} className={`p-5 bg-[var(--colBg)] shadow-lg rounded-2xl gap-5 grid grid-cols-5 cursor-pointer hover:py-7 transition-all duration-500`}>
            <div className={`border-l-2 border-[white] flex items-center`}>{props.id}</div>
            <div className={`border-l-2 border-[white] gap-2 flex flex-col justify-center-center`}>
                {props.name}
                <div className='text-[12px] text-[var(--colTextB)]'>{props.description}</div>
            </div>
            <div className={`border-l-2 border-[white] flex items-center`}>{props.unit}</div>
            <div className={`border-l-2 border-[white] flex items-center`}>{toPersianDigits(props.price)}</div>
            <div className='flex items-center gap-5'>
                <MdEdit  className='w-5 h-5'/>
                <MdDelete  className='w-5 h-5'/>
            </div>
        </div >
    )
}
