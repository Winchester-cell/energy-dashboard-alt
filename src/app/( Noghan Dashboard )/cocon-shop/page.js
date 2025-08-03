import CoconProductCard from '@/components/Modules/Cards/CoconProductCard'
import { productList } from '@/data/fakeData'
import React from 'react'

export default function CoconShop() {
    return (
        <div className='w-full p-5'>

            <div className='font-bold text-2xl mb-10'>
                لیست محصولات
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
