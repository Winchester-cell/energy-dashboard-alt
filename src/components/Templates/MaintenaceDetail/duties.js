import { duration } from 'moment-jalaali';
import React from 'react'
import { GiAutoRepair } from "react-icons/gi";

export default function DutiesTab() {
  const maintenanceTasks = [
  {
    step: "مرحله ۱: قطع برق و ایمن‌سازی",
    description: "قطع برق اصلی دستگاه و اعمال قفل ایمنی (LOTO)",
    responsible: "رضا احمدی",
    status: "تکمیل شده",
    duration: "۱۵ دقیقه",
  },
  {
    step: "مرحله ۲: بازرسی اولیه و تشخیص",
    description: "اندازه‌گیری لرزش، بررسی صدا و شناسایی منبع مشکل",
    responsible: "رضا احمدی",
    status: "تکمیل شده",
    duration: "۶۰ دقیقه",
  },
  {
    step: "مرحله ۳: تهیه قطعات یدکی",
    description: "درخواست و تهیه بلبرینگ‌های ۶۳۶ و ۶۳۰۴ از انبار",
    responsible: "انبار قطعات",
    status: "در حال انجام",
    duration: "در انتظار تأیید درخواست",
  },
  {
    step: "مرحله ۴: باز کردن اسپین‌دل",
    description: "جداسازی اسپین‌دل و بلبرینگ‌های داخلی",
    responsible: "رضا احمدی + علی محمدی",
    status: "در انتظار",
    duration: "۹۰ دقیقه",
  },
  {
    step: "مرحله ۵: تعویض بلبرینگ‌ها",
    description: "خارج کردن بلبرینگ‌های فرسوده و نصب بلبرینگ جدید",
    responsible: "رضا احمدی",
    status: "در انتظار",
    duration: "۱۲۰ دقیقه",
  },
  {
    step: "مرحله ۶: مونتاژ و تنظیمات",
    description: "مونتاژ مجدد اسپین‌دل و انجام تنظیمات اولیه",
    responsible: "رضا احمدی + علی محمدی",
    status: "در انتظار",
    duration: "۶۰ دقیقه",
  },
  {
    step: "مرحله ۷: تست و راه‌اندازی",
    description: "تست عملکرد اسپین‌دل و تأیید نهایی",
    responsible: "رضا احمدی + کنترل کیفیت",
    status: "در انتظار",
    duration: "۴۵ دقیقه",
  },
];

  return (
    <div className='p-5 flex flex-col gap-3 bg-[var(--colCard)] rounded-md'>
      <div className='flex items-center gap-3 font-semibold text-lg mb-4'>
        <GiAutoRepair />
        <p>وظایف نگهداری و تعمیر ( BPM )</p>
      </div>

      {/* DUTIES */}
      {maintenanceTasks.map((task) => {
        return(
          <div key={task.id} className='flex gap-6 bg-[var(--bgTab)] rounded-xl p-5 justify-between hover:cursor-pointer transition delay-150 duration-200 ease-in-out hover:-translate-y-1'>
            <div className='flex flex-col justify-center gap-1'>
              <h6 className='font-semibold'>{task.step}</h6>
              <p>{task.description}</p>
              <span>{task.responsible}</span>
            </div>
            <div className='grid grid-cols-1 justify-between items-center text-center'>
                <span className={`py-1 px-2 rounded-md font-semibold ${
                        task.status === "تکمیل شده"
                          ? "bg-[#92ffab66] text-lime-900"
                          : task.status === "در حال انجام"
                          ? "bg-yellow-200 text-yellow-900"
                          : "bg-red-200 text-red-900"
                      }`}>{task.status}</span>
              
              <p>مدت زمان: {task.duration}</p>

            </div>
          </div>
        )
      })}
      {/* SUMMARY OF PROGRESS */}
      <div className='flex flex-col gap-3 bg-[var(--bgTab)] rounded-xl p-5 justify-between mt-5'>
        <p className='text-[15px]'>خلاصه پیشرفت وظایف</p>
        <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center text-center'>
          <div>
            <span className='text-lime-950 font-bold text-[20px]'>{maintenanceTasks.filter((task) => task.status === "تکمیل شده").length}</span>
            <p>تکمیل شده</p>
          </div>
          <div>
            <span className='text-orange-800 font-bold text-[20px]'>{maintenanceTasks.filter((task) => task.status === "در حال انجام").length}</span>
            <p>در حال انجام</p>
          </div>
          <div>
            <span className='text-rose-950 font-bold text-[20px]'>{maintenanceTasks.filter((task) => task.status === "در انتظار").length}</span>
            <p>در انتظار</p>
          </div>
        </div>
      </div>
    </div>
  )
}
