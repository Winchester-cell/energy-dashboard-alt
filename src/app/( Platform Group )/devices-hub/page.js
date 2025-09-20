'use client'
import TabSelector from '@/components/Modules/TabSelector/TabSelector'
import { devicesHubTabsContent } from '@/content/tabs'
import React, { useState } from 'react'

export default function DevicesHub() {

    const [selectedTab, setSelectedTab] = useState(devicesHubTabsContent[0])

    return (
        <div>
            <TabSelector tabs={devicesHubTabsContent} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {selectedTab.elem}
        </div>
    )
}
