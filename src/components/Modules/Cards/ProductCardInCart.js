import React from 'react'
import { MdDelete } from "react-icons/md";


export default function ProductCardInCart({ name, desc, img, price }) {
    return (
        <div className='w-full h-[90px] rounded-xl bg-[var(--colBg)] shadow-lg overflow-hidden flex items-center gap-5'>
            <img src={img} className='h-full w-[90px] object-cover rounded-xl' />
            <div>
                <div className='text-[14px]'>{name}</div>
                <div className='text-[14px] text-[var(--colTextB)]'>{price} تومان</div>
            </div>
            <MdDelete className='ms-auto me-5'/>
        </div>
    )
}
