import React from 'react'
import { LuPlus } from "react-icons/lu";

export default function Objects() {
    const cardData = [
        {
        id: 1,
        title: "سبد خرید",
        subtitle: "carts",
        icon: "🛒",
        tags: [" پر/خالی"],
        color: "#A855F7", 
        },
        {
        id: 2,
        title: "وسایل نقلیه",
        subtitle: "vehicles",
        icon: "🚗",
        tags: [" نوع", " رنگ"],
        color: "#22C55E",
        },
        {
        id: 3,
        title: "افراد",
        subtitle: "people",
        icon: "👥",
        tags: [" جنسیت", " سن", " لباس"],
        color: "#3B82F6",
        },
        ];
        const statsData = [
      {
        id: 1,
        title: "دقت تشخیص ویژگی",
        accuracy: "89.7%",
        color: "#A855F7",
      },
      {
        id: 2,
        title: "دقت شناسایی وسایل",
        accuracy: "94.2%",
        color: "#22C55E",
      },
      {
        id: 3,
        title: "دقت شناسایی افراد",
        accuracy: "98.5%",
        color: "#3B82F6",
      },
        ];
        const tagColors = ["bg-pink-200", "bg-green-200", "bg-blue-200"];
  return (
    <div>
      <div className='bg-[var(--colCard)] rounded-2xl p-5'>

        {/* HEADER OF PAGE */}
        <div className='grid grid-cols-2 mt-2 p-5'>
            <div className='flex flex-col gap-1'>
                <p className='font-bold text-xl'>انواع اشیا</p>
                <span>مدیریت انواع اشیاء قابل شناسایی توسط سیستم</span>
            </div>
            <div className="relative flex items-center justify-end gap-3 p-3 rounded-xl">
                <LuPlus className='absolute left-36 bottom-6'/>
                <button className='flex items-center gap-2 bg-blue-600 text-white px-5 pr-[30px] py-2 rounded-lg hover:bg-blue-700 transition-all'>ثبت تراکنش جدید</button>
            </div>
        </div>

        {/* ITEMS CARD */}
        <div className='flex p-3 gap-4 justify-around'>
            {cardData.map((data) => {
                return(
                    <div className='w-[30%]' key={data.id}>
                        <div className='bg-[var(--bgCard)] rounded-xl px-5 py-5 flex flex-col gap-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                            {/* BODY OF CARD */}
                            <div className='flex items-center gap-2'>
                                <span className='bg-slate-300 rounded-lg p-2'>{data.icon}</span>
                                <div className='flex flex-col mr-3'>
                                    <p className='font-bold text-base'>{data.title}</p>
                                    <p className='text-slate-400 text-xs'>{data.subtitle}</p>
                                </div>
                            </div>
                            {/* MAP FOR CHANGING COLOR OF TAGS */}
                            <div className='flex gap-2'>
                                {data.tags.map((tag,index) => {
                            return(
                                <span key={index} className={`px-2 py-1 rounded-full text-sm text-[#3a3878] ${tagColors[index]}`}>{tag}</span>
                            )
                            })}
                            </div>
                            {/* BUTTON OF CARD */}
                            <div className='flex gap-2 justify-around'>
                                <button className='bg-[#acc7ec] text-[#1e40af] rounded-lg px-3 py-2 font-medium w-[50%] hover:cursor-pointer'>ویرایش</button>
                                <button className='bg-[#efbdbd] text-[#991b1b] rounded-lg px-3 py-2 font-medium w-[50%] hover:cursor-pointer'>حذف</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

        {/* ACCURACY SECTION */}
        <div className='grid bg-[var(--bgCard)] p-5 mt-5 rounded-lg gap-2'>
            <p className='font-bold text-base'>آمار شناسایی</p>
            <div className='flex flex-row justify-evenly'>
            {statsData.map((data) => {
                return(
                    <div key={data.id} className='flex flex-col-reverse items-center gap-2'>
                        <p>{data.title}</p>
                        <p className='font-bold text-2xl' style={{color: data.color}}>{data.accuracy}</p>
                    </div>
                )
            })}
        </div>
        </div>
      </div>
    </div>
  )
}
