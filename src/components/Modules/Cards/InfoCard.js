'use client'
import { toPersianDigits } from '@/utils/toPersianDigits';
import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function InfoCard({ title, icon, value , height }) {
    return (
        <div style={{height:height}} className='bg-[var(--colCard)] shadow-lg rounded-xl w-full p-5'>
            <div className='w-full flex items-center justify-between gap-3'>
                <span>{title}</span>
                <span className='text-lg p-3 rounded-full bg-[var(--colBg)]'>{icon}</span>
            </div>
            <div className='w-full flex items-center justify-between mt-5'>
                <span className='text-lg'>{toPersianDigits(value)}</span>
                <span className='text-lg p-3 rounded-full bg-[var(--colBg)] rotate-180'><FaLongArrowAltLeft /></span>
            </div>
        </div>
    )
}
