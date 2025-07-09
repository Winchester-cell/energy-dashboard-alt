'use client'
import useSideBarStore from '@/stores/useSideBarStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SideBarLinkItems({ textKey, href, icon }) {

  const path = usePathname()
  const { t } = useTranslation()
  const { isSideBarCollapsed } = useSideBarStore()

  return (
    <li className={`${path === href ? `font-bold text-[var(--textHover)]` : ``}`} >
      <Link className={`flex items-center gap-3 linkHover hover:text-[var(--textHover)] ${isSideBarCollapsed ? `justify-center` : ``}`} href={href} >
        <span className='text-3xl'>{icon}</span>
        <span className={`${isSideBarCollapsed ? `hidden` : ``}`}>{t(textKey)}</span>
      </Link>
    </li>
  )
}
