'use client'
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'
import MainDashboardTableItems from '@/components/Modules/Cards/Manufacturing/MainDashboardTableItems';
import SearchInput from '@/components/Modules/Inputs/SearchInput';
import React from 'react'
import { FaPlus } from "react-icons/fa";


const workOrders = [
  {
    orderCode: "WO-101",
    product: "تایر پراید",
    quantity: 5000,
    status: "در حال انجام",
    progress: 70,
    startDate: "۱۴۰۲/۰۸/۱۵",
    endDate: "۱۴۰۲/۰۹/۰۵",
  },
  {
    orderCode: "WO-102",
    product: "تایر کامیون",
    quantity: 1000,
    status: "برنامه‌ریزی شده",
    progress: 0,
    startDate: "۱۴۰۲/۰۹/۰۱",
    endDate: "۱۴۰۲/۰۹/۲۰",
  },
  {
    orderCode: "WO-099",
    product: "تایر موتورسیکلت",
    quantity: 2500,
    status: "تکمیل شده",
    progress: 100,
    startDate: "۱۴۰۲/۰۸/۰۱",
    endDate: "۱۴۰۲/۰۸/۱۲",
  },
  {
    orderCode: "WO-100",
    product: "تایر تراکتور",
    quantity: 800,
    status: "تاخیر",
    progress: 45,
    startDate: "۱۴۰۲/۰۷/۲۰",
    endDate: "۱۴۰۲/۰۸/۱۰",
  },
  {
    orderCode: "WO-103",
    product: "تایر اتوبوس",
    quantity: 1500,
    status: "در حال انجام",
    progress: 60,
    startDate: "۱۴۰۲/۰۹/۰۵",
    endDate: "۱۴۰۲/۰۹/۲۵",
  },
  {
    orderCode: "WO-104",
    product: "تایر دوچرخه",
    quantity: 3000,
    status: "تکمیل شده",
    progress: 100,
    startDate: "۱۴۰۲/۰۷/۱۰",
    endDate: "۱۴۰۲/۰۷/۲۵",
  },
  {
    orderCode: "WO-105",
    product: "تایر لودر",
    quantity: 600,
    status: "برنامه‌ریزی شده",
    progress: 0,
    startDate: "۱۴۰۲/۰۹/۱۵",
    endDate: "۱۴۰۲/۱۰/۰۵",
  },
  {
    orderCode: "WO-106",
    product: "تایر وانت",
    quantity: 2200,
    status: "در حال انجام",
    progress: 35,
    startDate: "۱۴۰۲/۰۸/۲۰",
    endDate: "۱۴۰۲/۰۹/۱۰",
  },
  {
    orderCode: "WO-107",
    product: "تایر مسابقه‌ای",
    quantity: 400,
    status: "تاخیر",
    progress: 50,
    startDate: "۱۴۰۲/۰۸/۰۵",
    endDate: "۱۴۰۲/۰۸/۳۰",
  },
];


export default function ManufacturingPage() {
  return (

    <div className='p-5'>
      <div className='w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl'>
        <h2 className='text-2xl font-bold'>داشبورد تولید</h2>
        <p className='text-[var(--colTextB)] mt-3'>برنامه‌ریزی تولید</p>
      </div>

      <div className='w-full bg-[var(--colCard)] gap-5 flex items-center shadow-lg rounded-2xl p-5 mt-5'>
        <button className='gap-2 py-2 px-10 rounded-full flex items-center bg-sky-600'>
          <FaPlus />
          ایجاد سفارش کار جدید
        </button>
        <SearchInput />
      </div>

      <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
        <div className={`p-5 gradCardBlue shadow-lg rounded-2xl gap-5 grid grid-cols-8 text-white`}>
          <div className={`border-l-2 border-[white] `}>کد سفارش</div>
          <div className={`border-l-2 border-[white] `}>محصول</div>
          <div className={`border-l-2 border-[white] `}>تعداد</div>
          <div className={`border-l-2 border-[white] `}>وضعیت</div>
          <div className={`border-l-2 border-[white] `}>پیشرفت</div>
          <div className={`border-l-2 border-[white] `}>تاریخ شروع</div>
          <div className={`border-l-2 border-[white] `}>تاریخ پایان</div>
          <div>اقدامات</div>
        </div>
        {
          workOrders.map((item, index) => {
            return (
              <AnimateOnScroll key={item.id} delay={index * 70}>
                <MainDashboardTableItems index={index} {...item} />
              </AnimateOnScroll>
            )
          })
        }
      </div>

    </div>

  )
}
