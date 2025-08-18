'use client'
import React from 'react'
import ChartsSection from '@/components/Templates/PeopleCountDashboard/ChartsSection';
import MapAndStatusCard from '@/components/Templates/PeopleCountDashboard/MapAndStatusCard';
import PeopleCountSection from '@/components/Templates/PeopleCountDashboard/PeopleCountSection';
import ChartsGrids from '@/components/Templates/PeopleCountDashboard/ChartsGrids';

export default function PeopleCountDashboard() {

    return (
        <>
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
