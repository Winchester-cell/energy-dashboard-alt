import React from 'react'
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { PiGaugeFill } from "react-icons/pi";
import { GiVibratingBall } from "react-icons/gi";
import { FaBolt } from "react-icons/fa6";
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll';

const mockData = [
    { title: 'میز چوبی', date: '1403/09/10', count: '25' },
    { title: 'صندلی اداری', date: '1403/09/09', count: '18' },
    { title: 'کمد لباس', date: '1403/09/08', count: '12' },
]

export default function DeviceMonitoringPage() {
    return (
        <div className='p-5'>
            <div className='w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl mb-5'>
                <h2 className='text-2xl font-bold'>مانیتورینگ دستگاه</h2>
                <p className='text-[var(--colTextB)] mt-3'>مشاهده وضعیت کامل و 360 درجه دستگاه به صورت زنده</p>
            </div>
            <div className='w-full bg-[var(--colCard)] flex justify-between items-center shadow-lg p-5 rounded-2xl mb-5'>
                <div className='flex items-center gap-2'>
                    <span className='text-6xl mt-1'>🏭</span>
                    <div>
                        <div className='font-semibold text-xl'>دستگاه برش CNC-01</div>
                        <div className='text-[var(--colTextB)] mt-1'>کد دستگاه: CNC-01</div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>وضعیت فعلی : </span>
                    <span className='flex items-center gap-2 text-emerald-700 font-semibold rounded-full py-2 px-7 bg-emerald-400'>
                        <GrStatusGoodSmall />
                        در حال کار
                    </span>
                </div>
            </div>
            <div className='mt-5 flex gap-5'>
                <div className='p-5 grid grid-cols-2 gap-5 rounded-2xl w-[calc(100%-350px)] bg-[var(--colCard)] shadow-lg'>
                    <div className='w-full p-5 rounded-2xl bg-[var(--colBg)] shadow-inner flex flex-col items-center justify-center'>
                        <div className='flex items-center'>
                            <FaThermometerThreeQuarters className='w-20 h-20 text-blue-400' />
                            <div className='flex flex-col'>
                                <span className='text-2xl font-semibold'>دما (°C)</span>
                                <span className='text-blue-400 text-lg mt-1'>87°C</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-5 rounded-2xl bg-[var(--colBg)] shadow-inner flex flex-col items-center justify-center'>
                        <div className='flex items-center gap-5'>
                            <PiGaugeFill className='w-20 h-20 text-emerald-500' />
                            <div className='flex flex-col'>
                                <span className='text-2xl font-semibold'>فشار (Bar)</span>
                                <span className='text-emerald-500 text-lg mt-1'>7.19 (Bar)</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-5 rounded-2xl bg-[var(--colBg)] shadow-inner flex flex-col items-center justify-center'>
                        <div className='flex items-center gap-5'>
                            <GiVibratingBall className='w-20 h-20 text-purple-400' />
                            <div className='flex flex-col'>
                                <span className='text-2xl font-semibold'>لرزش (mm/s)</span>
                                <span className='text-purple-400 text-lg mt-1'>3.89 (mm/s)</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-5 rounded-2xl bg-[var(--colBg)] shadow-inner flex flex-col items-center justify-center'>
                        <div className='flex items-center'>
                            <FaBolt className='w-20 h-20 text-yellow-400' />
                            <div className='flex flex-col'>
                                <span className='text-2xl font-semibold'>سرعت (RPM)</span>
                                <span className='text-yellow-400 text-lg mt-1'>1074 (RPM)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-5 py-10 rounded-2xl w-[350px] bg-[var(--colCard)] shadow-lg'>
                    <h2 className='text-xl font-semibold'>📈 شاخص OEE</h2>
                    <div className='w-full flex justify-center items-center gap-2 flex-col my-10'>
                        <div className='text-3xl font-bold text-blue-600'>87%</div>
                        <div className='text-[var(--colTextB)]'>امتیاز کلی OEE</div>
                    </div>

                    <div className='mt-7'>
                        <div className='flex items-center justify-between mb-2 px-2'>
                            <span>
                                در دسترس بودن
                            </span>
                            <span>
                                92%
                            </span>
                        </div>
                        <div className='w-full rounded-full overflow-hidden bg-gray-400 h-[10px]'>
                            <div className='w-[92%] h-full bg-emerald-600' />
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='flex items-center justify-between mb-2 px-2'>
                            <span>
                                عملکرد
                            </span>
                            <span>
                                89%
                            </span>
                        </div>
                        <div className='w-full rounded-full overflow-hidden bg-gray-400 h-[10px]'>
                            <div className='w-[92%] h-full bg-blue-600' />
                        </div>
                    </div>

                    <div className='mt-7'>
                        <div className='flex items-center justify-between mb-2 px-2'>
                            <span>
                                کیفیت
                            </span>
                            <span>
                                95%
                            </span>
                        </div>
                        <div className='w-full rounded-full overflow-hidden bg-gray-400 h-[10px]'>
                            <div className='w-[92%] h-full bg-purple-600' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-5 grid grid-cols-3 gap-5'>

                <div className='p-5 bg-[var(--colCard)] shadow-lg rounded-2xl'>
                    <h2 className='text-xl font-semibold'>🔧 تاریخچه تعمیرات</h2>
                    <div className='p-5 bg-[var(--colBg)] rounded-2xl mt-5'>
                        <div className='flex items-center justify-between mb-2 font-semibold'>
                            <h2>تعمیر روتین</h2>
                            <div className='rounded-full py-1 px-5 bg-blue-400  text-blue-700 w-fit'>تکمیل</div>
                        </div>
                        <div className='text-[var(--colTextB)]'>
                            1403/09/05 - تعویض روغن و فیلتر
                        </div>
                    </div>
                    <div className='p-5 bg-[var(--colBg)] rounded-2xl mt-5'>
                        <div className='flex items-center justify-between mb-2 font-semibold'>
                            <h2>کالیبراسیون</h2>
                            <div className='rounded-full py-1 px-5 bg-blue-400  text-blue-700 w-fit'>تکمیل</div>
                        </div>
                        <div className='text-[var(--colTextB)]'>
                            1403/08/28 - تنظیم دقت برش
                        </div>
                    </div>
                    <div className='p-5 bg-[var(--colBg)] rounded-2xl mt-5'>
                        <div className='flex items-center justify-between mb-2 font-semibold'>
                            <h2>تعمیر اضطراری</h2>
                            <div className='rounded-full py-1 px-5 bg-yellow-400  text-yellow-700 w-fit'>در انتظار</div>
                        </div>
                        <div className='text-[var(--colTextB)]'>
                            1403/09/12 - بررسی سیستم خنک‌کننده
                        </div>
                    </div>
                </div>

                <div className='p-5 bg-[var(--colCard)] shadow-lg rounded-2xl'>
                    <h2 className='text-xl font-semibold'>📦 تاریخچه تولید</h2>
                    <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
                        <div className={`p-5 purpleGrad text-white shadow-lg rounded-2xl gap-5 grid grid-cols-3`}>
                            <div className={`border-l-2 border-[var(--colTextA)] `}>تاریخ</div>
                            <div className={`border-l-2 border-[var(--colTextA)] `}>محصول</div>
                            <div>تعداد</div>
                        </div>
                        {
                            mockData.map((item, index) => {
                                return (
                                    <AnimateOnScroll key={index} delay={index * 80}>
                                        <div className={`p-5 shadow-sm shadow-purple-300 bg-[var(--colBg)] rounded-2xl gap-5 grid grid-cols-3`}>
                                            <div className={`border-l-2 border-[var(--colTextA)] `}>{item.date}</div>
                                            <div className={`border-l-2 border-[var(--colTextA)] `}>{item.title}</div>
                                            <div>{item.count}</div>
                                        </div>
                                    </AnimateOnScroll>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='p-5 bg-[var(--colCard)] shadow-lg rounded-2xl'>
                    <h2 className='text-xl font-semibold'>🤖 پیش‌بینی خرابی</h2>
                    <div className='w-full flex flex-col justify-center items-center my-10 gap-2'>
                        <div className='font-semibold'>
                            احتمال خرابی در 7 روز آینده:
                        </div>
                        <div className='text-emerald-500 font-semibold text-2xl'>
                            15%
                        </div>
                        <div className='text-emerald-500'>
                            (سطح ریسک: پایین)
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 px-5'>
                        <div className='items-center justify-between flex'>
                            <span>سیستم خنک‌کننده:</span>
                            <span className='text-emerald-600'>سالم</span>
                        </div>
                        <div className='items-center justify-between flex'>
                            <span>سیستم برق:</span>
                            <span className='text-emerald-600'>سالم</span>
                        </div>
                        <div className='items-center justify-between flex'>
                            <span>قطعات مکانیکی:</span>
                            <span className='text-yellow-500'>نیاز به بررسی</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
