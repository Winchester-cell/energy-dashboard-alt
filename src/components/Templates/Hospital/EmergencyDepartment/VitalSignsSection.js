import ECG from '@/components/Modules/Cards/HospitalCards/ECG'
import AreaChart from '@/components/Modules/Charts/AreaChart'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React, { useEffect, useState } from 'react'
import { FaHeartbeat } from 'react-icons/fa'

export default function VitalSignsSection({ selectedPatient }) {

    const initialCategories = ['08:00', '08:10', '08:20', '08:30', '08:40', '08:50']

    const [chartData01, setChartData01] = useState({
        categories: initialCategories,
        series: [
            { name: 'SpO2 بیمار', data: [98, 97, 96, 97, 98, 99] },
        ]
    })

    const [chartData02, setChartData02] = useState({
        categories: initialCategories,
        series: [
            { name: 'ECG بیمار', data: [0.5, 0.6, 0.4, 0.7, 0.6, 0.5] }
        ]
    })

    useEffect(() => {
        const interval = setInterval(() => {
            // تولید داده‌های تصادفی برای SpO2 (مثال)
            // const newSpO2 = chartData01.series[0].data.map(
            //     value => Math.max(90, Math.min(100, value + (Math.random() * 2 - 1)))
            // )

            // تولید داده‌های تصادفی برای ECG
            const newECG = chartData02.series[0].data.map(
                value => value + (Math.random() * 0.2 - 0.1)
            )

            // setChartData01({
            //     ...chartData01,
            //     series: [{ name: 'SpO2 بیمار', data: newSpO2 }]
            // })

            setChartData02({
                ...chartData02,
                series: [{ name: 'ECG بیمار', data: newECG }]
            })

        }, 2000) // هر ۵ ثانیه

        return () => clearInterval(interval)
    }, [chartData01, chartData02])

    return (
        <div className='glass-card mt-5 p-5 rounded-xl'>

            <h2 className='text-[20px] font-bold flex items-center gap-2'><FaHeartbeat className='text-2xl' /> علائم حیاتی زنده</h2>

            <div className='grid grid-cols-3 gap-5 px-5 mt-5'>

                <div className='w-full text-center glass-card flex items-center justify-center flex-col gap-3 h-[100px] rounded-xl'>
                    <div>اشباع اکسیژن</div>
                    <div>{toPersianDigits(selectedPatient.vitalSigns.oxy)}%</div>
                </div>

                <div className='w-full text-center glass-card flex items-center justify-center flex-col gap-3 h-[100px] rounded-xl'>
                    <div>ضربان قلب</div>
                    <div>{toPersianDigits(selectedPatient.vitalSigns.heartbeat)}</div>
                </div>

                <div className='w-full h-[100px] glass-card flex items-center justify-center rounded-xl'>
                    <ECG />
                </div>

                <div className='w-full h-[220px] rounded-xl col-span-3 flex items-center gap-5'>
                    <div className='w-1/2 h-full rounded-xl glass-card'>
                        <AreaChart categories={chartData01.categories} series={chartData01.series} />
                    </div>
                    <div className='w-1/2 h-full rounded-xl glass-card'>
                        <AreaChart categories={chartData02.categories} series={chartData02.series} />
                    </div>
                </div>

            </div>
        </div>
    )
}
