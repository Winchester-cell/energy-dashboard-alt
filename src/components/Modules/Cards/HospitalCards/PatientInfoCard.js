import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React from 'react'

export default function PatientInfoCard(props) {
    return (
        <div className='p-5 glass-card-b rounded-2xl gap-5 grid grid-cols-8 cursor-pointer hover:py-7 transition-all duration-500'>
            <div className='border-l-2 border-[#ffffff33]'>{toPersianDigits(props.index + 1)}</div>
            <div className='border-l-2 border-[#ffffff33]'>{props.name}</div>
            <div className='border-l-2 border-[#ffffff33]'>{toPersianDigits(props.nationalId)}</div>
            <div className='border-l-2 border-[#ffffff33]'>{toPersianDigits(props.admissionId)}</div>
            <div className='border-l-2 border-[#ffffff33]'>{props.doctor}</div>
            <div className='border-l-2 border-[#ffffff33]'>{props.ward}</div>
            <div className='border-l-2 border-[#ffffff33]'>{toPersianDigits(props.admissionDate)}</div>
            <div className='border-l-2 border-[#ffffff33]'>{props.status}</div>
        </div>
    )
}
