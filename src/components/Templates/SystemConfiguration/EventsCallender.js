import { percent } from 'framer-motion';
import { Evented } from 'leaflet';
import React from 'react'
import { LuPlus } from "react-icons/lu";

let arr = new Array(28).fill('');
const daysOfWeek = ["شنبه" , "یکشنبه" , "دوشنبه" , "سه‌شنبه" , "چهارشنبه" , "پنجشنبه" , "جمعه"];

arr[4] = {title: 'حراج ویژه' , backColor: '#c59191' , textColor: '#991B1B' , icon: '🔥'}
arr[11] = {title: 'نمایشگاه' , backColor: '#8cabd2' , textColor: '#284AB4' , icon: '🎪'}
arr[12] = {title: 'نمایشگاه' , backColor: '#8cabd2' , textColor: '#284AB4' , icon: '🎪'}
arr[13] = {title: 'نمایشگاه' , backColor: '#8cabd2' , textColor: '#284AB4' , icon: '🎪'}
arr[19] = {title: 'کنسرت' , backColor: '#9b83b7' , textColor: '#7631B0' , icon: '🎸'}
arr[24] = {title: 'کریسمس ', backColor: '#658f73' , textColor: '#166534' , icon: '🌲'}


export default function EventsCallender() {
  const upcomingEvents = [
  {
    id: 1,
    title: "حراج ویژه",
    date: "۵ آذر",
    discount: "تخفیف ۵۰٪",
    icon: "🔥",
    color: "#c59191",
    trafficBoost: "+۱۸۰٪",
    textColor: "#6e0c0c"
  },
  {
    id: 2,
    title: "نمایشگاه محصولات",
    date: "۱۲–۱۴ آذر",
    icon: "🏠",
    color: "#8cabd2",
    trafficBoost: "+۱۲۰٪",
    textColor: "#0e2361"
  },
  {
    id: 3,
    title: "کنسرت موسیقی",
    date: "۲۰ آذر · ۱۹:۰۰",
    icon: "🎵",
    color: "#9b83b7",
    trafficBoost: "+۹۰٪",
    textColor: "#460268"
  },
  ];

  const eventAnalytics = [
  {
    id: 1,
    label: "میانگین افزایش تردد:",
    value: "+130٪",
    color: "#16A34A", 
    percent: 80
  },
  {
    id: 2,
    label: "بهترین ساعت شروع:",
    value: "14:00",
    color: "#2563EB", 
    percent: 60
  },
  {
    id: 3,
    label: "مدت زمان اثرگذاری:",
    value: "3 روز",
    color: "#A855F7",
    percent: 30
  },
  ];

  return (
    <div>
      <div className='bg-[var(--colCard)] rounded-2xl p-5'>
        {/* HEADER SECTION */}
        <div className='grid grid-cols-2 mt-2 p-5'>
            <div className='flex flex-col gap-1'>
              <p className='font-bold text-xl'>تقویم رویدادها</p>
              <span>مدیریت رویدادها و تأثیر آن‌ها بر الگوهای تردد</span>
            </div>
            <div className="relative flex items-center justify-end gap-3 p-3 rounded-xl">
              <LuPlus className='absolute left-[120px] bottom-6'/>
              <button className='flex items-center gap-2 bg-blue-600 text-white px-5 pr-[30px] py-2 rounded-lg hover:bg-blue-700 transition-all'>افزودن رویداد</button>
            </div>
        </div>
        <div className='flex bg-[var(--colBg)] gap-3 rounded-lg p-5 '>
          {/* RIGHT SECTION (THE BIGGER ONE) */}
          <div className='w-[70%] bg-[var(--colCard)] rounded-lg p-5'> 
            {/* BUTTONS FOR CALLENDER */}
            <div className='flex justify-between flex-row mb-3'>
              <p className='font-semibold text-base'>آذر 1403</p>
              <div className='flex gap-3'>
                <button className='bg-[#aeb4bc] px-3 py-1 rounded-md text-black'>قبلی</button>
                <button className='bg-[#aeb4bc] px-3 py-1 rounded-md text-black'>بعدی</button>
              </div>
            </div>

            <div>
              {/* THE DAYS OF WEEK */}
              <div className='grid grid-cols-7 gap-2 mb-3'>
                {daysOfWeek.map((day) => {
                  return(
                    <div>{day}</div>
                  )
                })}
              </div>
              {/* THE SPECIAL EVENTs ON CALLENDER */}
              <div className='grid grid-cols-7 gap-2'>
                {arr.map((date , index) => {
                  return(
                    <div key={date.id} className='p-2 bg-[#aeb4bc] rounded-lg' style={{backgroundColor: date.backColor}}>
                      <div>{index + 1}</div>
                      <div className='flex gap-1'>
                        <span>{date.icon}</span>
                      <p>{date.title}</p>
                      </div>
                    </div> 
                  )
                })}
            </div>
            </div>
          </div>
          {/* LEFT SECTION (THE SMALLER ONE) */}
          <div className='w-[30%] bg-[var(--colCard)] rounded-lg p-5 grid gap-4'>
            {/* UPCOMING EVENTS SECTION */}
            <div className='grid bg-[var(--bgCard)] gap-3 rounded-lg p-5 '>
              <p className='font-bold mb-4 text-base'>رویدادهای پیش رو</p>
              {upcomingEvents.map((event) => {
                return(
                  <div key={event.id} style={{backgroundColor: event.color}} className='rounded-lg flex items-center p-2'>
                    <div>
                      <span className='bg-slate-700 p-2 rounded-lg'>{event.icon}</span>
                    </div>
                    <div className='p-3 flex flex-col gap-1'>
                      <p>{event.title}</p>
                      <div className='flex gap-1'>
                        <p>{event.date}</p>
                        <p>{event.discount}</p>
                      </div>
                      <span style={{color: event.textColor}}> پیش‌بینی :{event.trafficBoost} تردد</span>
                    </div>
                  </div>
                )
              })}
            </div>
              {/* EVENTS ANALYTICS SECTION */}
            <div className='bg-[var(--bgCard)] gap-3 rounded-lg p-5 '>
              <p className='font-bold mb-4 text-base'>تحلیل تاثیر رویدادها</p>
              {eventAnalytics.map((event) => {
                return(
                  <div key={event.id} className='flex flex-col gap-2 mb-4'>
                    <div className='flex justify-between'>
                      <p>{event.label}</p>
                      <span
                        className={`font-bold ${
                          event.color === "bg-green-500"
                            ? "text-green-600"
                            : event.color === "bg-blue-500"
                            ? "text-blue-600"
                            : "text-purple-600"
                        }`}
                      >
                        {event.value}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#aeb4bc] rounded-full overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-700`}
                        style={{ width: `${event.percent}%`, backgroundColor: `${event.color}`}}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
              {/* QUICK ACTIONS SECTIONS */}
            <div className='bg-[var(--bgCard)] rounded-lg p-5'>
              <p className='font-bold mb-4 text-base'>اقدامات سریع</p>  
              <div className='flex flex-col gap-3'>
                <div className='bg-[#BFDBFE] text-sky-900 font-semibold rounded-lg p-2 flex justify-start gap-2 hover:cursor-pointer'>
                  <span>📈</span>
                  <p className=''>پیش‌بینی تردد رویداد</p>
                </div>
                <div className='bg-[#BBF7D0] text-lime-900 font-semibold rounded-lg p-2 flex justify-start gap-2 hover:cursor-pointer'>
                  <span>🔔</span>
                  <p>تنظیم هشدار رویداد</p>
                </div>
                <div className='bg-[#E9D5FF] text-purple-900 font-semibold rounded-lg p-2 flex justify-start gap-2 hover:cursor-pointer'>
                  <span>📊</span>
                  <p>گزارش تاثیر گذشت</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
