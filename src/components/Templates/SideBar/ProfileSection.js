import React from 'react'
import Profile from '@/asset/profile.svg'
import useSideBarStore from '@/stores/useSideBarStore'
import { useAuthStore } from '@/stores/useAuthStore'
import Link from 'next/link'
import Loading from '@/components/Modules/Loadings/Loading'

export default function ProfileSection() {

  const { isSideBarCollapsed } = useSideBarStore()
  const { user } = useAuthStore()

  if (!user) {
    return (
      <div className={`w-full flex ${isSideBarCollapsed ? 'justify-center' : ``} px py-5 px-10 gap-2`}>
        <Loading isSideBarCollapsed={isSideBarCollapsed} />
      </div>
    )
  }

  return (
    <Link href={'/use-panel'} className={`w-full flex ${isSideBarCollapsed ? 'justify-center' : ``} items-center gap p-2 gap-2`}>

      <Profile className={`${isSideBarCollapsed ? `w-[60px]` : ``} w-[80px] text-[var(--colTextA)] scale-[0.8]`} />

      <div className={`${isSideBarCollapsed ? `hidden` : ``}`}>

        <div className='text-[var(--colTextA)] font-bold mt-1'>{user?.userData.first_name ? `${user?.userData.first_name} ${user?.userData.last_name}` : user?.userData.username}</div>

        <div className='text-[var(--colTextB)] text-[12px] mt-1'>{user?.userRole}</div>

      </div>

    </Link>
  )


}
