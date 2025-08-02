import useSideBarStore from '@/stores/useSideBarStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SubmenuItems({ text, href, icon }) {

    const path = usePathname()
    const { t } = useTranslation()
    const { isSideBarCollapsed } = useSideBarStore()

    return (
        <li className={`${path === href ? `font-bold text-[var(--textHover)]` : ``} ${isSideBarCollapsed ? `` : `ps-6`}`} >
            <Link className={`flex items-center gap-2 transition-all duration-500 hover:text-[var(--textHover)] ${isSideBarCollapsed ? `justify-center` : ``}`} href={href} >
                <span className='text-lg'>{icon}</span>
                <span className={`${isSideBarCollapsed ? `hidden` : ``} text-[12px]`}>{text}</span>
            </Link>
        </li>
    )
}
