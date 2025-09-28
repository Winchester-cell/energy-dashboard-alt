'use client'
import { getPatients } from '@/axios/requests/solutions/ehr/patients/getPatients'
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'
import PatientInfoCard from '@/components/Modules/Cards/HospitalCards/PatientInfoCard'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function PatientListSection({ filteredList }) {

    const { data: patientData } = useQuery({
        queryKey: ['patients'],
        queryFn: getPatients
    })
    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <>
            <div className={`${style.cardStyleA} shadow-lg mt-5 p-5 rounded-2xl`}>
                <h2 className='flex justify-center w-full'>لیست بیماران :</h2>
                <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
                    <div className={`p-5 ${style.gradCardBlue} shadow-lg rounded-2xl gap-5 grid grid-cols-8`}>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>ردیف</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>نام بیمار</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>کدملی</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>شماره پذیرش</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>پزشک</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>بخش</div>
                        <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>تاریخ پذیرش</div>
                        <div>وضعیت</div>
                    </div>
                    {
                        patientData?.map((p, index) => {
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
