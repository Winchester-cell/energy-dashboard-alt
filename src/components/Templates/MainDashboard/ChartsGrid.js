'use client'
import LineChart from '@/components/Modules/Charts/LineChart'
import React from 'react'

export default function ChartsGrid() {

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
        </div>
    )
}
