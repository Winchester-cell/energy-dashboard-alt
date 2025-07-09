'use client'
import DonutChart from '@/components/Modules/Charts/DonutChart'
import LineChart from '@/components/Modules/Charts/LineChart'
import Table from '@/components/Modules/Tables/Table'
import useSideBarStore from '@/stores/useSideBarStore'
import React from 'react'

export default function ChartsGrid() {

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
        <div className='p-5 gap-5 grid grid-cols-1 lg:grid-cols-2'>
            <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
                <LineChart color={"#008ffb"} title={'میزان مصرف انرژی'} data={data01} />
            </div>
            <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
                <LineChart color={"#00e396"} title={'میزان مصرف انرژی'} data={data02} />
            </div>
            <div className='w-full h-[clamp(300px,19dvw,600px)] pt-5 px-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
                <Table />
            </div>
            <div className={`w-full flex gap-5 ${isSideBarOpen ? `pe-5` : ``}`}>
                <div className='w-1/2 h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
                    <DonutChart title={'میزان مصرف'} data={[70, 30]} />
                </div>
                <div className='w-1/2 h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
                    <DonutChart title={'میزان مصرف'} data={[50, 80]} />
                </div>
            </div>
        </div>
    )
}
