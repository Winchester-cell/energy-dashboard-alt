import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React from 'react'

export default function SummaryTab() {
    return (
        <>

            <div className='glass-card rounded-3xl p-5'>

                <h2 className='font-bold text-lg'>وضعیت فعلی</h2>

                <div className='glass-card-b rounded-xl p-5 mt-5'>

                    <div className='flex items-center gap-2'>
                        <div className='w-4 h-4 glass-card-no-bg bg-[#35de7357] rounded-full' />
                        <div>وضعیت پایدار</div>
                    </div>
                    <p className='text-[#d1d1d1] mt-2'>
                        بیمار در حال بهبودی است. علائم حیاتی در محدوده طبیعی قرار دارد و پاسخ مثبتی به درمان نشان می‌دهد.
                    </p>
                </div>
            </div>

            <div className='glass-card rounded-3xl p-5 mt-5'>
                <h2 className='font-bold text-lg'>فعالیت های اخیر</h2>
                <div className='glass-card-b rounded-xl p-5 mt-5'>
                    <div className='flex items-center gap-3'>
                        <div className='w-4 h-4 glass-card-no-bg bg-[#00d0ffbb] rounded-full' />
                        <div>ویزیت پزشک</div>
                        <div className='text-[12px] ms-5 text-[#d1d1d1]'>۲ ساعت قبل</div>
                    </div>
                </div>
                <div className='glass-card-b rounded-xl p-5 mt-5'>
                    <div className='flex items-center gap-3'>
                        <div className='w-4 h-4 glass-card-no-bg bg-[#00d0ffbb] rounded-full' />
                        <div>تجویز دارو</div>
                        <div className='text-[12px] ms-5 text-[#d1d1d1]'>۴ ساعت قبل</div>
                    </div>
                </div>
                <div className='glass-card-b rounded-xl p-5 mt-5'>
                    <div className='flex items-center gap-3'>
                        <div className='w-4 h-4 glass-card-no-bg bg-[#00d0ffbb] rounded-full' />
                        <div>آزمایش خون</div>
                        <div className='text-[12px] ms-5 text-[#d1d1d1]'>۶ ساعت قبل</div>
                    </div>
                </div>
            </div>

            <div className='glass-card rounded-3xl p-5 mt-5'>

                <h2 className='font-bold text-lg'>آمار سریع</h2>

                <div className='glass-card-b rounded-xl p-5 mt-5'>
                    <div className='flex items-center justify-between'>

                        <div className='flex items-center gap-5'>
                            <div className='w-4 h-4 glass-card-no-bg bg-[#de359557] rounded-full' />
                            <div>
                                <div>ضربان قلب</div>
                                <div className='text-[12px] text-[#d1d1d1]'>bpm</div>
                            </div>
                        </div>

                        <div className='text-lg me-20'>{toPersianDigits(72)}</div>

                    </div>
                </div>
                <div className='glass-card-b rounded-xl p-5 mt-5'>
                    <div className='flex items-center justify-between'>

                        <div className='flex items-center gap-5'>
                            <div className='w-4 h-4 glass-card-no-bg bg-[#de359557] rounded-full' />
                            <div>
                                <div>فشار خون</div>
                                <div className='text-[12px] text-[#d1d1d1]'>mmHg</div>
                            </div>
                        </div>

                        <div className='text-lg me-20'>{toPersianDigits('120/80')}</div>

                    </div>
                </div>
                <div className='glass-card-b rounded-xl p-5 mt-5'>
                    <div className='flex items-center justify-between'>

                        <div className='flex items-center gap-5'>
                            <div className='w-4 h-4 glass-card-no-bg bg-[#de359557] rounded-full' />
                            <div>
                                <div>دمای بدن</div>
                                <div className='text-[12px] text-[#d1d1d1]'>°C</div>
                            </div>
                        </div>

                        <div className='text-lg me-20'>{toPersianDigits(36)}</div>

                    </div>
                </div>
                <div className='glass-card-b rounded-xl p-5 mt-5'>
                    <div className='flex items-center justify-between'>

                        <div className='flex items-center gap-5'>
                            <div className='w-4 h-4 glass-card-no-bg bg-[#de359557] rounded-full' />
                            <div>
                                <div>اکسیژن خون</div>
                                <div className='text-[12px] text-[#d1d1d1]'>%</div>
                            </div>
                        </div>

                        <div className='text-lg me-20'>{toPersianDigits(98)}</div>

                    </div>
                </div>

            </div>

        </>
    )
}
