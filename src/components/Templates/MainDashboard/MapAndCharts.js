'use client'
import BarChart from '@/components/Modules/Charts/BarChart';
import CircularProgress from '@/components/Modules/Charts/RadialChart';
import dynamic from 'next/dynamic';
import React from 'react'
const MapView = dynamic(() => import('@/components/Modules/Maps/MapView'), {
    ssr: false,
});

export default function MapAndCharts() {
    return (
        <div className='px-5 flex gap-5'>

            <div className='w-full h-auto'>
                <MapView type={'monitoring'} />
            </div>

            <div className='w-[300px] flex flex-col gap-5'>

                <div className='w-full h-[300px] bg-[var(--colCard)] shadow-lg rounded-xl p-3'>
                    <BarChart />
                </div>

                <div className='w-full h-[300px] bg-[var(--colCard)] shadow-lg rounded-xl p-3'>
                    <CircularProgress title={'افزایش مصرف'} value={55} />
                </div>

            </div>


        </div>
    )
}
