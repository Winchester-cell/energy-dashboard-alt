import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import { IoMdColorPalette } from "react-icons/io";



export default function ThemeTypeSelector() {

    const pathname = usePathname()
    const { themeType, setThemeType } = useThemeTypeStore()
    const style = colorVariantSelector(pathname, themeType)
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { id: 1, name: 'تم پیشفرض', key: 'def' },
        { id: 2, name: 'تم بیمارستان', key: 'hospital' },
    ]

    return (
        <div className='relative'>
            <button onClick={() => setIsOpen(!isOpen)} className={`flex items-center justify-center w-10 h-10 border-2 rounded-full linkHover ${style.textStyleA} ${style.borderStyle} ${style.hoverStyle}`} >
                <IoMdColorPalette className='text-xl' />
            </button>
            <ul className={`${style.matteCard} ${isOpen ? `` : `hidden`} backdrop-blur-2xl shadow-lg p-3 rounded-xl w-[150px] flex flex-col gap-2 absolute z-[9999999] top-[50px] start-[-50px]`}>
                {
                    menuItems.map(m => {
                        return <li onClick={() => setThemeType(m.key)} className={`cursor-pointer`}>{m.name}</li>
                    })
                }
            </ul>
        </div>
    )

}
