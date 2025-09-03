import { colorVariantSelector } from '@/data/themeVariants'
import useSideBarStore from '@/stores/useSideBarStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export default function SubmenuItems({ text, href, icon, setIsOpen }) {

    const path = usePathname()
    const style = colorVariantSelector(path)
    const { isSideBarCollapsed } = useSideBarStore()

    useEffect(() => {
        if (path === href) {
            setIsOpen(true)
        }
    }, [path])

    return (
        <li className={`${path === href ? `font-bold ${style.SelectedSideBarMenuStyle}` : ``} ${isSideBarCollapsed ? `` : `ps-6`}`} >
            <Link className={`flex items-center gap-2 transition-all duration-500 ${style.hoverStyle} ${isSideBarCollapsed ? `justify-center` : ``}`} href={href} >
                <span className='text-lg'>{icon}</span>
                <span className={`${isSideBarCollapsed ? `hidden` : ``} text-[12px]`}>{text}</span>
            </Link>
        </li>
    )
}
