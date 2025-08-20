'use client'
import CoconProductCard from '@/components/Modules/Cards/CoconProductCard'
import Cart from '@/components/Modules/Cart/Cart';
import { productList } from '@/data/fakeData'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits';
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";


export default function CoconShop() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-full p-5'>

            <div className='font-bold text-2xl mb-5 flex items-center justify-between'>
                <span>
                    لیست محصولات
                </span>
                <div className='bg-[var(--colCard)] shadow-lg px-7 py-2 rounded-full flex items-center justify-center relative'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <FaShoppingCart />
                    </button>
                    <div className='w-6 h-6 rounded-full bg-[var(--textHover)] absolute top-[-10px] start-0 flex items-center justify-center text-[12px]'>{toPersianDigits(2)}</div>
                    <Cart isOpen={isOpen} />
                </div>

            </div>

            <div className='grid grid-cols-3 gap-5'>
                {
                    productList.map(product => {
                        return <CoconProductCard key={product.id} {...product} />
                    })
                }
            </div>

        </div>
    )
}
