'use client'
import SingleSelectInput from '@/components/Modules/Inputs/SingleSelectInput'
import { selectBoxGlassStyle } from '@/data/stylesData'
import { FaSearchengin } from "react-icons/fa";

import React from 'react'

export default function PatientSearchSection() {

    const options = [
        { value: 'all', label: 'تمامی بخش ها' },
        { value: 'internal', label: 'داخلی' },
        { value: 'surgery', label: 'جراحی' },
        { value: 'pediatrics', label: 'اطفال' },
        { value: 'cardiology', label: 'قلب و عروق' },
        { value: 'obgyn', label: 'زنان و زایمان' },
        { value: 'orthopedics', label: 'ارتوپدی' },
    ]

    return (
        <div className='w-full glass-card rounded-2xl p-5 grid grid-cols-3 gap-5'>
            <input className='block placeholder:text-[#e3e3e3] glass-card-b ps-5 py-2 rounded-full' type="text" placeholder='نام و نام خانوادگی ...' />
            <input className='block placeholder:text-[#e3e3e3] glass-card-b ps-5 py-2 rounded-full' type="text" placeholder='کد ملی ...' />
            <input className='block placeholder:text-[#e3e3e3] glass-card-b ps-5 py-2 rounded-full' type="text" placeholder=' شماره پذیرش ...' />
            <input className='block placeholder:text-[#e3e3e3] glass-card-b ps-5 py-2 rounded-full' type="text" placeholder='پزشک معالج ...' />
            <input className='block placeholder:text-[#e3e3e3] glass-card-b ps-5 py-2 rounded-full' type="text" placeholder=' تاریخ پذیرش ...' />
            <SingleSelectInput staticOption={options} place={'بخش'} style={selectBoxGlassStyle} />
            <div className='w-full col-span-3 flex justify-center'>
                <button className='glass-card-b py-2 px-10 rounded-full flex items-center gap-1'> <FaSearchengin className='text-xl'/> جستوجو </button>
            </div>
        </div>
    )
}
