import useSideBarStore from '@/stores/useSideBarStore'
import React from 'react'
import SideBar from './SideBar'
import SideBarLinkItems from './SideBarLinkItems'

export default function SideBarField({ title, links, icon }) {

    const { isSideBarCollapsed } = useSideBarStore()

    return (
        <fieldset className='border-t border-[var(--colTextB)]'>
            <legend className='flex items-center gap-1 mx-auto px-2 text-[var(--colTextB)] text-sm'>
                <span>{icon}</span>
                <span className={isSideBarCollapsed ? 'hidden' : ''}>{title}</span>
            </legend>
            <ul className='mt-2'>
                {
                    links.map((item, index) => {
                        return <SideBarLinkItems key={index} {...item} />
                    })
                }
            </ul>
        </fieldset>
    )
}
