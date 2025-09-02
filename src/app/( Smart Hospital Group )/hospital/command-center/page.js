'use client'
import ReAreaChart from '@/components/Modules/Charts/Recharts/ReAreaChart'
import DevicesIdleSection from '@/components/Templates/Hospital/CommandCenter/DevicesIdleSection'
import SchematicMapSection from '@/components/Templates/Hospital/CommandCenter/SchematicMapSection'
import SummarySection from '@/components/Templates/Hospital/CommandCenter/SummarySection'
import React from 'react'

export default function Summary() {
    return (
        <>
            <div className='p-5'>
                <SummarySection />
                <SchematicMapSection />
                <ReAreaChart />
                <DevicesIdleSection />
            </div>
        </>
    )
}
