import React from 'react'
import BedsInfoCard from './BedsInfoCard'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'

export default function WardRoomInfoCard({ roomNumber , beds }) {
    

    return (
        <div className='glass-card-b w-full p-5 rounded-xl'>
            <div>اتاق {toPersianDigits(roomNumber)}</div>
            <div className='flex items-center rounded-xl gap-5 mt-5'>
                {
                    beds.map((bed, index) => <BedsInfoCard key={index} {...bed} />)
                }
            </div>
        </div>
    )
}
