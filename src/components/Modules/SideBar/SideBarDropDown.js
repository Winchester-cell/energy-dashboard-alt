import useSideBarStore from '@/stores/useSideBarStore'
import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import SubmenuItems from './SubmenuItems';
import { usePathname } from 'next/navigation';
import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';

export default function SideBarDropDown({ text, icon, options }) {

    const { isSideBarCollapsed } = useSideBarStore()
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const { themeType } = useThemeTypeStore()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <li>
            <div onClick={() => setIsOpen(!isOpen)} className={`transition-all duration-500 cursor-pointer ${isOpen ? `${style.openedSideBarMenuStyle}` : ``} flex items-center ${isSideBarCollapsed ? `justify-center relative` : `px-4 justify-between`} py-2 `}>
                <div className='flex items-center gap-2'>
                    <span className='text-2xl'>{icon}</span>
                    <span className={`${isSideBarCollapsed ? `hidden` : `text-[14px]`}`}>{text}</span>
                </div>
                <IoIosArrowUp className={`w-4 h-4 top-1 end-4 text-[var(--colTextA)] ${isOpen ? `` : `rotate-180`} transition-all duration-500 absolute rounded-full p-[3px] ${style.cardStyleA} ${isSideBarCollapsed ? `` : `hidden`}`} />
                <IoIosArrowUp className={`mr-2 ${isSideBarCollapsed ? `hidden` : ``} ${isOpen ? `` : `rotate-180`} transition-all duration-500`} />
            </div>
            <ul className={`transition-all overflow-hidden duration-500 flex flex-col gap-3 ${isOpen ? `max-h-[999px] my-3` : `max-h-0`}`}>
                {
                    options.map((item, index) => {
                        return <SubmenuItems setIsOpen={setIsOpen} key={index} {...item} />
                    })
                }
            </ul>
        </li>
    )
}
