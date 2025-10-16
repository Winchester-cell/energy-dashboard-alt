import React from 'react'

export default function ProgressTab() {

    return (
        <div className='p-5 bg-[var(--colCard)] rounded-2xl'>

            <div className='rounded-2xl bg-[var(--colBg)] p-5'>
                <h2 className='text-2xl font-bold'>📊 پیشرفت تولید</h2>
                <div className='font-semibold flex justify-between items-center mt-5 px-10'>
                    <div>۳,۵۰۰ / ۵,۰۰۰ حلقه تولید شده</div>
                    <div className='text-emerald-500'>۷۰%</div>
                </div>
                <div className='px-8 mt-5'>
                    <div className='h-[10px] rounded-full bg-gray-500 overflow-hidden'>
                        <div className='w-[70%] h-full bg-emerald-500' />
                    </div>
                </div>
                <div className='flex justify-between items-center mt-5 px-10'>
                    <div>✅ وضعیت پروژه : جلوتر از برنامه</div>
                    <div>باقیمانده: ۱,۵۰۰ حلقه</div>
                </div>
                <div style={{ boxShadow: `2px 2px 4px #10b981` }} className='bg-[var(--colCard)] px-5 py-7 rounded-2xl shadow-lg mt-5 text-emerald-500'>
                    عملکرد عالی: تولید ۲۰% جلوتر از برنامه زمان‌بندی
                </div>
            </div>

        </div>
    )

}
