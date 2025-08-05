import React from 'react'

export default function DeviceStatusCard({ name, serial, isActive }) {
    return (
        <div className='w-full h-fit bg-[var(--colCard)] overflow-hidden rounded-xl'>
            <div className={`${isActive ? `bg-green-700` : `bg-red-800`} text-white w-full flex items-center justify-center h-[60px]`}>{isActive ? 'وضعیت مطلوب' : 'غیرفعال'}</div>
            <div className='w-full text-center py-5'>{`نام دستگاه : ${name}`}</div>
            <div className='w-full text-center mb-5 text-[var(--colTextB)]'>{`سریال دستگاه : ${serial}`}</div>
        </div>
    )
}
