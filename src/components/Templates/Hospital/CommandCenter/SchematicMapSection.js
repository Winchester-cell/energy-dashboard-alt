'use client'
import WardCard from '@/components/Modules/Cards/HospitalCards/WardCard'
import SearchInput from '@/components/Modules/Inputs/SearchInput'
import { hospitalSections } from '@/data/fakeData'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'
import SimpleBar from 'simplebar-react'

export default function SchematicMapSection() {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <>
            <h2 className='font-bold text-[20px] my-5'>ظرفیت و جریان بیمار</h2>
            <div className={`${style.cardStyleA} rounded-3xl shadow-lg w-full p-5`}>
                <div>
                    <SearchInput />
                </div>
                <div className={`rounded-3xl overflow-hidden ${style.cardStyleD} mt-5`}>
                    <SimpleBar className='mt-5' style={{ height: 295 }}>
                        <div className='p-5 grid grid-cols-3 gap-5'>
                            {hospitalSections.map(sec => <WardCard key={sec.id} {...sec} />)}
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </>
    )
}
