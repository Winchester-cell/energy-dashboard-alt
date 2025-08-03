import useSideBarStore from '@/stores/useSideBarStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export default function SubmenuItems({ text, href, icon, setIsOpen }) {

    const path = usePathname()
    const { isSideBarCollapsed } = useSideBarStore()

    useEffect(() => {
        if (path === href) {
            setIsOpen(true)
        }
    }, [path])

    return (
        <li className={`${path === href ? `font-bold text-[var(--textHover)]` : ``} ${isSideBarCollapsed ? `` : `ps-6`}`} >
            <Link className={`flex items-center gap-2 transition-all duration-500 hover:text-[var(--textHover)] ${isSideBarCollapsed ? `justify-center` : ``}`} href={href} >
                <span className='text-lg'>{icon}</span>
                <span className={`${isSideBarCollapsed ? `hidden` : ``} text-[12px]`}>{text}</span>
            </Link>
        </li>
    )
}
