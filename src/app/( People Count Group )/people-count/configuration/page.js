'use client'
import TabSelector from '@/components/Modules/TabSelector/TabSelector';
import { systemConfigurationTabsContent } from '@/content/tabs';
import React, { useState } from 'react'

export default function Configuration() {
    const [selectedTab , setSelectedTab] = useState(systemConfigurationTabsContent[0])
    return (
    <div className='p-5'>
      <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabs={systemConfigurationTabsContent}/>
      {selectedTab.elem}
    </div>
  )
}
