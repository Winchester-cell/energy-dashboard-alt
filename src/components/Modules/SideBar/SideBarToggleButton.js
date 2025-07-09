'use client'

import i18n from '@/i18n';
import useSideBarStore from '@/stores/useSideBarStore';
import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function SideBarToggleButton() {

    const { isSideBarOpen, toggleSideBar } = useSideBarStore()

    return (
        <button onClick={toggleSideBar} className={`
            ${isSideBarOpen ? '' : 'rotate-180'}
            lg:hidden
            hover:text-[var(--textHover)]
            flex items-center justify-center p-2 text-lg text-[var(--colTextA)] bg-[var(--colCard)]
            rounded-full shadow-md transition-all ease-in-out duration-700 
            `}>

            {i18n.language === 'en' ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
    )
}
