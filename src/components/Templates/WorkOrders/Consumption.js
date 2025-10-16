import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll';
import SuppliesConsumeCard from '@/components/Modules/Cards/Manufacturing/SuppliesConsumeCard';
import React from 'react'


const materials = [
    {
        name: "لاستیک طبیعی",
        code: "RUB-001",
        required: "۲,۵۰۰ کیلوگرم",
        used: "۱,۷۵۰ کیلوگرم",
        remaining: "۷۵۰ کیلوگرم",
        status: "کافی"
    },
    {
        name: "کربن بلک",
        code: "CB-N330",
        required: "۱,۲۰۰ کیلوگرم",
        used: "۸۴۰ کیلوگرم",
        remaining: "۳۶۰ کیلوگرم",
        status: "کافی"
    },
    {
        name: "گوگرد",
        code: "SUL-001",
        required: "۱۰۰ کیلوگرم",
        used: "۷۵ کیلوگرم",
        remaining: "۲۵ کیلوگرم",
        status: "کم"
    },
    {
        name: "روغن فرآیند",
        code: "OIL-002",
        required: "۳۰۰ لیتر",
        used: "۲۸۵ لیتر",
        remaining: "۱۵ لیتر",
        status: "ناکافی"
    },
    {
        name: "سیم فولادی",
        code: "STW-001",
        required: "۸۰۰ متر",
        used: "۵۶۰ متر",
        remaining: "۲۴۰ متر",
        status: "کافی"
    }
];


export default function Consumption() {
    return (
        <div className='p-5 rounded-2xl bg-[var(--colCard)]'>
            <h2 className='text-xl font-bold'>📦 مصرف مواد اولیه</h2>

            <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
                <div className={`p-5 gradCardBlue shadow-lg rounded-2xl gap-5 grid grid-cols-5 text-white`}>
                    <div className={`border-l-2 border-[white] `}>نام ماده</div>
                    <div className={`border-l-2 border-[white] `}>مقدار مورد نیاز</div>
                    <div className={`border-l-2 border-[white] `}>مصرف شده</div>
                    <div className={`border-l-2 border-[white] `}>باقیمانده</div>
                    <div>وضعیت</div>
                </div>
                {
                    materials.map((item, index) => {
                        return (
                            <AnimateOnScroll key={item.id} delay={index * 70}>
                                <SuppliesConsumeCard index={index} {...item} />
                            </AnimateOnScroll>
                        )
                    })
                }
            </div>

            <div className='grid grid-cols-3 gap-5 mt-5 text-white'>
                <div className='p-10 rounded-2xl bg-red-600'>
                    <h2 className='font-semibold text-xl mb-5'>⚠️ هشدار موجودی</h2>
                    <p>
                        روغن فرآیند کمتر از ۱۰% باقیمانده است. نیاز به تامین فوری.
                    </p>
                </div>
                <div className='p-10 rounded-2xl bg-orange-400'>
                    <h2 className='font-semibold text-xl mb-5'>⚡توجه</h2>
                    <p>
                        گوگرد در حد کمینه موجودی قرار دارد. برنامه‌ریزی تامین کنید.
                    </p>
                </div>
                <div className='p-10 rounded-2xl bg-emerald-500'>
                    <h2 className='font-semibold text-xl mb-5'>✅ وضعیت مطلوب</h2>
                    <p>
                        گوگرد در حد کمینه موجودی قرار دارد. برنامه‌ریزی تامین کنید.
                    </p>
                </div>

            </div>

        </div>
    )
}
