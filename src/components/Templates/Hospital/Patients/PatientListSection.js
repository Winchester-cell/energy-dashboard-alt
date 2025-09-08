'use client'
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'
import { patients } from '@/data/fakeData'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React from 'react'


export default function PatientListSection({ filteredList, setFilteredList }) {

    return (
        <>
            <div className='glass-card mt-5 p-5 rounded-2xl'>
                <h2 className='flex justify-center w-full'>لیست بیماران :</h2>
                <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
                    <div className='p-5 glass-card-b rounded-2xl gap-5 grid grid-cols-8'>
                        <div className='border-l-2 border-[#ffffff33]'>ردیف</div>
                        <div className='border-l-2 border-[#ffffff33]'>نام بیمار</div>
                        <div className='border-l-2 border-[#ffffff33]'>کدملی</div>
                        <div className='border-l-2 border-[#ffffff33]'>شماره پذیرش</div>
                        <div className='border-l-2 border-[#ffffff33]'>پزشک</div>
                        <div className='border-l-2 border-[#ffffff33]'>بخش</div>
                        <div className='border-l-2 border-[#ffffff33]'>تاریخ پذیرش</div>
                        <div className='border-l-2 border-[#ffffff33]'>وضعیت</div>
                    </div>
                    {
                        filteredList.map((p, index) => {
                            return (
                                <AnimateOnScroll delay={index * 70}>
                                    <div className='p-5 glass-card-b rounded-2xl gap-5 grid grid-cols-8 cursor-pointer hover:py-7 transition-all duration-500'>
                                        <div className='border-l-2 border-[#ffffff33]'>{toPersianDigits(index + 1)}</div>
                                        <div className='border-l-2 border-[#ffffff33]'>{p.name}</div>
                                        <div className='border-l-2 border-[#ffffff33]'>{toPersianDigits(p.nationalId)}</div>
                                        <div className='border-l-2 border-[#ffffff33]'>{toPersianDigits(p.admissionId)}</div>
                                        <div className='border-l-2 border-[#ffffff33]'>{p.doctor}</div>
                                        <div className='border-l-2 border-[#ffffff33]'>{p.ward}</div>
                                        <div className='border-l-2 border-[#ffffff33]'>{toPersianDigits(p.admissionDate)}</div>
                                        <div className='border-l-2 border-[#ffffff33]'>{p.status}</div>
                                    </div>
                                </AnimateOnScroll>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
