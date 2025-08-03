'use client'
import NoganStatusCard from '@/components/Modules/Cards/NoganStatusCard'
import DonutChart from '@/components/Modules/Charts/DonutChart'
import LineChart from '@/components/Modules/Charts/LineChart'
import Table from '@/components/Modules/Tables/Table'
import { summaryData } from '@/data/fakeData'
import useSideBarStore from '@/stores/useSideBarStore'
import React from 'react'

export default function ChartsGridAlt() {

    const { isSideBarOpen } = useSideBarStore()

    const data01 = [
        10, 15, 20, 40, 25, 30,
        35, 15, 10, 15, 35, 25
    ]

    const data02 = [
        10, 15, 20, 30, 25, 10,
        35, 25, 25, 30, 25, 20
    ]

    return (
        <>
            <div className='gap-5 grid grid-cols-1 lg:grid-cols-2'>
                <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
                    <LineChart color={"#008ffb"} title={'آمار پیله های موجود'} data={data01} />
                </div>
                <div className={`w-full flex gap-5 ${isSideBarOpen ? `pe-5` : ``}`}>
                    <div className='w-1/2 h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
                        <DonutChart title={'مزارع فعال'} data={[70, 30]} />
                    </div>
                    <div className='w-1/2 h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
                        <DonutChart title={'کرم های ابریشم'} data={[50, 80]} />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    summaryData.map(item => {
                        return <NoganStatusCard key={item.id} {...item} />
                    })
                }
            </div>
            <div className='mt-5 gap-5 grid grid-cols-1 lg:grid-cols-2'>
                <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
                    <LineChart color={"#008ffb"} title={'میزان فروش هفتگی'} data={data01} />
                </div>
                <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
                    <LineChart color={"#00e396"} title={'میزان فروش ماهانه'} data={data02} />
                </div>
            </div>
        </>
    )
}
