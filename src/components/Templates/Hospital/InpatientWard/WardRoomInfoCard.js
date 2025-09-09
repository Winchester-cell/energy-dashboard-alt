import React from 'react'
import BedsInfoCard from './BedsInfoCard'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import { colorVariantSelector } from '@/data/themeVariants'

export default function WardRoomInfoCard({ roomNumber, beds }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div className={`${style.cardStyleB} w-full p-5 rounded-xl shadow-lg`}>
            <div>اتاق {toPersianDigits(roomNumber)}</div>
            <div className='flex items-center rounded-xl gap-5 mt-5'>
                {
                    beds.map((bed, index) => <BedsInfoCard key={index} {...bed} />)
                }
            </div>
        </div>
    )
}
