'use client'
import React from 'react'
import { MdInventory } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import InsuranceChart from '@/components/Modules/Charts/Hospital/FicanceBarChart';
import { usePathname } from 'next/navigation';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { colorVariantSelector } from '@/data/themeVariants';
import InventoryListCard from '@/components/Modules/Cards/Inventroy/InventoryListCard';
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll';



export default function InventoryDashboardPage() {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const cardInfos = [
        { id: 1, color: '#3b82f6', icon: MdInventory, title: 'کل موجودی', val: '۱۲٬۸۴۷', desc: '8 درصد بیشتر از ماه قبل' },
        { id: 2, color: '#3ac971', icon: FaArrowLeftLong, title: 'ورودی امروز', val: '۲۴۷', desc: '↗ 12 مورد جدید' },
        { id: 3, color: '#ef4444', icon: FaArrowRightLong, title: 'خروجی امروز', val: '۱۸۹', desc: '↘ 5 مورد کمتر' },
        { id: 4, color: '#e9b925', icon: IoIosWarning, title: 'هشدار کمبود', val: '۲۳', desc: '⚠ نیاز به سفارش' },
    ]

    const buttons = [
        { id: 1, color: '#3b82f6', name: 'افزودن کالا' },
        { id: 2, color: '#3ac971', name: 'دریافت کالا' },
        { id: 3, color: '#ef4444', name: 'صدور کالا' },
        { id: 4, color: '#a855f7', name: 'گزارش گیری' },
    ]

    const items = [
        {
            code: "RAW-001",
            name: "کائوچو طبیعی",
            category: "مواد اولیه",
            stock: 8500,
            stockLevel: "بالا",
            unit: "kg",
            value: "۲.۱ میلیارد تومان"
        },
        {
            code: "RAW-002",
            name: "کائوچو مصنوعی SBR",
            category: "مواد اولیه",
            stock: 1200,
            stockLevel: "کم",
            unit: "kg",
            value: "۱.۸ میلیارد تومان"
        },
        {
            code: "PRT-001",
            name: "رینگ فولادی ۱۳ اینچ",
            category: "قطعات",
            stock: 2800,
            stockLevel: "متوسط",
            unit: "عدد",
            value: "۱.۴ میلیارد تومان"
        },
        {
            code: "FIN-001",
            name: "تایر پراید ۱۳ اینچ",
            category: "محصولات نهایی",
            stock: 15000,
            stockLevel: "بالا",
            unit: "عدد",
            value: "۳.۷ میلیارد تومان"
        },
        {
            code: "RAW-003",
            name: "دوده کربن N330",
            category: "مواد اولیه",
            stock: 800,
            stockLevel: "کم",
            unit: "kg",
            value: "۹۲۰ میلیون تومان"
        },
        {
            code: "EQP-001",
            name: "قالب تایر سایز ۱۳",
            category: "ابزار و تجهیزات",
            stock: 0,
            stockLevel: "ناموجود",
            unit: "عدد",
            value: "۰ تومان"
        }
    ];

    return (
        <div className='p-5'>

            <div className='text-2xl font-bold flex gap-2 items-center w-full shadow-lg py-7 px-5 rounded-2xl bg-[var(--colCard)]'>
                <MdInventory className='w-10 h-10' />
                <h2>سیستم مدیریت انبار</h2>
            </div>

            <div className='w-full grid grid-cols-2 gap-5 mt-5'>

                {
                    cardInfos.map(item => {
                        return (
                            <div style={{ borderColor: item.color }} key={item.id} className={`bg-[var(--colCard)] shadow-lg rounded-2xl p-5 flex justify-between items-center border-s-4 hover:scale-[1.01] hover:translate-x-2 transition-all duration-500`}>
                                <div className='flex gap-2 flex-col'>
                                    <div style={{ color: item.color }} className={`text-[16px] font-boldd`}>{item.title}</div>
                                    <div className='text-[37px]'>{item.val}</div>
                                    <div className=' text-[var(--colTextB)]'>{item.desc}</div>
                                </div>
                                <item.icon style={{ color: item.color }} className={`text-4xl me-5`} />
                            </div>
                        )
                    })
                }


            </div>

            <div className={`shadow-lg p-5 rounded-xl h-[400px] bg-[var(--colCard)] my-5`}>
                <InsuranceChart title={'نمودار موجودی هفتگی'} />
            </div>

            <div className={`rounded-2xl shadow-lg bg-[var(--colCard)] p-5`}>
                <h2>عملیات سریع :</h2>
                <div className='grid grid-cols-2 mt-5 gap-5'>
                    {
                        buttons.map(item => {
                            return <button key={item.id} style={{ backgroundColor: item.color }} className='p-5 rounded-2xl text-white hover:scale-[1.01] hover:translate-x-2 transition-all duration-500'>{item.name}</button>
                        })
                    }
                </div>
            </div>

            <div className={`bg-[var(--colCard)] shadow-lg mt-5 p-5 rounded-2xl`}>
                <h2 className='flex justify-center w-full'>لیست انبار :</h2>
                <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
                    <div className={`p-5 ${style.gradCardBlue} shadow-lg rounded-2xl gap-5 grid grid-cols-6`}>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>کد آیتم</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>نام آیتم</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>دسته‌بندی</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>موجودی</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>ارزش</div>
                        <div className={``}>واحد</div>
                    </div>
                    {
                        items.map((i, index) => {
                            return (
                                <AnimateOnScroll key={i.id} delay={index * 70}>
                                    <InventoryListCard index={index} {...i} />
                                </AnimateOnScroll>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
