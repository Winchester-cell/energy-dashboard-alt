'use client'
import TabSelector from '@/components/Modules/TabSelector/TabSelector'
import { workOrdersPageTabs } from '@/content/tabs'
import React, { useState } from 'react'


export default function WorkOrderPage() {

    const [selectedTab, setSelectedTab] = useState(workOrdersPageTabs[0])

    return (
        <div className='p-5'>

            <div className='w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl'>
                <h2 className='text-2xl font-bold'>جزئیات سفارش کار</h2>
                <p className='text-[var(--colTextB)] mt-3'>مدیریت و نظارت بر پیشرفت سفارش تولید</p>
            </div>

            <div className='py-7 px-10 rounded-2xl grid grid-cols-4 mt-5 purpleGrad shadow-lg text-white'>

                <div className='w-full flex flex-col justify-center gap-2'>
                    <div className='text-xl font-semibold'>WO-101: تولید تایر پراید</div>
                    <div className='text-[#dfdfdf]'>محصول: TR-165/80R13</div>
                </div>

                <div className='w-full flex flex-col justify-center gap-2'>
                    <div className='text-xl font-semibold'>۵,۰۰۰</div>
                    <div className='text-[#dfdfdf]'>تعداد سفارش</div>
                </div>

                <div className='w-full flex flex-col justify-center gap-2'>
                    <div className='text-xl font-semibold'>۳,۵۰۰</div>
                    <div className='text-[#dfdfdf]'>تولید شده</div>
                </div>


                <div className='w-full flex flex-col justify-center gap-2'>
                    <div className='text-xl font-semibold'>🟢 در حال انجام</div>
                    <div className='text-[#dfdfdf]'>اولویت: بالا</div>
                </div>

            </div>

            <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabs={workOrdersPageTabs} />

            {
                selectedTab.elem
            }

        </div>
    )
}
