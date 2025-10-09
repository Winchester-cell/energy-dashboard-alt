'use client'
import AreaChart from '@/components/Modules/Charts/AreaChart';
import InsuranceChart from '@/components/Modules/Charts/Hospital/FicanceBarChart';
import React from 'react'
import { IoIosWarning } from "react-icons/io";

export default function MaintenancePage() {

    const categories = [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند"
    ]

    const monthNumbers = [12, 25, 8, 30, 14, 27, 19, 33, 21, 5, 29, 17];

    return (
        
        <div className='p-5'>

            <div className='w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl'>
                <h2 className='text-2xl font-bold'>داشبورد نگهداری و تعمیرات</h2>
                <p className='text-[var(--colTextB)] mt-3'>مدیریت و نظارت بر فعالیت‌های نگهداری تجهیزات</p>
            </div>

            <div className='p-5 gradCardRedLight rounded-2xl shadow-lg mt-5 text-[#7c2d12] flex items-center gap-2'>
                <IoIosWarning className='text-xl' />
                <div className='font-bold'>هشدار: </div>
                <p>۳ دستگاه نیاز به تعمیر فوری دارند - خط تولید شماره ۲ در معرض توقف</p>
            </div>

            <div className='mt-5 grid grid-flow-col gap-5 auto-cols-fr'>
                <div className='px-5 py-16 gradpinkCustom rounded-2xl shadow-lg flex flex-col items-center gap-2'>
                    <div className='font-bold text-2xl'>12 مورد</div>
                    <div>دستورکارهای باز</div>
                    <div>۳ مورد اولویت بالا</div>
                </div>
                <div className='px-5 py-16 gradbluekCustom rounded-2xl shadow-lg flex flex-col items-center gap-2'>
                    <div className='font-bold text-2xl'>4.5 ساعت</div>
                    <div>میانگین زمان تعمیر (MTTR)</div>
                    <div>بهبود ۱۵% نسبت به ماه گذشته</div>
                </div>
            </div>

            <div className={`shadow-lg p-5 rounded-xl h-[500px] bg-[var(--colCard)] my-5`}>
                <InsuranceChart title={`دلایل اصلی خرابی (تحلیل پارتو)`} />
            </div>

            <div className='w-full h-[500px] p-5 bg-[var(--colCard)] shadow-lg rounded-2xl'>
                <AreaChart title={'روند تعداد خرابی‌ها (ماهانه)'} categories={categories} series={[{ name: '', data: monthNumbers }]} />
            </div>

            <div className='p-5 bg-[var(--colCard)] shadow-lg rounded-2xl mt-5'>

                <h2>آخرین دستور کار ها :</h2>

                <div className='mt-5 flex flex-col gap-5'>
                    <div className='p-5 bg-[var(--colBg)] flex flex-col gap-2 shadow-inner rounded-2xl border-e-4 border-[#dc2626]'>
                        <div className='font-bold'>WO-2024-001</div>
                        <div className='text-[var(--colTextB)]'>خط تولید ۲ - دستگاه اکستروژن</div>
                        <div className='text-[var(--colTextB)]'>نشتی روغن هیدرولیک - اولویت بالا</div>
                    </div>
                    <div className='p-5 bg-[var(--colBg)] flex flex-col gap-2 shadow-inner rounded-2xl border-e-4 border-[#f59e0b]'>
                        <div className='font-bold'>WO-2024-001</div>
                        <div className='text-[var(--colTextB)]'>خط تولید ۲ - دستگاه اکستروژن</div>
                        <div className='text-[var(--colTextB)]'>نشتی روغن هیدرولیک - اولویت بالا</div>
                    </div>
                    <div className='p-5 bg-[var(--colBg)] flex flex-col gap-2 shadow-inner rounded-2xl border-e-4 border-[#10b981]'>
                        <div className='font-bold'>WO-2024-001</div>
                        <div className='text-[var(--colTextB)]'>خط تولید ۲ - دستگاه اکستروژن</div>
                        <div className='text-[var(--colTextB)]'>نشتی روغن هیدرولیک - اولویت بالا</div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#2563eb] rounded-2xl py-3 px-10 transition-all duration-500 hover:scale-[1.02]'>مشاهده همه دستور کار ها</button>
                    </div>
                </div>

            </div>

            <div className='p-5 bg-[var(--colCard)] shadow-lg rounded-2xl mt-5'>

                <h2>وضعیت تجهیزات :</h2>

                <div className='mt-5 flex flex-col gap-5'>
                    <div className='p-5 bg-[var(--colBg)] flex flex-col gap-2 shadow-inner rounded-2xl border-e-4 border-[#dc2626]'>
                        <div className='font-bold'>WO-2024-001</div>
                        <div className='text-[var(--colTextB)]'>خط تولید ۲ - دستگاه اکستروژن</div>
                        <div className='text-[var(--colTextB)]'>نشتی روغن هیدرولیک - اولویت بالا</div>
                    </div>
                    <div className='p-5 bg-[var(--colBg)] flex flex-col gap-2 shadow-inner rounded-2xl border-e-4 border-[#f59e0b]'>
                        <div className='font-bold'>WO-2024-001</div>
                        <div className='text-[var(--colTextB)]'>خط تولید ۲ - دستگاه اکستروژن</div>
                        <div className='text-[var(--colTextB)]'>نشتی روغن هیدرولیک - اولویت بالا</div>
                    </div>
                    <div className='p-5 bg-[var(--colBg)] flex flex-col gap-2 shadow-inner rounded-2xl border-e-4 border-[#10b981]'>
                        <div className='font-bold'>WO-2024-001</div>
                        <div className='text-[var(--colTextB)]'>خط تولید ۲ - دستگاه اکستروژن</div>
                        <div className='text-[var(--colTextB)]'>نشتی روغن هیدرولیک - اولویت بالا</div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#4b5563] rounded-2xl py-3 px-10 transition-all duration-500 hover:scale-[1.02]'>مشاهده همه دستور کار ها</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
