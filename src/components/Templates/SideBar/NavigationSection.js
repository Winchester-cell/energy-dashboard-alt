import SideBarLinkItems from '@/components/Modules/SideBar/SideBarLinkItems'
import SideBarContent from '@/content/sideBarContent'
import { useAuthStore } from '@/stores/useAuthStore'
import useSideBarStore from '@/stores/useSideBarStore'
import React from 'react'
export default function NavigationSection() {

    const { isSideBarCollapsed } = useSideBarStore()
    const { user } = useAuthStore()

    return (
        <div>
            <div className='w-full px-5'>
                <div className='h-[0.5px] w-full bg-[var(--colTextB)]' />
            </div>
            {
                // user &&
                <ul className={`mt-5 w-full flex flex-col gap-7 ${isSideBarCollapsed ? `` : `ps-7`}  text-[var(--colTextA)]`}>
                    {SideBarContent.links.map((item, index) => {
                        return <SideBarLinkItems key={index} {...item} />
                    })}
                </ul>
            }
        </div >
    )
}
