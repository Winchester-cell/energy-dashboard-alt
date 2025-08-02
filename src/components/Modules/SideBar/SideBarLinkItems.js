'use client'
import useSideBarStore from '@/stores/useSideBarStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import SubmenuItems from './SubmenuItems'
import { IoIosArrowUp } from "react-icons/io";
import SideBarDropDown from './SideBarDropDown'

export default function SideBarLinkItems({ type, text, href, icon, options }) {

  const path = usePathname()
  const { isSideBarCollapsed } = useSideBarStore()

  if (type === 'dropdown') {

    return (
      <SideBarDropDown text={text} options={options} icon={icon} />
    )

  }

  return (
    <li className={`${path === href ? `font-bold text-[var(--textHover)]` : ``} py-2 list-none`} >
      <Link className={`flex items-center gap-2 transition-all duration-500 hover:text-[var(--textHover)] ${isSideBarCollapsed ? `justify-center` : ` ps-4`}`} href={href} >
        <span className='text-2xl'>{icon}</span>
        <span className={`${isSideBarCollapsed ? `hidden` : `text-[14px]`}`}>{text}</span>
      </Link>
    </li>
  )
}
