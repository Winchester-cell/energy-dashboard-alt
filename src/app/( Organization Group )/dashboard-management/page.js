import HeadPart from '@/components/Templates/DashboardManagement/HeadPart'
import React from 'react'
import DashboardsGrid from '@/components/Templates/DashboardManagement/DashboardsGrid';

export default async function DashboardManage() {

    return (
        <>
            <HeadPart />
            <DashboardsGrid />
        </>
    )
}
