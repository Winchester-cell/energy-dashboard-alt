import DonutChart from '@/components/Modules/Charts/DonutChart'
import React from 'react'
import { GrStatusGoodSmall } from "react-icons/gr";
import '@/styles/animCard.css'

const labels = ['اجتماعی ها', 'گردش گران', 'خریداران هدفمند']
const data = [25, 40, 35]

const cardDataA = [
    { title: 'خریداران هدفمند', value: 35, desc: 'مستقیم به مقصد می‌روند', color: '#A855F7' },
    { title: 'گردشگران', value: 40, desc: 'در فضا قدم می‌زنند', color: '#3B82F6' },
    { title: 'اجتماعی‌ها', value: 25, desc: 'در گروه حرکت می‌کنند', color: '#22C55E' },
]

const delays = [0.3, 0.9, 0.5]

export default function BehaviorAnalysis() {
    return (
        <div className='p-5 bg-[var(--colCard)] rounded-2xl'>
            <div className='flex gap-5'>
                <div style={{ boxShadow: `2px 2px 4px #136EFF` }} className='w-1/2 bg-[var(--colBg)] rounded-2xl p-5'>
                    <DonutChart legendShow={true} colors={["#10b981", "#136EFF", "#6F31FF"]} labels={labels} data={data} />
                </div>
                <div className='w-1/2 flex flex-col gap-3'>
                    {
                        cardDataA.map((item, index) => (
                            <div key={index} style={{ animationDelay: `${delays[index]}s`, boxShadow: `2px 2px 4px ${item.color}` }} className='floatCard bg-[var(--colBg)] h-full rounded-2xl p-5 flex flex-col gap-3' >
                                <div className='flex gap-2 items-center text-[16px] font-bold'>
                                    <GrStatusGoodSmall style={{ color: item.color }} />
                                    {item.title}
                                </div>
                                <div style={{ color: item.color }} className='text-3xl'>{item.value}%</div>
                                <div className='text-[var(--colTextB)]'>{item.desc}</div>
                                <div className='w-full h-[10px] bg-gray-400 rounded-full overflow-hidden'>
                                    <div style={{ width: `${item.value}%`, backgroundColor: item.color }} className='rounded-full h-full' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='gap-5 grid grid-cols-3 mt-5'>

                <div style={{ boxShadow: `2px 2px 4px #136EFF` }} className='bg-[var(--colBg)] p-5 rounded-2xl flex flex-col gap-3'>
                    <h2 className='text-[16px] font-semibold'>🕒 الگوهای زمانی</h2>
                    <div className='flex justify-between'>
                        <span>صبح (8-12):</span>
                        <span className='text-emerald-500 w-[100px]'>خرید سریع</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>ظهر (12-16):</span>
                        <span className='text-orange-400 w-[100px]'>گردش</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>عصر (16-20):</span>
                        <span className='text-violet-600 w-[100px]'>خرید خانوادگی</span>
                    </div>
                </div>


                <div style={{ boxShadow: `2px 2px 4px #136EFF` }} className='bg-[var(--colBg)] p-5 rounded-2xl flex flex-col gap-3'>
                    <h2 className='text-[16px] font-semibold'>👥 تحلیل گروهی</h2>
                    <div className='flex justify-between'>
                        <span>تک نفره:</span>
                        <span className='text-sky-500 w-[100px]'>45%</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>زوج:</span>
                        <span className='text-pink-400 w-[100px]'>30%</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>خانواده:</span>
                        <span className='text-emerald-500 w-[100px]'>25%</span>
                    </div>
                </div>


                <div style={{ boxShadow: `2px 2px 4px #136EFF` }} className='bg-[var(--colBg)] p-5 rounded-2xl flex flex-col gap-3'>
                    <h2 className='text-[16px] font-semibold'>🎯 نقاط داغ</h2>
                    <div className='flex justify-between'>
                        <span>ورودی:</span>
                        <span className='text-red-500 w-[100px]'>بالا</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>فروشگاه A:</span>
                        <span className='text-orange-400 w-[100px]'>متوسط</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>کافه:</span>
                        <span className='text-sky-500 w-[100px]'>کم</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
