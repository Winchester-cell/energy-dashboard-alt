import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function ThemeTypeSelector() {

    const pathname = usePathname()
    const { themeType , setThemeType } = useThemeTypeStore()
    const style = colorVariantSelector(pathname, themeType)
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { id: 1, name: 'تم پیشفرض', key: 'def' },
        { id: 2, name: 'تم بیمارستان', key: 'hospital' },
    ]

    return (
        <div className='relative'>
            <button onClick={() => setIsOpen(!isOpen)} className={`w-[90px] text-center py-2 rounded-full text-[12px] block shadow-lg ${style.cardStyleC}`}>
                انتخاب تم
            </button>
            <ul className={`${style.cardStyleC} ${isOpen ? `` : `hidden`} shadow-lg p-3 rounded-xl w-[200px] flex flex-col gap-2 absolute z-[9999999] top-[40px] start-0`}>
                {
                    menuItems.map(m => {
                        return <li onClick={()=>setThemeType(m.key)} className={`${style.textStyleB} cursor-pointer`}>{m.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
