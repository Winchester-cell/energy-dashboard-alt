import DeviceStatusCard from '@/components/Modules/Cards/DeviceStatusCard'
import DonutChartss from '@/components/Modules/Charts/DonutCha'
import DonutChart from '@/components/Modules/Charts/DonutChart'
import LocalMap from '@/components/Modules/Maps/LocalMap'
import React from 'react'

export default function MapAndStatusCard() {
    return (
        <>
            <div className='flex w-full lg:h-[25dvw] lg:flex-row flex-col gap-5 flex-grow'>
                <DeviceStatusCard />
                <div className='lg:w-1/2 w-full rounded-xl bg-[var(--colCard)] shadow-md p-5 py-10'>
                    <DonutChartss  />
                </div>
            </div>
            <LocalMap />
        </>
    )
}
