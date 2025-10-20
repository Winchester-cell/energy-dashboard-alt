import React from 'react'
import { LuNotepadText } from "react-icons/lu";


export default function LogDetailsTab() {
  const LogsHistory = [
  {
    id: 1,
    name: "سیستم خودکار",
    role: "هشدار",
    time: "امروز، ساعت 15:30",
    text: "هشدار سیستم: سنسور لرزش دستگاه CNC-001 مقدار ۲.۳ میلی‌متر را گزارش کرده است. این مقدار بالاتر از آستانه تعریف شده (۱.۵ میلی‌متر) می‌باشد. دستور کار نگهداری به صورت خودکار ایجاد شده است.",
  },
  {
    id: 2,
    name: "رضا احمدی",
    role: "تکنسین ارشد",
    time: "امروز، ساعت 14:45",
    text: "بازرسی اولیه: بازبینی کامل دستگاه انجام شد. لرزش در محدوده ۲.۵ میلی‌متر اندازه‌گیری شده که بیش از حد مجاز (۱ میلی‌متر) است. صدای غیرطبیعی از ناحیه اسپیندل شنیده می‌شود. بلبرینگ‌های شماره ۶۲۰۶ و ۶۲۰۸ نیاز به تعویض دارند. همچنین روغن‌کاری سیستم محرک ضروری است." 
  },
  {
    id: 3,
    name: "تیم فنی",
    role: "مرکز کنترل",
    time: "امروز، ساعت 13:20",
    text: "ایجاد دستور کار: دستور کار نگهداری MWO-55 برای بررسی لرزش دستگاه برش CNC-001 ایجاد شد. اولویت بالا تعیین شده به دلیل تأثیر مستقیم بر کیفیت تولید. تکنسین رضا احمدی مسئول اجرای کار منصوب شده است."
  },
  ];
  return (
    <div className=' p-5 bg-[var(--colCard)] rounded-md'> 
      <div className='flex flex-col gap-6 bg-[var(--bgTab)] rounded-xl p-5'>
        <div className='flex gap-3 items-center'>
          <LuNotepadText />
          <p className='text-lg'>شرح کار</p>
        </div>
        <div>
          <p className=''>لرزش دستگاه برش CNC-001 از حد مجاز فراتر رفته است و باعث کاهش کیفیت برش و افزایش صدا شده. بر اساس بازرسی اولیه، مشکل احتمالاً مربوط به فرسودگی بلبرینگ‌های اصلی اسپیندل است. نیاز به بازبینی کامل سیستم محرک و تعویض قطعات فرسوده می‌باشد.</p>
        </div>

        <div className='flex flex-row justify-around'>
          <div className='flex flex-col items-center'>
            <span className='font-bold text-2xl'>85 dB</span>
            <p>سطح صدای فعلی</p>
          </div>
          <div className='flex flex-col items-center'>
            <span className='font-bold text-2xl'>2.5 mm</span>
            <p>میزان لرزش</p>
          </div>
          <div className='flex flex-col items-center'>
            <span className='font-bold text-2xl'>72%</span>
            <p>کاهش بهره‌وری</p>
          </div>
        </div>
      </div>

      <div className='bg-[var(--bgTab)] mt-3 rounded-lg p-3 border-dashed border-white'>
        <p className='font-semibold text-lg mb-4'>ثبت لاگ جدید</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='flex flex-col gap-2'>
            <label>نوع فعالیت</label>
            <select className='bg-gray-800 py-3 px-4 rounded-lg border text-slate-300 border-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.1)]'>
              <option value="">بازرسی</option>
              <option value="">تعمیر</option>
              <option value="">تست</option>
              <option value="">تنظیمات</option>
              <option value="">تعویض قطعه</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label>زمان صرف شده (دقیقه)</label>
            <input type='number' placeholder="مثال: 120" className='bg-gray-800 py-3 px-4 text-slate-300 rounded-lg border border-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.1)]'/>
          </div>
          
        </div>
        <div className='flex flex-col gap-2 w-[100%] mt-4'>
            <label>شرح فعالیت انجام شده</label>
            <textarea placeholder=" توضیح کاملی از کار انجام شده، مشکلات مشاهده شده، و اقدامات صورت گرفته ..." rows="4" className='rounded-md bg-gray-800 text-slate-300 p-3'></textarea>
          </div>
        <div className='flex justify-end mt-4'>
            <button className='bg-cyan-900 text-white py-2 px-6 rounded-lg'>ثبت لاگ</button>
          </div>
      </div>

      <div>
        <p className='mt-5 mb-5 font-semibold'> تاریخچه لاگ‌های تعمیر</p>

        {LogsHistory.map((log) => {
          return(
            <div className='flex flex-col gap-3 bg-[var(--bgTab)] rounded-xl p-3 justify-between mb-3' key={log.id}>
              <div className='flex gap-2 font-medium'>
                <p>{log.name}</p>-
                <p>{log.role}</p>
              </div>
              <span className='font-thin text-xs'>{log.time}</span>
              <p>{log.text}</p>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}
