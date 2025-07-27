'use client'
import LangToggle from '@/components/Modules/SideBar/LangToggle'
import ThemeToggle from '@/components/Modules/SideBar/ThemeToggle'
import useSideBarStore from '@/stores/useSideBarStore'
import React from 'react'

export default function SettingsSection() {

    const { isSideBarCollapsed } = useSideBarStore()

    return (
        <div>
            <div className='w-full px-5'>
                <div className='h-[0.5px] w-full bg-[var(--colTextB)]'></div>
            </div>
            <div className={`mt-5 gap-2 flex items-center ${isSideBarCollapsed ? `flex-col` : `flex-row ps-5`}`}>
                <ThemeToggle />
                <LangToggle />
            </div>
        </div>
    )
}
