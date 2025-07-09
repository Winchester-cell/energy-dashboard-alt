'use client'

import i18n from '@/i18n'
import useSideBarStore from '@/stores/useSideBarStore'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function SideBarCollapseButton() {

    const { isSideBarCollapsed, toggleSideBarCollapse } = useSideBarStore()

    return (
        <div className=' pt-5 px-5 pb-2'>
            <button onClick={toggleSideBarCollapse} className={`bg-[var(--colBg)] rounded-full p-3 cursor-pointer text-xl transition-all ease-in duration-500 hover:text-[var(--textHover)] ${isSideBarCollapsed ? 'rotate-180' : ''}`}>
                {i18n.language === 'en' ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </button>
        </div>
    )
}
