import SilkWormCard from '@/components/Modules/Cards/SilkWormCard'
import { noganData } from '@/data/fakeData'
import React from 'react'

export default function TopPart() {
    return (
        <div className='w-full h-full flex items-center gap-5'>
            {
                noganData.map(item => {
                    return <SilkWormCard key={item.id} width={'50%'} {...item} />
                })
            }
        </div>
    )
}
