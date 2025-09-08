'use client'
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'
import PatientInfoCard from '@/components/Modules/Cards/HospitalCards/PatientInfoCard'
import Link from 'next/link'
import React from 'react'


export default function PatientListSection({ filteredList }) {

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
                                <AnimateOnScroll key={p.id} delay={index * 70}>
                                    <Link className='block' href={`/hospital/patients/${p.id}`}>
                                        <PatientInfoCard index={index} {...p} />
                                    </Link>
                                </AnimateOnScroll>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
