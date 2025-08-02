import SideBarLinkItems from '@/components/Modules/SideBar/SideBarLinkItems'
import SideBarContent from '@/content/sideBarContent'
import useSideBarStore from '@/stores/useSideBarStore'
import React, { useState } from 'react'
export default function NavigationSection() {

    const { isSideBarCollapsed } = useSideBarStore()
    const [openDropdownKey, setOpenDropdownKey] = useState(null)

    return (
        <div>
            <div className='w-full px-5'>
                <div className='h-[0.5px] w-full bg-[var(--colTextB)]' />
            </div>
            {
                // user &&
                <ul className={`mt-5 w-full flex flex-col gap-2 text-[var(--colTextA)]`}>
                    {SideBarContent.links.map((item, index) => {
                        return (
                            <SideBarLinkItems
                                key={index}
                                {...item}
                                isOpen={openDropdownKey === item.openKey}
                                openMenuHandler={(key) =>
                                    setOpenDropdownKey((prev) => (prev === key ? null : key))
                                }
                            />
                        )
                    })}
                </ul>
            }
        </div >
    )
}
