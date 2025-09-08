import React from 'react'

export default function LabResultsTab() {
    return (
        <div className='glass-card rounded-3xl p-5'>

            <h2 className='font-bold text-lg'>نتایج آزمایش</h2>

            <div className='glass-card-b rounded-xl p-5 mt-5'>
                <div className='flex justify-between items-center'>
                    <div>آزمایش خون کامل (CBC)</div>
                    <div>امروز ، ۰۸:۳۰</div>
                </div>
                <div className='grid grid-cols-4 mt-10'>
                    <div className='text-[#d1d1d1] text-center'>WBC : ۷.۲ K/μL</div>
                    <div className='text-[#d1d1d1] text-center'>RBC: ۴.۵ M/μL</div>
                    <div className='text-[#d1d1d1] text-center'>HGB: ۱۴.۲ g/dL</div>
                    <div className='text-[#d1d1d1] text-center'>PLT: ۱۸۰ K/μL</div>
                </div>
                <div className='glass-card-b my-5' />
                <div className='glass-card-no-bg bg-[#35de7357] rounded-full w-fit text-[#bbffd4] px-5 py-1'>
                    طبیعی
                </div>
            </div>
            <div className='glass-card-b rounded-xl p-5 mt-5'>
                <div className='flex justify-between items-center'>
                    <div>بیوشیمی خون</div>
                    <div>دیروز، ۱۶:۱۵</div>
                </div>
                <div className='grid grid-cols-4 mt-10'>
                    <div className='text-[#d1d1d1] text-center'>گلوکز : ۹۵ mg/dL</div>
                    <div className='text-[#d1d1d1] text-center'>کراتینین : ۱.۰ mg/dL</div>
                    <div className='text-[#d1d1d1] text-center'>کلسترول : ۲۲۰ mg/dL</div>
                    <div className='text-[#d1d1d1] text-center'>تری‌گلیسرید : ۱۶۰ mg/dL</div>
                </div>
                <div className='glass-card-b my-5' />
                <div className='glass-card-no-bg bg-[#ded83557] rounded-full w-fit text-[#f8ffbb] px-5 py-1'>
                    نیاز به پیگیری
                </div>
            </div>
            <div className='glass-card-b rounded-xl p-5 mt-5'>
                <div className='flex justify-between items-center'>
                    <div>آزمایش ادرار</div>
                    <div>۲ روز پیش، ۱۰:۰۰</div>
                </div>
                <div className='grid grid-cols-4 mt-10'>
                    <div className='text-[#d1d1d1] text-center'>پروتئین: منفی</div>
                    <div className='text-[#d1d1d1] text-center'>گلوکز: منفی</div>
                    <div className='text-[#d1d1d1] text-center'>کتون: منفی</div>
                    <div className='text-[#d1d1d1] text-center'>خون: منفی</div>
                </div>
                <div className='glass-card-b my-5' />
                <div className='glass-card-no-bg bg-[#35de7357] rounded-full w-fit text-[#bbffd4] px-5 py-1'>
                    طبیعی
                </div>
            </div>
        </div>
    )
}
