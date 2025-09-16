import React from 'react'

export default function DevicesControlCenterCard({ name, serial, isActive }) {
    return (
        <div className='w-full bg-[var(--colCard)] rounded-xl shadow-lg overflow-hidden'>
            <div className={`${isActive ? `bg-green-700` : `bg-red-800`} flex text-white w-full justify-center py-5`}>
                {isActive ? `فعال` : `غیرفعال`}
            </div>
            <div className='flex w-full justify-center py-5'>
                {name}
            </div>
            <div className='flex w-full justify-center pb-5 text-[var(--colTextB)] items-center gap-2'>
                <span>سریال دستگاه :</span>
                <span className='bg-[var(--colBg)] text-[var(--colTextA)] rounded-xl px-5 py-2'>{serial}</span>
            </div>

        </div>
    )
}
