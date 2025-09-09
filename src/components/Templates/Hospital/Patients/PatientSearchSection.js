'use client'
import SingleSelectInput from '@/components/Modules/Inputs/SingleSelectInput'
import { selectBoxGlassStyle, selectBoxStyleNoPadding } from '@/data/stylesData'
import { FaSearchengin } from "react-icons/fa";

import React from 'react'
import { patients } from '@/data/fakeData';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { usePathname } from 'next/navigation';
import { colorVariantSelector } from '@/data/themeVariants';

export default function PatientSearchSection({ filteredList, setFilteredList }) {

    const options = [
        { value: 'all', label: 'تمامی بخش ها' },
        { value: 'internal', label: 'داخلی' },
        { value: 'surgery', label: 'جراحی' },
        { value: 'pediatrics', label: 'اطفال' },
        { value: 'cardiology', label: 'قلب و عروق' },
        { value: 'obgyn', label: 'زنان و زایمان' },
        { value: 'orthopedics', label: 'ارتوپدی' },
    ]

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const filterHanlde = (e) => {
        const newList = patients.filter(item => item.name.includes(e.target.value))
        setFilteredList(newList)
    }

    return (
        <div className={`w-full ${style.cardStyleA} shadow-lg rounded-2xl p-5 grid grid-cols-3 gap-5`}>
            <input onChange={filterHanlde} className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='نام و نام خانوادگی ...' />
            <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='کد ملی ...' />
            <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder=' شماره پذیرش ...' />
            <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='پزشک معالج ...' />
            <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder=' تاریخ پذیرش ...' />
            <SingleSelectInput staticOption={options} place={'بخش'} style={themeType === 'hospital' ? selectBoxGlassStyle : selectBoxStyleNoPadding} />
            {/* <div className='w-full col-span-3 flex justify-center'>
                <button className={`${style.cardStyleB} py-2 px-10 rounded-full flex items-center gap-1`}> <FaSearchengin className='text-xl' /> جستوجو </button>
            </div> */}
        </div>
    )
}
