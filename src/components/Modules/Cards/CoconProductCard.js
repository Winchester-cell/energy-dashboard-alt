import { toPersianDigits } from '@/utils/toPersianDigits'
import React from 'react'

export default function CoconProductCard({ img, name, price, desc }) {

    console.log('typeof price:', typeof price, 'value:', price);

    return (
        <div className='w-full h-[350px] bg-[var(--colCard)] rounded-xl overflow-hidden'>
            <div className='h-1/2 w-full'>
                <img src={img} className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col px-5 my-5 gap-3'>
                <span>{'نام مصحول : '}{name}</span>
                <span className='line-clamp-2 text-[var(--colTextB)]'>{'توضیحات : '}{desc}</span>
                <div className='flex items-center justify-between'>
                    <span>{'قیمت : '}{toPersianDigits(price)}</span>
                    <button className='bg-[var(--colBg)] px-5 py-2 rounded-full'>سفارش</button>
                </div>
            </div>
        </div>
    )
}
