import React from 'react'

export default function FlowsTab() {
  return (
    <div className='p-5 bg-[var(--colCard)] rounded-2xl shadow-lg'>
      <div>فرآیندهای تولید (Flows)</div>
      <div>تنظیم مراحل و گردش کار تولید</div>

      <div className='flex flex-col gap-5 mt-5'>

        <div className='bg-[var(--colBg)] p-5 rounded-2xl'>
          <div>مرحله ۱: آماده‌سازی مواد اولیه</div>
          <div className='text-[var(--colTextB)]'>وزن‌کشی و آماده‌سازی کائوچو، دوده و سایر افزودنی‌ها</div>
        </div>

        <div className='bg-[var(--colBg)] p-5 rounded-2xl'>
          <div>
            مرحله ۲: مخلوط‌کردن (Mixing)
          </div>
          <div className='text-[var(--colTextB)]'>
            ترکیب مواد در میکسر داخلی با دما و زمان کنترل شده
          </div>
        </div>

        <div className='bg-[var(--colBg)] p-5 rounded-2xl'>
          <div>
            مرحله ۳: کالندرینگ
          </div>
          <div className='text-[var(--colTextB)]'>
            تشکیل ورق‌های کائوچویی با ضخامت مشخص
          </div>
        </div>

        <div className='bg-[var(--colBg)] p-5 rounded-2xl'>
          <div>
            مرحله ۴: ساخت و مونتاژ
          </div>
          <div className='text-[var(--colTextB)]'>
            قالب‌گیری و تشکیل ساختار نهایی تایر
          </div>
        </div>

        <div className='bg-[var(--colBg)] p-5 rounded-2xl'>
          <div>
            مرحله ۵: ولکانیزاسیون
          </div>
          <div className='text-[var(--colTextB)]'>
            پخت تایر در دما و فشار بالا برای سخت‌شدن نهایی
          </div>
        </div>

      </div>


    </div>
  )
}
