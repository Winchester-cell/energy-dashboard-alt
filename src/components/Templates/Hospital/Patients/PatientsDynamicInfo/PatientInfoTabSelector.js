import { patientInfoTabsContent } from '@/content/tabs'
import React from 'react'

export default function PatientInfoTabSelector({ selectedTab, setSelectedTab }) {

    const selectedClass = `glass-card-b rounded-t-3xl`
    return (
        <div className='flex w-full glass-card pt-5 rounded-t-xl items-center mt-5 px-16 gap-5'>
            {
                patientInfoTabsContent.map(tab => {
                    return <div key={tab.id} onClick={() => setSelectedTab(tab)} className={`text-[6px] lg:text-[14px] w-full cursor-pointer flex justify-center py-5 ${selectedTab.selectKey === tab.selectKey ? selectedClass : ``}`}>{tab.tabName}</div>
                })
            }
        </div>
    )
}
