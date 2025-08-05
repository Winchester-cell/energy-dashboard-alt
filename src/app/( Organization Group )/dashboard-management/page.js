import DashboardManagementHeadPart from '@/components/Templates/DashboardManagement/DashboardManagementHeadPart';
import React from 'react'
import DashboardsGrid from '@/components/Templates/DashboardManagement/DashboardsGrid';

export default async function DashboardManage() {

    return (
        <>
            <DashboardManagementHeadPart />
            <DashboardsGrid />
        </>
    )
}
