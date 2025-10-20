import React from 'react'
import { FaPlus } from "react-icons/fa";

export default function Warning() {
  return (
    <div className='p-5 rounded-2xl bg-[var(--colCard)]'>

      <div className='flex items-center justify-between p-5 bg-[var(--colBg)] shadow-inner rounded-2xl'>
        <div className='flex flex-col gap-1'>
          <span className='text-xl font-semibold'>🔔 مدیریت هشدارها</span>
          <span className='text-[var(--colTextB)]'>تنظیم هشدارها و اعلان‌های سیستم</span>
        </div>
        <button className='flex gap-2 items-center py-2 px-7 rounded-full bg-blue-600 text-white'>
          <FaPlus />
          ایجاد هشدار جدید
        </button>
      </div>

      <div className='flex gap-5 mt-5'>
        <div className='w-1/2 p-5 bg-[var(--colBg)] rounded-2xl shadow-inner'>
          <h2 className='font-semibold'>
            ⚡ هشدارهای فعال
          </h2>
          <div className='bg-red-400 rounded-2xl flex items-center justify-between p-5 text-white mt-5'>
            <div>
              <div className='text-red-700 font-semibold mb-2'>ازدحام بالا</div>
              <div className='text-[12px] text-white'>ورودی اصلی - بیش از 100 نفر</div>
            </div>
            <div className='text-red-700'>رفع</div>
          </div>
          <div className='bg-yellow-400 rounded-2xl flex items-center justify-between p-5 text-white mt-5'>
            <div>
              <div className='text-yellow-700 font-semibold mb-2'>کاهش تردد</div>
              <div className='text-[12px] text-white'>فروشگاه B - کمتر از حد انتظار</div>
            </div>
            <div className='text-yellow-700'>بررسی</div>
          </div>
        </div>
        <div className='w-1/2 p-5 bg-[var(--colBg)] rounded-2xl shadow-inner'>
          <h2 className='font-semibold'>⚙️ تنظیمات هشدار</h2>

          <div className='text-[var(--colTextB)] text-[12px] flex flex-col gap-2 mt-5'>
            <div>
              حد آستانه ازدحام
            </div>
            <input className='block accent-red-600 w-full' defaultValue={70} type="range" min={50} max={200} />
            <div className='flex items-center justify-between'>
              <span>50</span>
              <span className='text-red-600 font-semibold'>100</span>
              <span>200</span>
            </div>
          </div>
          <div className='text-[var(--colTextB)] text-[12px] flex flex-col gap-2 mt-5'>
            <div>
              حد کمینه تردد
            </div>
            <input className='block accent-yellow-600 w-full' defaultValue={25} type="range" min={10} max={50} />
            <div className='flex items-center justify-between'>
              <span>10</span>
              <span className='text-yellow-600 font-semibold'>25</span>
              <span>50</span>
            </div>
          </div>

          <div className='mt-5 flex items-center gap-5'>
            <div className='flex items-center gap-2'>
              <input defaultChecked type="checkbox" className='block rounded-full' />
              <div>
                ارسال ایمیل
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <input defaultChecked type="checkbox" className='block rounded-full' />
              <div>
                اعلان موبایل
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <input defaultChecked type="checkbox" className='block rounded-full' />
              <div>
                پیامک
              </div>
            </div>
          </div>

          <div className='mt-10 flex justify-center w-full'>
            <button className='text-white bg-blue-600 rounded-2xl py-3 px-10'>
              💾 ذخیره تنظیمات
            </button>
          </div>

        </div>
      </div>


    </div>
  )
}
