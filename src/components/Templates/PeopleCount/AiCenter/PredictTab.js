import AreaChart from '@/components/Modules/Charts/AreaChart'
import { data } from 'autoprefixer'
import React from 'react'

const categories = ['امروز', 'فردا', 'پس فردا', '3 روز آینده', '4 روز آینده', '5 روز آینده', '6 روز آینده']
const series = [
    { name: 'پیشبینی تردد', data: [1247, 1180, 1350, 1420, 1100, 1600, 1380] }
]

const cardData = [
    { percent: 67, title: 'پیش‌بینی فردا', value: '1,180 نفر', color: '#2563eb' },
    { percent: 85, title: 'شلوغ‌ترین ساعت', value: '14:30', color: '#16a34a' },
    { percent: 20, title: 'تأثیر آب و هوا', value: '-15%', color: '#ea580c' },
]

export default function PredictTab() {

    return (
        <div className='p-5 bg-[var(--colCard)] rounded-2xl'>
            <div style={{ boxShadow: `2px 2px 4px #008ffb` }} className='bg-[var(--colBg)] p-5 h-[400px] rounded-2xl'>
                <AreaChart shadow={false} categories={categories} series={series} yMin={1000} title={'پیشبینی تردد در هفت روز اینده'} />
            </div>

            <div className='grid gap-5 grid-cols-3 mt-5'>
                {
                    cardData.map((item, index) => (
                        <div style={{ boxShadow: `2px 2px 4px ${item.color}` }} key={index} className='bg-[var(--colBg)] rounded-2xl p-5 flex flex-col gap-5'>
                            <div className='text-[16px] font-semibold'>{item.title}</div>
                            <div style={{color:item.color}} className='text-xl'>{item.value}</div>
                            <div className='w-full h-[10px] bg-gray-400 rounded-full overflow-hidden'>
                                <div style={{width:`${item.percent}%` , backgroundColor:item.color}} className='rounded-full h-full' />
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
