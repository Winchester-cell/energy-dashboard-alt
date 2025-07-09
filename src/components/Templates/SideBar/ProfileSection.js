import React from 'react'
import Profile from '@/asset/profile.svg'
import SideBarContent from '@/content/sideBarContent'
import { useTranslation } from 'react-i18next'
import useSideBarStore from '@/stores/useSideBarStore'

export default function ProfileSection() {

  const { t } = useTranslation()
  const { isSideBarCollapsed } = useSideBarStore()

  return (
    <div className={`w-full flex ${isSideBarCollapsed ? 'justify-center' : ``} items-center gap p-5 gap-2`}>

      <Profile className={`w-[80px] text-[var(--colTextA)] scale-90`} />

      <div className={`${isSideBarCollapsed ? `hidden` : ``}`}>

        <div className='text-[var(--colTextA)] font-bold mt-1'>{t(SideBarContent.profileSection.username.textKey)}</div>

        <div className='text-[var(--colTextB)]'>{t(SideBarContent.profileSection.role.textKey)}</div>

      </div>


    </div>
  )


}
