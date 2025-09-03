'use client'

import { colorVariantSelector } from '@/data/themeVariants';
import i18n from '@/i18n';
import useSideBarStore from '@/stores/useSideBarStore';
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function SideBarToggleButton() {

    const { isSideBarOpen, toggleSideBar } = useSideBarStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname)

    return (
        <button onClick={toggleSideBar} className={`
            ${isSideBarOpen ? '' : 'rotate-180'}
            ${style.cardStyleA} ${style.hoverStyle}
            flex items-center justify-center p-2 text-lg text-[var(--colTextA)] bg-[var(--colCard)]
            rounded-full shadow-md transition-all ease-in-out duration-700 
            `}>

            {i18n.language === 'en' ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
    )
}
