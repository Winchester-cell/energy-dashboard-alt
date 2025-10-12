'use client'
import TabSelector from '@/components/Modules/TabSelector/TabSelector'
import { workflowSettingsTabs } from '@/content/tabs'
import React, { useState } from 'react'

export default function WorkFlowSettingsPage() {

    const [selectedTab , setSelectedTab] = useState(workflowSettingsTabs[0])

    return (
        <div className='p-5'>
            <div className='w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl'>
                <h2 className='text-2xl font-bold'>
                    تنظیمات پیکربندی فرآیندها
                </h2>
                <p className='text-[var(--colTextB)] mt-3'>
                    مدیریت فرمول‌ها، مراحل تولید و پیکربندی‌های فنی
                </p>
            </div>
            <TabSelector tabs={workflowSettingsTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {
                selectedTab.elem
            }
        </div>
    )
}
