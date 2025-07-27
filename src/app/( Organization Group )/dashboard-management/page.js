export const revalidate = 60;

import fetchDashboards from '@/axios/requests/dashboards/fetchDashboards'
import HeadPart from '@/components/Templates/DashboardManagement/HeadPart'
import React from 'react'
import DashboardsGrid from '@/components/Templates/DashboardManagement/DashboardsGrid';

export default async function DashboardManage() {

    const data = await fetchDashboards()

    return (
        <>
            <HeadPart />
            <DashboardsGrid />
        </>
    )
}
