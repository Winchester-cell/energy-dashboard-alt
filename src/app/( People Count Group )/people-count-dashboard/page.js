'use client'
import React from 'react'
import ChartsSection from '@/components/Templates/PeopleCountDashboard/ChartsSection';
import MapAndStatusCard from '@/components/Templates/PeopleCountDashboard/MapAndStatusCard';
import PeopleCountSection from '@/components/Templates/PeopleCountDashboard/PeopleCountSection';
import ChartsGrids from '@/components/Templates/PeopleCountDashboard/ChartsGrids';

export default function PeopleCountDashboard() {

    return (
        <>
            <div className='px-5 pt-5'>
                <div className='w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl'>
                    <h2 className='text-2xl font-bold'>داشبورد شمارش افراد</h2>
                    <p className='text-[var(--colTextB)] mt-3'>مدیریت و نظارت بر تردد افراد در نواحی مختلف مجموعه</p>
                </div>
            </div>
            <div className={`w-full flex flex-col lg:flex-row h-auto p-5 gap-5`}>
                <div className="w-full flex flex-col gap-5 lg:w-1/2">
                    <PeopleCountSection />
                    <ChartsSection />
                </div>
                <div className={`w-full flex flex-col gap-5 lg:w-1/2 h-auto`}>
                    <MapAndStatusCard />
                </div>
            </div>
            <ChartsGrids />
        </>
    )
}
