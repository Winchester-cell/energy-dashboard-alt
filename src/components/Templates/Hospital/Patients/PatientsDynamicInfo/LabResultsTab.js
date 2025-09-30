import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function LabResultsTab() {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const glassThemeGreen = themeType==='hospital' ? {color:'#00e396',  textShadow:`2px 2px 4px #00e396`} : {}
    const glassThemeYellow = themeType==='hospital' ? {color:'#f6a824',  textShadow:`2px 2px 4px #f6a824`} : {}

    return (
        <div className={`${style.cardStyleA} rounded-3xl p-5`}>

            <h2 className='font-bold text-lg'>نتایج آزمایش</h2>

            <div style={{ ...glassThemeGreen , boxShadow:`2px 2px 4px #00e396`}} className={`rounded-xl p-5 mt-5 ${style.cardStyleB} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]`}>
                <div className='flex justify-between items-center'>
                    <div>آزمایش خون کامل (CBC)</div>
                    <div>امروز ، ۰۸:۳۰</div>
                </div>
                <div className='grid grid-cols-4 mt-10'>
                    <div className='text-center'>WBC : ۷.۲ K/μL</div>
                    <div className='text-center'>RBC: ۴.۵ M/μL</div>
                    <div className='text-center'>HGB: ۱۴.۲ g/dL</div>
                    <div className='text-center'>PLT: ۱۸۰ K/μL</div>
                </div>
                <div className='glass-card-b my-5' />
                <div className='glass-card-no-bg bg-[#35de7390] rounded-full w-fit text-[white] px-5 py-1'>
                    طبیعی
                </div>
            </div>

            <div style={{ ...glassThemeYellow ,boxShadow:`2px 2px 4px #f6a824`}} className={`rounded-xl p-5 mt-5 ${style.cardStyleB} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]`}>
                <div className='flex justify-between items-center'>
                    <div>بیوشیمی خون</div>
                    <div>دیروز، ۱۶:۱۵</div>
                </div>
                <div className='grid grid-cols-4 mt-10'>
                    <div className='text-center'>گلوکز : ۹۵ mg/dL</div>
                    <div className='text-center'>کراتینین : ۱.۰ mg/dL</div>
                    <div className='text-center'>کلسترول : ۲۲۰ mg/dL</div>
                    <div className='text-center'>تری‌گلیسرید : ۱۶۰ mg/dL</div>
                </div>
                <div className='glass-card-b my-5' />
                <div className='glass-card-no-bg bg-[#ded8358e] rounded-full w-fit text-[white] px-5 py-1'>
                    نیاز به پیگیری
                </div>
            </div>

            <div style={{ ...glassThemeGreen , boxShadow:`2px 2px 4px #00e396`}} className={`rounded-xl p-5 mt-5 ${style.cardStyleB} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]`}>
                <div className='flex justify-between items-center'>
                    <div>آزمایش ادرار</div>
                    <div>۲ روز پیش، ۱۰:۰۰</div>
                </div>
                <div className='grid grid-cols-4 mt-10'>
                    <div className='text-center'>پروتئین: منفی</div>
                    <div className='text-center'>گلوکز: منفی</div>
                    <div className='text-center'>کتون: منفی</div>
                    <div className='text-center'>خون: منفی</div>
                </div>
                <div className='glass-card-b my-5' />
                <div className='glass-card-no-bg bg-[#35de7390] rounded-full w-fit text-[white] px-5 py-1'>
                    طبیعی
                </div>
            </div>
        </div>
    )
}
