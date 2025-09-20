'use client'
import TabSelector from '@/components/Modules/TabSelector/TabSelector'
import { pharmacyTabsContent } from '@/content/tabs'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import React, { useState } from 'react'

export default function PharmacyPage() {

    const [selectedTab, setSelectedTab] = useState(pharmacyTabsContent[0])
    const { themeType } = useThemeTypeStore()

    return (
        <div className='px-5 pb-5'>
            <TabSelector tabs={pharmacyTabsContent} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {themeType === 'hospital' && <div className='glass-card' />}
            <div className={`${themeType === 'hospital' ? `` : `bg-[var(--colCard)]`} p-5 rounded-xl`}>
                <div className='rounded-full'>
                    {selectedTab.elem}
                </div>
            </div>
        </div>
    )
}
