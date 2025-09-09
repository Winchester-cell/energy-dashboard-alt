import React from 'react'

export default function MedPhotosTab() {
  return (
    <div className='glass-card rounded-3xl p-5'>

      <h2 className='font-bold text-lg'>تصاویر پزشکی</h2>

      <div className='grid grid-cols-2 place-items-center mt-5 gap-5'>

        <div className='w-full h-[550px] glass-card rounded-xl overflow-hidden'>
          <img src="/images/1.jpg" className='w-full h-[90%] object-cover' />
          <div className='mt-3 px-5 flex items-center justify-between'>
            <h2>MRI مغز</h2>
            <div className='bg-[#aabbcccf] text-[#4356b9] px-5 py-1 rounded-xl'>MRI</div>
          </div>
        </div>

        <div className='w-full h-[550px] glass-card rounded-xl overflow-hidden'>
          <img src="/images/2.jpg" className='w-full h-[90%] object-cover' />
          <div className='mt-3 px-5 flex items-center justify-between'>
            <h2>سی‌تی اسکن قلب</h2>
            <div className='bg-[#aabbcccf] text-[#4356b9] px-5 py-1 rounded-xl'>CT</div>
          </div>
        </div>

        <div className='w-full h-[550px] glass-card rounded-xl overflow-hidden'>
          <img src="/images/3.jpg" className='w-full h-[90%] object-cover' />
          <div className='mt-3 px-5 flex items-center justify-between'>
            <h2>رادیوگرافی قفسه سینه</h2>
            <div className='bg-[#aabbcccf] text-[#4356b9] px-5 py-1 rounded-xl'>X-Ray</div>
          </div>
        </div>

        <div className='w-full h-[550px] glass-card rounded-xl overflow-hidden'>
          <img src="/images/2.jpg" className='w-full h-[90%] object-cover' />
          <div className='mt-3 px-5 flex items-center justify-between'>
            <h2>اکوکاردیوگرافی</h2>
            <div className='bg-[#aabbcccf] text-[#4356b9] px-5 py-1 rounded-xl'>X-Ray</div>
          </div>
        </div>

      </div>

    </div>
  )
}
