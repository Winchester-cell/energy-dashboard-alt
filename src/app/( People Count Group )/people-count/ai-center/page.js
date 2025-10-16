'use client'
import TabSelector from '@/components/Modules/TabSelector/TabSelector'
import { peopleCountAiCenterTabs } from '@/content/tabs'
import React, { useState } from 'react'

export default function AiCenterPage() {

    const [selectedTab, setSelectedTab] = useState(peopleCountAiCenterTabs[0])

    return (
        <div className='p-5'>

            <div className='w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl'>
                <h2 className='text-2xl font-bold'>🧠 مرکز هوش مصنوعی</h2>
                <p className='text-[var(--colTextB)] mt-3'>پیشبینی آمار در سناریو های مختلف</p>
            </div>

            <TabSelector tabs={peopleCountAiCenterTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {selectedTab.elem}
        </div>
    )
}
