import ECG from '@/components/Modules/Cards/HospitalCards/ECG'
import AreaChart from '@/components/Modules/Charts/AreaChart'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useRef } from 'react'
import { FaHeartbeat } from 'react-icons/fa'

export default function VitalSignsSection({ selectedPatient }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const initialCategories = ['08:00', '08:10', '08:20', '08:30', '08:40', '08:50']

    // --- فرمول ECG ---
    function ecgFormula(t) {
        const x = (t % 0.8) // فاصله کمتر بین موج‌ها

        // موج P
        const P = 0.15 * Math.sin(2 * Math.PI * x * 6) * Math.exp(-Math.pow((x - 0.1) * 25, 2))

        // QRS
        const QRS = Math.exp(-Math.pow((x - 0.25) * 120, 2)) * 1.5
            - Math.exp(-Math.pow((x - 0.27) * 250, 2)) * 0.8

        // موج T
        const T = 0.3 * Math.sin(2 * Math.PI * x * 2) * Math.exp(-Math.pow((x - 0.55) * 12, 2))

        return P + QRS + T
    }

    // --- دیتا اولیه ECG (شبیه موج واقعی) ---
    const initialECGData = Array.from({ length: 60 }, (_, i) => {
        const t = i * 0.02
        return ecgFormula(t)
    })

    const [chartData01, setChartData01] = useState({
        categories: initialCategories,
        series: [
            { name: 'SpO2 بیمار', data: [98, 97, 96, 97, 98, 99] },
        ]
    })

    const [chartData02, setChartData02] = useState({
        categories: Array(60).fill(""),
        series: [
            { name: 'ECG بیمار', data: initialECGData }
        ]
    })

    // --- آپدیت زنده ECG ---
    const tRef = useRef(initialECGData.length * 0.02)

    useEffect(() => {
        const interval = setInterval(() => {
            setChartData02((prev) => {
                const point = ecgFormula(tRef.current) + (Math.random() * 0.02 - 0.01) // نویز
                tRef.current += 0.02

                const newCategories = [...prev.categories, ""]
                const newSeriesData = [...prev.series[0].data, point]

                return {
                    categories: newCategories.slice(-100),
                    series: [{ name: 'ECG بیمار', data: newSeriesData.slice(-100) }]
                }
            })
        }, 200) // هر 100ms یک نقطه

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={`${style.cardStyleB} mt-5 p-5 rounded-xl shadow-lg`}>

            <h2 className='text-[20px] font-bold flex items-center gap-2'>
                <FaHeartbeat className='text-2xl' /> علائم حیاتی زنده
            </h2>

            <div className='grid grid-cols-3 gap-5 px-5 mt-5'>

                <div className={`w-full text-center ${style.cardStyleA} shadow-lg flex items-center justify-center flex-col gap-3 h-[100px] rounded-xl`}>
                    <div>اشباع اکسیژن</div>
                    <div>{toPersianDigits(selectedPatient.vitalSigns.oxy)}%</div>
                </div>

                <div className={`w-full text-center ${style.cardStyleA} shadow-lg flex items-center justify-center flex-col gap-3 h-[100px] rounded-xl`}>
                    <div>ضربان قلب</div>
                    <div>{toPersianDigits(selectedPatient.vitalSigns.heartbeat)}</div>
                </div>

                <div className={`w-full h-[100px] ${style.cardStyleA} flex items-center justify-center rounded-xl`}>
                    <ECG />
                </div>

                <div className='w-full h-[220px] rounded-xl col-span-3 flex items-center gap-5'>
                    <div className={`w-1/2 h-full rounded-xl shadow-lg ${style.cardStyleA}`}>
                        <AreaChart categories={chartData01.categories} series={chartData01.series} />
                    </div>
                    <div className={`w-1/2 h-full rounded-xl shadow-lg ${style.cardStyleA}`}>
                        <AreaChart
                            yMin={-1}
                            yMax={1}
                            colors={["#00e396"]}
                            categories={chartData02.categories}
                            series={chartData02.series}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
