import React from 'react'

export default function SilkWormCard({ width, name, img, desc }) {
    return (
        <div style={{ width: width }} className='h-[300px] bg-[var(--colCard)] shadow-lg rounded-3xl flex items-center p-5'>
            <div className='w-1/2'>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <div className='text-[var(--colTextB)] line-clamp-4 textJust mt-5'>{desc}</div>
            </div>

            <div className='w-1/2 flex items-center justify-center'>

                <img src={img} className='w-[200px] h-[200px] rounded-full' />

            </div>

        </div>
    )
}
