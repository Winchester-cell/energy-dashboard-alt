import React from 'react'
import { LiaComments } from "react-icons/lia";

export default function Comments() {
  const comments = [
  {
    id: 1,
    name: "مهندس حسن رضایی",
    role: "سرپرست نگهداری",
    time: "امروز، ساعت 15:30",
    text: "بر اساس گزارش رضا احمدی، مشکل دقیقاً همان چیزی است که پیش‌بینی می‌کردیم. بلبرینگ‌های اسپیندل پس از ۳ سال کار مداوم نیاز به تعویض دارند. پیشنهاد می‌کنم پس از تعمیر، برنامه نگهداری پیشگیرانه برای این دستگاه تنظیم شود تا از تکرار این مشکل جلوگیری کنیم."
  },
  {
    id: 2,
    name: "رضا احمدی",
    role: "تکنسین ارشد",
    time: "امروز، ساعت 14:45",
    text: "بازرسی کامل انجام شد. علاوه بر بلبرینگ‌ها، متوجه شدم که سیستم روغن‌کاری نیز نیاز به بازبینی دارد. فیلتر روغن کاملاً مسدود شده و این موضوع احتمالاً عامل اصلی فرسایش زودرس بلبرینگ‌ها بوده است. پیشنهاد می‌کنم همزمان با تعویض بلبرینگ‌ها، سیستم روغن‌کاری نیز سرویس شود."
  },
  {
    id: 3,
    name: "علی محمدی",
    role: "تکنسین مکانیک",
    time: "امروز، ساعت 13:20",
    text: "آماده همکاری در این پروژه هستم. تجربه کار با این نوع دستگاه‌ها را دارم و می‌توانم در مرحله باز کردن و مونتاژ اسپیندل کمک کنم. ابزار تخصصی مورد نیاز برای خارج کردن بلبرینگ‌ها را نیز در اختیار دارم."
  },
  {
    id: 4,
    name: "سیستم خودکار",
    role: "مرکز کنترل",
    time: "امروز، ساعت 9:15",
    text: "هشدار خودکار: سنسور لرزش دستگاه CNC-001 مقادیر غیرطبیعی را گزارش می‌کند. آخرین اندازه‌گیری: ۲.۳ میلی‌متر (حد مجاز: ۱.۵ میلی‌متر). دستور کار اضطراری ایجاد شده است. توصیه می‌شود تا رفع مشکل، دستگاه از مدار تولید خارج شود."
  }
  ];


  return (
    <div className='p-5 bg-[var(--colCard)] rounded-md gap-5 grid'>
      <div className='flex gap-3 font-semibold text-lg mb-4'>
        <LiaComments className='w-[20px] h-[20px]'/>
        <p>کامنت‌ها و بحث‌های فنی</p>
      </div>
      {/* COMMENTS */}
      <div>
        {comments.map((comment) => {
          return(
            <div className='flex flex-col gap-3 bg-[#5c6975] rounded-xl p-3 justify-between mb-3' key={comment.id}>
              <div className='flex gap-2 font-medium'>
                <p>{comment.name}</p>-
                <p>{comment.role}</p>
              </div>
              <span className='font-thin text-xs'>{comment.time}</span>
              <p>{comment.text}</p>
            </div>
          )
        })}
      </div>
      {/* ADDING COMMENTS */}
      <div className='flex flex-col gap-3 bg-[#5c6975] rounded-xl p-3 justify-between mb-3'>
        <form className='flex gap-3 flex-col'>
          <label>افزودن کامنت فنی</label>
          <textarea className='w-full p-3 rounded-lg resize-none' rows={4} placeholder='نظرات فنی، پیشنهادات، یا گزارش پیشرفت کار را اینجا بنویسید...'></textarea>
          <div className='flex justify-between'>
            <p>کامنت به عنوان: مدیر نگهداری</p>
            <button type='submit' className='bg-lime-900 px-4 py-2 rounded-lg'>افزودن کامنت</button>
          </div>
        </form>
      </div>
    </div>
  )
}
