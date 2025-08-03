import React from 'react'

export default function NoganStatusCard({ name, img, desc }) {
    return (
        <div className='w-full h-[200px] bg-[var(--colCard)] p-5 rounded-xl shadow-lg'>
            <div className='flex items-center gap-2'>
                <img src={img} className='w-[50px] h-[50px] rounded-full' />
                <div>{name}</div>
            </div>
            <div className='line-clamp-3 textJust mt-5 text-[var(--colTextB)]'>
                {desc}
            </div>
        </div>
    )
}
