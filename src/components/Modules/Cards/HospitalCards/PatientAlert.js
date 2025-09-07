import React from 'react'

export default function PatientAlert({ message, patientName, bed, minutesAgo }) {
    return (
        <div className={`cursor-pointer w-full glass-card-b text-[12px] p-3 rounded-xl flex justify-between items-center`} >
            <div className='flex flex-col gap-2'>
                <div className='font-bold'>{message}</div>
                <div className='text-[10px]'>{patientName}</div>
                <div className='font-bold text-[10px]'>{bed}</div>
                <div className='font-bold text-[10px]'>{minutesAgo} دقیقه پیش</div>
            </div>
        </div>
    )
}
