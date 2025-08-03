import SummarySection from '@/components/Templates/SericultureDashboard/SummarySection'
import TopPart from '@/components/Templates/SericultureDashboard/TopPart'
import React from 'react'

export default function SericultureDashboard() {
    return (
        <div className='w-full p-5'>
            <TopPart />
            <SummarySection />
        </div>
    )
}
