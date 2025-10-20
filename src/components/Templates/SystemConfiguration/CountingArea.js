import React from 'react'
import { LuPlus } from "react-icons/lu";

export default function CountingArea() {
    const cameras = [
  {
    id: 1,
    title: "ورودی اصلی",
    device: "Camera-01",
    ip: "192.168.1.101",
    type: "افراد، وسایل نقلیه",
    accuracy: "98.5%",
    tagColor: "bg-green-800",
    statusColor: "bg-green-800"
  },
  {
    id: 2,
    title: "فروشگاه A",
    device: "Camera-02",
    ip: "192.168.1.102",
    type: "افراد",
    accuracy: "97.2%",
    tagColor: "bg-blue-800",
    statusColor: "bg-green-800"
  },
  {
    id: 3,
    title: "فروشگاه B",
    device: "Camera-03",
    ip: "192.168.1.103",
    type: "افراد",
    accuracy: "96.8%",
    tagColor: "bg-purple-800",
    statusColor: "bg-green-800"
  },
  {
    id: 4,
    title: "کافه",
    device: "Camera-04",
    ip: "192.168.1.104",
    type: "افراد",
    accuracy: "95.1%",
    tagColor: "bg-yellow-400",
    statusColor: "bg-green-800"
  },
  {
    id: 5,
    title: "پارکینگ",
    device: "Camera-05",
    ip: "192.168.1.105",
    type: "وسایل نقلیه",
    accuracy: "92.3%",
    tagColor: "bg-red-800",
    statusColor: "bg-yellow-500"
  },
];
const locations = [
    {
        id: 1,
        location: "کافه",
        color: "#ffcc00"
    },
    {
        id: 2,
        location: "فروشگاه A",
        color: "#1a327e"
    },
    {
        id: 3,
        location: "فروشگاه B",
        color: "#55257c"
    },
    {
        id: 4,
        location: "ورودی اصلی",
        color: "#30804e"
    },
    {
        id: 5,
        location: "پارکینگ اصلی",
        color: "#831843"
    }
];
const statsData = [
    {
        id:1,
        title: "نواحی فعال",
        accuracy: "5",
        color:"text-lime-600",
    },
    {
        id:2,
        title: "میانگین دقت",
        accuracy: "96.2%",
        color: "text-sky-600",
    },
    {
        id:3,
        title: "پوشش زمانی",
        accuracy: "24/7",
        color: "text-purple-500",
    },
    {
        id:4,
        title: "کل شمارش امروز",
        accuracy: "1,247",
        color: "text-orange-600"
    },
]
  return (
    <div>
      <div className='bg-[var(--colCard)] rounded-2xl p-5'>
            {/* HEADER OF PAGE */}
            <div className='grid grid-cols-2 mt-2 p-5'>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold text-xl'> نواحی شمارش</p>
                    <span>مدیریت نواحی شمارش و دوربین‌های نظارتی</span>
                </div>
                <div className="relative flex items-center justify-end gap-3 p-3 rounded-xl">
                    <LuPlus className='absolute left-36 bottom-6'/>
                    <button className='flex items-center gap-2 bg-blue-600 text-white px-5 pr-[30px] py-2 rounded-lg hover:bg-blue-700 transition-all'>افزودن ناحیه جدید</button>
                </div>
            </div>
            {/* LOCATION SECTION */}
            <div className="bg-[var(--bgCard)] rounded-lg grid-cols-2 p-5">
                <p className="mb-5 font-semibold text-base">نقشه کلی نواحی</p>
                <div className="bg-[var(--bgCardB)] grid grid-cols-4 gap-3 p-5 rounded-lg text-white">
                    {
                        locations.map((location) => {
                            return(
                                <div key={location.id} className={`text-center p-5 rounded-lg ${location.location === "پارکینگ اصلی" ? "col-span-4" : ""}`} style={{backgroundColor: location.color}}>
                                    <p>{location.location}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* CARD OF EACH ITEMS */}
            <div className='grid grid-cols-3 gap-4 mt-7'>
                {cameras.map((camera) => {
                    return(
                        <div key={camera.id} className='bg-[var(--bgCard)] rounded-xl px-5 py-5 flex flex-col gap-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-2 items-center'>
                                    <span className={`h-4 w-4 grid rounded-3xl ${camera.tagColor}`}></span>
                                    <p className='font-base'>{camera.title}</p>
                                </div>
                                <span className={`h-6 w-6 shadow-md bg- grid rounded-3xl ${camera.statusColor}`}></span>
                            </div>
                            <p>دستگاه: {camera.device}</p>
                            <p>IP: {camera.ip}</p>
                            <p>نوع: {camera.type}</p>
                            <p>دقت: {camera.accuracy}</p>
                            <div className='flex gap-2 justify-around'>
                                <button className='bg-[#acc7ec] text-[#1e40af] rounded-lg px-3 py-2 font-medium w-[50%] hover:cursor-pointer'>ویرایش</button>
                                {camera.statusColor === "bg-green-800" ? <button className='bg-[#bbddc6] text-[#166534] rounded-lg px-3 py-2 font-medium w-[50%] hover:cursor-pointer'>مشاهده</button> : <button className='bg-[#efe89e] text-[#854d0e] rounded-lg px-3 py-2 font-medium w-[50%] hover:cursor-pointer'>بررسی</button>}
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* ACCURACY SECTION */}
            <div className='grid bg-[var(--bgCard)] p-5 mt-7 rounded-lg gap-2'>
                <p className='font-bold text-base'> آمار کلی نواحی</p>
                <div className='flex flex-row justify-evenly'>
                {
                    statsData.map((data) => {
                        return(
                            <div key={data.id} className='flex flex-col-reverse items-center gap-2'>
                                <p>{data.title}</p>
                                <span className={`font-black text-2xl ${data.color}`}>{data.accuracy}</span>
                            </div>
                        )
                    })
                }
            </div>
            </div>
      </div>
    </div>
  )
}
