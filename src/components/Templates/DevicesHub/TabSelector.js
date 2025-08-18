import { devicesHubTabsContent } from '@/content/devicesHubTabs'
import React from 'react'

export default function TabSelector({ selectedTab, setSelectedTab }) {

    const selectedClass = `bg-[var(--colCard)] rounded-t-xl`

    return (
        <div className='flex w-full items-center mt-5 px-16 gap-5'>
            {
                devicesHubTabsContent.map(tab => {
                    return <div key={tab.id} onClick={() => setSelectedTab(tab)} className={`text-[6px] lg:text-[14px] w-full cursor-pointer flex justify-center py-5 ${selectedTab.selectKey === tab.selectKey ? selectedClass : ``}`}>{tab.tabName}</div>
                })
            }
        </div>
    )
}
