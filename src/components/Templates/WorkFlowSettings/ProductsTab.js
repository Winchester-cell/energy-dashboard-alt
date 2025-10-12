import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'
import ProductsInfoCard from '@/components/Modules/Cards/WorkFlows/ProductsInfoCard';
import SuppliesInfoCard from '@/components/Modules/Cards/WorkFlows/SuppliesInfoCard';
import SearchInput from '@/components/Modules/Inputs/SearchInput';
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";



const tires = [
    {
        id: "TR-165",
        emoji: "🚗",
        name: "تایر رادیال پراید",
        size: "۱۶۵/۸۰R13",
        unit: "حلقه",
        price: "۲۵,۰۰۰,۰۰۰ ریال",
    },
    {
        id: "TB-1200",
        emoji: "🚛",
        name: "تایر بایاس کامیون",
        size: "۱۱R22.5",
        unit: "حلقه",
        price: "۹۰,۰۰۰,۰۰۰ ریال",
    },
    {
        id: "TM-300",
        emoji: "🏍️",
        name: "تایر موتورسیکلت",
        size: "۳.۰۰-۱۸",
        unit: "حلقه",
        price: "۸,۵۰۰,۰۰۰ ریال",
    },
    {
        id: "TP-185",
        emoji: "🚙",
        name: "تایر پژو ۴۰۵",
        size: "۱۸۵/۶۵R15",
        unit: "حلقه",
        price: "۳۲,۰۰۰,۰۰۰ ریال",
    },
];

const rawMaterials = [
    {
        id: "RAW-RUB-01",
        emoji: "🧪",
        name: "کائوچوی SBR-1502",
        description: "ماده اولیه اصلی",
        unit: "کیلوگرم",
        price: "۵۵۰,۰۰۰ ریال",
    },
    {
        id: "RAW-CRB-01",
        emoji: "⚫",
        name: "دوده N330",
        description: "ماده رنگ‌زا و تقویت‌کننده",
        unit: "کیلوگرم",
        price: "۲۰۰,۰۰۰ ریال",
    },
    {
        id: "RAW-OIL-01",
        emoji: "🛢️",
        name: "روغن فرآیند آروماتیک",
        description: "نرم‌کننده و پلاستیسایزر",
        unit: "لیتر",
        price: "۱۲۰,۰۰۰ ریال",
    },
    {
        id: "RAW-STL-01",
        emoji: "🔩",
        name: "سیم فولادی ۱.۲mm",
        description: "تقویت‌کننده ساختاری",
        unit: "کیلوگرم",
        price: "۸۵۰,۰۰۰ ریال",
    },
    {
        id: "RAW-SUL-01",
        emoji: "🟡",
        name: "گوگرد پودری",
        description: "عامل ولکانیزاسیون",
        unit: "کیلوگرم",
        price: "۴۵,۰۰۰ ریال",
    },
    {
        id: "RAW-ZNO-01",
        emoji: "⚪",
        name: "اکسید روی",
        description: "فعال‌کننده ولکانیزاسیون",
        unit: "کیلوگرم",
        price: "۱۸۰,۰۰۰ ریال",
    },
];


export default function ProductsTab() {

    const [selectedSec, setSelectedSec] = useState('product')

    return (
        <div className='p-5 bg-[var(--colCard)] rounded-2xl'>
            <div className='flex bg-[var(--colBg)] rounded-2xl'>
                <button onClick={() => setSelectedSec('product')} className={`w-1/2 rounded-s-2xl border-emerald-600 p-5 ${selectedSec === 'product' ? `border-2` : ``}`}>محصولات نهایی</button>
                <button onClick={() => setSelectedSec('supp')} className={`w-1/2 rounded-e-2xl border-sky-600 p-5 ${selectedSec === 'supp' ? `border-2` : ``}`}>مواد اولیه</button>
            </div>
            {
                selectedSec === 'product' ? <ProductSection /> : <SuppliesSection />
            }
        </div>
    )
}

function ProductSection() {
    return (
        <div className='p-5 bg-[var(--colCard)] rounded-2xl'>
            <div className='flex items-center gap-5'>
                <button style={{ boxShadow: `2px 2px 4px #dc2626` }} className='flex gap-2 items-center bg-[var(--colBg)] py-2 px-10 rounded-full shadow-lg'>
                    <FaPlus />
                    افزودن محصول جدید
                </button>
                <SearchInput />
            </div>
            <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
                <div className={`p-5 gradCardGreen shadow-lg rounded-2xl gap-5 grid grid-cols-5 text-white`}>
                    <div className={`border-l-2 border-[white] `}>SKU</div>
                    <div className={`border-l-2 border-[white] `}>نام محصول</div>
                    <div className={`border-l-2 border-[white] `}>واحد شمارش</div>
                    <div className={`border-l-2 border-[white] `}>قیمت فروش استاندارد</div>
                    <div>اقدامات</div>
                </div>
                {
                    tires.map((t, index) => {
                        return (
                            <AnimateOnScroll key={t.id} delay={index * 70}>
                                <ProductsInfoCard index={index} {...t} />
                            </AnimateOnScroll>
                        )
                    })
                }
            </div>
        </div>
    )
}

function SuppliesSection() {
    return (
        <div className='p-5 bg-[var(--colCard)] rounded-2xl'>
            <div className='flex items-center gap-5'>
                <button style={{ boxShadow: `2px 2px 4px #dc2626` }} className='flex gap-2 items-center bg-[var(--colBg)] py-2 px-10 rounded-full shadow-lg'>
                    <FaPlus />
                    افزودن ماده اولیه
                </button>
                <SearchInput />
            </div>
            <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
                <div className={`p-5 gradCardBlue shadow-lg rounded-2xl gap-5 grid grid-cols-5 text-white`}>
                    <div className={`border-l-2 border-[white] `}>SKU</div>
                    <div className={`border-l-2 border-[white] `}>نام ماده اولیه</div>
                    <div className={`border-l-2 border-[white] `}>واحد شمارش</div>
                    <div className={`border-l-2 border-[white] `}>قیمت فروش استاندارد</div>
                    <div>اقدامات</div>
                </div>
                {
                    rawMaterials.map((item, index) => {
                        return (
                            <AnimateOnScroll key={item.id} delay={index * 70}>
                                <SuppliesInfoCard index={index} {...item} />
                            </AnimateOnScroll>
                        )
                    })
                }
            </div>
        </div>
    )
}
