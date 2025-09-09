'use client'
import useSideBarStore from '@/stores/useSideBarStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import SubmenuItems from './SubmenuItems'
import { IoIosArrowUp } from "react-icons/io";
import SideBarDropDown from './SideBarDropDown'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'

export default function SideBarLinkItems({ type, text, href, icon, options }) {

  const path = usePathname()
  const { isSideBarCollapsed } = useSideBarStore()
  const { themeType } = useThemeTypeStore()
  const style = colorVariantSelector(path , themeType)

  if (type === 'dropdown') {

    return (
      <SideBarDropDown text={text} options={options} icon={icon} />
    )

  }

  return (
    <li className={`${path === href ? `font-bold ${style.SelectedSideBarMenuStyle}` : ``} py-2 list-none`} >
      <Link className={`flex items-center gap-2 transition-all duration-500 ${style.hoverStyle} ${isSideBarCollapsed ? `justify-center` : ` ps-4`}`} href={href} >
        <span className='text-2xl'>{icon}</span>
        <span className={`${isSideBarCollapsed ? `hidden` : `text-[14px]`}`}>{text}</span>
      </Link>
    </li>
  )
}
