'use client'
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'
import DevicesControlCenterCard from '@/components/Modules/Cards/DevicesControlCenterCard'
import ControlCenterHeadPart from '@/components/Templates/ControlCenter/ControlCenterHeadPart'
import React from 'react'

export default function ControlCenter() {

    const machines = [
        {
            name: "دستگاه برش CNC",
            status: "در حال کار",
            workOrder: "WO-101",
            progress: 70,
            power: "955 kW",
            temperature: "59°C",
            oee: "82%",
            lastAlert: "--"
        },
        {
            name: "پرس پخت ۱",
            status: "متوقف (خرابی)",
            workOrder: "WO-102",
            progress: 45,
            power: "0 kW",
            temperature: "90°C",
            oee: "0%",
            lastAlert: "فشار بالا"
        },
        {
            name: "کمپرسور ۲",
            status: "بیکار",
            workOrder: "-",
            progress: null,
            power: "5 kW",
            temperature: "40°C",
            oee: "-",
            lastAlert: "--"
        },
        {
            name: "روبات جوشکاری",
            status: "در حال کار",
            workOrder: "WO-103",
            progress: 92,
            power: "322 kW",
            temperature: "54°C",
            oee: "95%",
            lastAlert: "--"
        },
        {
            name: "کنوایر اصلی",
            status: "بیکار",
            workOrder: "-",
            progress: null,
            power: "15 kW",
            temperature: "35°C",
            oee: "-",
            lastAlert: "--"
        },
        {
            name: "دستگاه بسته‌بندی",
            status: "در حال کار",
            workOrder: "WO-104",
            progress: 38,
            power: "212 kW",
            temperature: "46°C",
            oee: "76%",
            lastAlert: "--"
        },
        {
            name: "برش‌لیزر ۲",
            status: "در حال کار",
            workOrder: "WO-105",
            progress: 81,
            power: "684 kW",
            temperature: "61°C",
            oee: "88%",
            lastAlert: "--"
        },
        {
            name: "پرس تزریق ۳",
            status: "در حال کار",
            workOrder: "WO-106",
            progress: 56,
            power: "403 kW",
            temperature: "67°C",
            oee: "79%",
            lastAlert: "--"
        },
        {
            name: "تراش CNC ۱",
            status: "در حال کار",
            workOrder: "WO-107",
            progress: 64,
            power: "512 kW",
            temperature: "58°C",
            oee: "83%",
            lastAlert: "--"
        },
        {
            name: "دستگاه خشک‌کن",
            status: "متوقف (نگهداری)",
            workOrder: "WO-108",
            progress: 0,
            power: "0 kW",
            temperature: "25°C",
            oee: "0%",
            lastAlert: "تعویض فیلتر"
        },
        {
            name: "کوره صنعتی",
            status: "در حال کار",
            workOrder: "WO-109",
            progress: 73,
            power: "1200 kW",
            temperature: "120°C",
            oee: "85%",
            lastAlert: "--"
        },
        {
            name: "سیستم تهویه ۱",
            status: "بیکار",
            workOrder: "-",
            progress: null,
            power: "30 kW",
            temperature: "32°C",
            oee: "-",
            lastAlert: "--"
        },
        {
            name: "ربات رنگ‌پاش",
            status: "در حال کار",
            workOrder: "WO-110",
            progress: 48,
            power: "260 kW",
            temperature: "49°C",
            oee: "78%",
            lastAlert: "--"
        },
        {
            name: "پرس حرارتی ۲",
            status: "متوقف (خرابی)",
            workOrder: "WO-111",
            progress: 22,
            power: "0 kW",
            temperature: "87°C",
            oee: "0%",
            lastAlert: "داغی بیش از حد"
        },
        {
            name: "سیستم خنک‌کننده ۳",
            status: "در حال کار",
            workOrder: "WO-112",
            progress: 95,
            power: "88 kW",
            temperature: "34°C",
            oee: "97%",
            lastAlert: "--"
        },
        {
            name: "دستگاه مونتاژ ۱",
            status: "در حال کار",
            workOrder: "WO-113",
            progress: 62,
            power: "340 kW",
            temperature: "52°C",
            oee: "80%",
            lastAlert: "--"
        },
        {
            name: "پرس هیدرولیک ۲",
            status: "بیکار",
            workOrder: "-",
            progress: null,
            power: "12 kW",
            temperature: "39°C",
            oee: "-",
            lastAlert: "--"
        },
        {
            name: "برش‌پلاستیک ۱",
            status: "در حال کار",
            workOrder: "WO-114",
            progress: 58,
            power: "230 kW",
            temperature: "57°C",
            oee: "82%",
            lastAlert: "--"
        },
        {
            name: "ربات بسته‌بندی ۲",
            status: "در حال کار",
            workOrder: "WO-115",
            progress: 87,
            power: "190 kW",
            temperature: "44°C",
            oee: "91%",
            lastAlert: "--"
        },
        {
            name: "کانوایر ثانویه",
            status: "بیکار",
            workOrder: "-",
            progress: null,
            power: "9 kW",
            temperature: "36°C",
            oee: "-",
            lastAlert: "--"
        },
        {
            name: "دستگاه تست نهایی",
            status: "در حال کار",
            workOrder: "WO-116",
            progress: 77,
            power: "410 kW",
            temperature: "50°C",
            oee: "89%",
            lastAlert: "--"
        },
        {
            name: "ژنراتور اضطراری",
            status: "بیکار",
            workOrder: "-",
            progress: null,
            power: "3 kW",
            temperature: "42°C",
            oee: "-",
            lastAlert: "--"
        },
        {
            name: "دستگاه برش فلز ۳",
            status: "در حال کار",
            workOrder: "WO-117",
            progress: 66,
            power: "640 kW",
            temperature: "63°C",
            oee: "84%",
            lastAlert: "--"
        },
        {
            name: "پرس مکانیکی ۱",
            status: "در حال کار",
            workOrder: "WO-118",
            progress: 41,
            power: "370 kW",
            temperature: "55°C",
            oee: "74%",
            lastAlert: "--"
        },
        {
            name: "دستگاه فیلتر هوا",
            status: "متوقف (نگهداری)",
            workOrder: "WO-119",
            progress: 0,
            power: "0 kW",
            temperature: "28°C",
            oee: "0%",
            lastAlert: "نیاز به تمیزکاری"
        }
    ]

    return (
        <div className='p-5 '>
            <div className='w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl mb-5'>
                <h2 className='text-2xl font-bold'>مرکز کنترل تجهیزات</h2>
                <p className='text-[var(--colTextB)] mt-3'>مدیریت و نظارت بر تجهیزات</p>
            </div>
            <ControlCenterHeadPart />
            <div className='w-full grid grid-cols-3 gap-5 mt-5'>
                {
                    machines.map((device, index) => {
                        return (
                            <AnimateOnScroll key={index} delay={index * 70}>
                                <DevicesControlCenterCard {...device} />
                            </AnimateOnScroll>
                        )
                    })
                }
            </div>
        </div>
    )
}
