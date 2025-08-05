import React from 'react'
import { productList } from '@/data/fakeData'
import ProductCardInCart from '../Cards/ProductCardInCart'

export default function Cart({ isOpen }) {

    if (isOpen) {
        return (
            <div className='w-[400px] h-[400px] overflow-y-auto bg-[var(--colCard)] flex flex-col gap-5 absolute top-[50px] start-[-320px] shadow-lg rounded-xl p-3'>
                <ProductCardInCart {...productList[0]} />
                <ProductCardInCart {...productList[1]} />
                <ProductCardInCart {...productList[2]} />
                <div>ادامه خرید</div>
            </div>
        )
    }

    return null

}
