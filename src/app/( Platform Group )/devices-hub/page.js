'use client'
import TabSelector from '@/components/Templates/DevicesHub/TabSelector'
import { devicesHubTabsContent } from '@/content/tabs'
import React, { useState } from 'react'

export default function DevicesHub() {

    const [selectedTab, setSelectedTab] = useState(devicesHubTabsContent[0])

    return (
        <div>
            <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {selectedTab.elem}
        </div>
    )
}
