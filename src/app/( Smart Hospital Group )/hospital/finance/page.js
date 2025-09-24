'use client'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import { FaChartArea } from "react-icons/fa";

import React, { useState } from 'react'
import FinanceKPiCard from '@/components/Modules/Cards/HospitalCards/FinanceKPiCard';
import DonutChart from '@/components/Modules/Charts/DonutChart';
import InsuranceChart from '@/components/Modules/Charts/Hospital/FicanceBarChart';
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll';
import FinanceTableCard from '@/components/Modules/Cards/HospitalCards/TableCard/FinanceTableCard';

export default function FinancePage() {

    const KPI = {
        month: [
            { id: 1, title: 'درآمد کل', price: 26, desc: 'روند روزانه ماه جاری' },
            { id: 2, title: 'هزینه کل', price: 21, desc: 'مقایسه با ماه گذشته' },
            { id: 3, title: 'سود خالص', price: 5, desc: 'حاشیه سود' },
            { id: 4, title: 'میانگین درآمد هر تخت', price: 51, desc: 'برآورد میانگین' },
        ],
        season: [
            { id: 1, title: 'درآمد کل', price: 69, desc: 'روند روزانه ماه جاری' },
            { id: 2, title: 'هزینه کل', price: 57, desc: 'مقایسه با ماه گذشته' },
            { id: 3, title: 'سود خالص', price: 11, desc: 'حاشیه سود' },
            { id: 4, title: 'میانگین درآمد هر تخت', price: 50, desc: 'برآورد میانگین' },
        ],
        year: [
            { id: 1, title: 'درآمد کل', price: 269, desc: 'روند روزانه ماه جاری' },
            { id: 2, title: 'هزینه کل', price: 225, desc: 'مقایسه با ماه گذشته' },
            { id: 3, title: 'سود خالص', price: 43, desc: 'حاشیه سود' },
            { id: 4, title: 'میانگین درآمد هر تخت', price: 41, desc: 'برآورد میانگین' },
        ]
    }

    const hospitalData = [
        {
            id: 1,
            service: "جراحی قلب",
            patientCount: 180,
            avgRevenuePerPatient: 120_000_000,
            avgCostPerPatient: 92_000_000,
            avgProfitPerPatient: 28_000_000,
            profitMargin: 23.3
        },
        {
            id: 2,
            service: "ارتوپدی",
            patientCount: 240,
            avgRevenuePerPatient: 85_000_000,
            avgCostPerPatient: 60_000_000,
            avgProfitPerPatient: 25_000_000,
            profitMargin: 29.4
        },
        {
            id: 3,
            service: "آزمایشگاه",
            patientCount: 1200,
            avgRevenuePerPatient: 3_800_000,
            avgCostPerPatient: 2_100_000,
            avgProfitPerPatient: 1_700_000,
            profitMargin: 44.7
        },
        {
            id: 4,
            service: "اورولوژی",
            patientCount: 260,
            avgRevenuePerPatient: 62_000_000,
            avgCostPerPatient: 45_000_000,
            avgProfitPerPatient: 17_000_000,
            profitMargin: 27.4
        },
        {
            id: 5,
            service: "زنان و زایمان",
            patientCount: 540,
            avgRevenuePerPatient: 28_000_000,
            avgCostPerPatient: 19_000_000,
            avgProfitPerPatient: 9_000_000,
            profitMargin: 32.1
        },
        {
            id: 6,
            service: "گوارش",
            patientCount: 320,
            avgRevenuePerPatient: 22_000_000,
            avgCostPerPatient: 18_500_000,
            avgProfitPerPatient: 3_500_000,
            profitMargin: 15.9
        },
        {
            id: 7,
            service: "نورولوژی",
            patientCount: 150,
            avgRevenuePerPatient: 75_000_000,
            avgCostPerPatient: 58_000_000,
            avgProfitPerPatient: 17_000_000,
            profitMargin: 22.7
        },
        {
            id: 8,
            service: "پوست و مو",
            patientCount: 420,
            avgRevenuePerPatient: 12_000_000,
            avgCostPerPatient: 7_500_000,
            avgProfitPerPatient: 4_500_000,
            profitMargin: 37.0
        }
    ];

    const donutChartData = { data: [40, 25, 20, 10, 5], labels: ['بخش جراحی', 'بخش داخلی', 'خدمات سرپایی', 'داروخانه', 'آزمایشگاه'] }

    const [currentData, setCurrentData] = useState(KPI.month)
    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div className='p-5'>

            <div className={`${style.cardStyleA} p-5 rounded-2xl flex items-center justify-between shadow-lg`}>
                <h2 className='font-bold text-3xl flex gap-3 items-center'>
                    <FaChartArea />
                    داشبورد مالی بیمارستان
                </h2>
                <div className='flex items-center gap-5'>
                    <button onClick={() => setCurrentData(KPI.month)} className={`${style.cardStyleB} py-2 w-[120px] rounded-full`}>ماه جاری</button>
                    <button onClick={() => setCurrentData(KPI.season)} className={`${style.cardStyleB} py-2 w-[120px] rounded-full`}>فصل</button>
                    <button onClick={() => setCurrentData(KPI.year)} className={`${style.cardStyleB} py-2 w-[120px] rounded-full`}>سال فصل</button>
                </div>
            </div>

            <div className='grid grid-cols-2 mt-5 gap-5'>
                {
                    currentData.map(item => {
                        return <FinanceKPiCard key={item.id} {...item} />
                    })
                }
            </div>

            <div className={`${style.cardStyleA} p-5 rounded-2xl shadow-lg mt-5`}>
                <h2 className='text-2xl'>تحلیل درآمد</h2>
                <div className='w-full grid grid-cols-2 mt-5 gap-5'>
                    <div className={`${style.cardStyleB} shadow-lg p-5 rounded-xl h-[400px]`}>
                        <DonutChart title={'جریان‌های درآمد'} colors={["#008ffb", "#00e396", "#f580bd", "#f6a824", "#d92647"]} legendShow={true} data={donutChartData.data} labels={donutChartData.labels} />
                    </div>
                    <div className={`${style.cardStyleB} shadow-lg p-5 rounded-xl h-[400px]`}>
                        <InsuranceChart title={'ترکیب پرداخت‌کنندگان'} />
                    </div>
                </div>
            </div>

            <div className={`${style.cardStyleA} p-5 rounded-2xl shadow-lg mt-5`}>
                <h2 className='text-2xl'>تحلیل هزینه</h2>
                <div className={`${style.cardStyleB} rounded-2xl shadow-lg p-5 mt-5`}>
                    <h2>شکست هزینه ها</h2>
                    <div className='grid grid-cols-2 rounded-2xl overflow-hidden mt-5'>
                        <div className='gradCardBlue flex justify-center gap-5 items-center p-14'>
                            <span>
                                دارو و تجهیزات مصرفی
                            </span>
                            <span>
                                ۲۵٪
                            </span>
                        </div>
                        <div className='gradCardGreen row-span-3 flex justify-center gap-5 items-center'>
                            <span>
                                انرژی و تاسيسات (EMS)
                            </span>
                            <span>
                                ۱۷٪
                            </span>
                        </div>
                        <div className='gradCardYellow flex justify-center gap-5 items-center p-7'>
                            <span>
                                انرژی و تاسيسات (EMS)
                            </span>
                            <span>
                                ۱۷٪
                            </span>
                        </div>
                        <div className='gradCardPink flex justify-center gap-5 items-center p-4'>
                            <span>
                                انرژی و تاسيسات (EMS)
                            </span>
                            <span>
                                ۱۷٪
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className={`${style.cardStyleA} p-5 rounded-2xl shadow-lg mt-5`}>
                <h2 className='text-2xl'>تحلیل سودآوری خطوط خدماتی</h2>
                <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
                    <div className={`p-5 ${style.gradCardBlue} shadow-lg rounded-2xl gap-5 grid grid-cols-6`}>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>خط خدماتی</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>تعداد بیماران</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>میانگین درآمد/بیمار</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>میانگین هزینه/بیمار</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>میانگین سود/بیمار</div>
                        <div>حاشیه سود</div>
                    </div>
                    {
                        hospitalData.map((item, index) => {
                            return (
                                <AnimateOnScroll key={item.id} delay={index * 70}>
                                    <FinanceTableCard index={index} {...item} />
                                </AnimateOnScroll>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
