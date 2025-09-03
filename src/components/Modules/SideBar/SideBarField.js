import useSideBarStore from '@/stores/useSideBarStore'
import React from 'react'
import SideBarLinkItems from './SideBarLinkItems'
import { usePathname } from 'next/navigation'
import { colorVariantSelector } from '@/data/themeVariants'

export default function SideBarField({ title, links, icon }) {

    const { isSideBarCollapsed } = useSideBarStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname)

    return (
        <fieldset className={`border-t ${style.borderStyle}`}>
            <legend className={`flex items-center gap-1 mx-auto px-2 ${style.textStyleB} text-sm`}>
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
