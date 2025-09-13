'use client'
import SurgeryGanttChart from '@/components/Modules/Charts/Recharts/ReGantt'
import StaffStatus from '@/components/Templates/Hospital/Surgery/StaffStatus'
import SurgeryList from '@/components/Templates/Hospital/Surgery/SurgeryList'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SurgeryPage() {

    const { themeType } = useThemeTypeStore()
    const path = usePathname()
    const style = colorVariantSelector(path, themeType)

    return (
        <div className='p-5 flex gap-5'>
            <div className='w-[400px] h-[83dvh] flex flex-col gap-5'>
                <StaffStatus />
                <SurgeryList />
            </div>
            <div className={`w-full h-[83dvh] p-5 ${style.cardStyleA} rounded-2xl`}>
                <SurgeryGanttChart />
            </div>
        </div>
    )
}
