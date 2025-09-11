'use client'
import SingleSelectInput from '@/components/Modules/Inputs/SingleSelectInput'
import { selectBoxGlassStyle, selectBoxStyleNoPadding } from '@/data/stylesData'
import React from 'react'
import { patients } from '@/data/fakeData';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { usePathname } from 'next/navigation';
import { colorVariantSelector } from '@/data/themeVariants';

export default function PatientSearchSection({ setFilteredList }) {

    const options = [
        { value: 'all', label: 'تمامی بخش ها' },
        { value: 'internal', label: 'داخلی' },
        { value: 'surgery', label: 'جراحی' },
        { value: 'pediatrics', label: 'اطفال' },
        { value: 'emergency', label: 'اورژانس' },
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
    const filterByCode = (e) => {
        const newList = patients.filter(item => item.nationalId.includes(e.target.value))
        setFilteredList(newList)
    }
    const filterByAdmission = (e) => {
        const newList = patients.filter(item => String(item.admissionId).includes(e.target.value))
        setFilteredList(newList)
    }
    const filterByDoctor = (e) => {
        const newList = patients.filter(item => item.doctor.includes(e.target.value))
        setFilteredList(newList)
    }
    const filterByDate = (e) => {
        const newList = patients.filter(item => item.admissionDate.includes(e.target.value))
        setFilteredList(newList)
    }
    const filterByWard = (e) => {
        if (e.value === 'all') {
            setFilteredList(patients)
        } else {
            const newList = patients.filter(item => item.ward === e.label)
            setFilteredList(newList)
        }
    }



    return (
        <div className={`w-full ${style.cardStyleA} shadow-lg rounded-2xl p-5 grid grid-cols-3 gap-5`}>
            <input onChange={filterHanlde} className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='نام و نام خانوادگی ...' />
            <input onChange={filterByCode} className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='کد ملی ...' />
            <input onChange={filterByAdmission} className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder=' شماره پذیرش ...' />
            <input onChange={filterByDoctor} className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='پزشک معالج ...' />
            <input onChange={filterByDate}  className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder=' تاریخ پذیرش ...' />
            <SingleSelectInput onChange={(e) => filterByWard(e)} staticOption={options} place={'بخش'} style={themeType === 'hospital' ? selectBoxGlassStyle : selectBoxStyleNoPadding} />
        </div>
    )
}
