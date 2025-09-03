'use client'

import { colorVariantSelector } from '@/data/themeVariants'
import i18n from '@/i18n'
import useSideBarStore from '@/stores/useSideBarStore'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function SideBarCollapseButton() {

    const { isSideBarCollapsed, toggleSideBarCollapse } = useSideBarStore()
    const pathname = usePathname();
    const styles = colorVariantSelector(pathname)

    return (
        <div className=' pt-4 px-4'>
            <button onClick={toggleSideBarCollapse} className={`rounded-full p-2 cursor-pointer text-xl transition-all ease-in duration-500 ${styles.cardStyleB} ${styles.hoverStyle} ${isSideBarCollapsed ? 'rotate-180' : ''}`}>
                {i18n.language === 'en' ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </button>
        </div>
    )
}
