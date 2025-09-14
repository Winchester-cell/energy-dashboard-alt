import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchInput({stnWidth = 250}) {
    const [extended, setExtended] = useState(false)
    const {themeType} = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname , themeType)
    return (
        <div style={{width: extended ? stnWidth : 54}} onClick={!extended ? () => setExtended(true) : null} className={`flex ${extended ? '' : 'cursor-pointer'} transition-all duration-500 items-center ${style.cardStyleB} px-5 py-2 gap-3 rounded-full`}>
            <FaSearch onClick={() => setExtended(!extended)} className='flex-shrink-0 cursor-pointer' />
            <input className={`${extended ? `opacity-100 visible` : `opacity-0 invisible`} transition-all duration-500`} type="text" placeholder='جستوجو ...' />
        </div>
    )
}
