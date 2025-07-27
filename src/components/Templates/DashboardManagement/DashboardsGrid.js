'use client'
import fetchDashboards from '@/axios/requests/dashboards/fetchDashboards'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'

export default function DashboardsGrid({ dashboards }) {

    const { data } = useQuery({
        queryKey: ['dashboards'],
        queryFn: fetchDashboards
    })

    return (

        <div className='grid grid-cols-2 gap-5 px-5'>
            {
                data?.results.map(dashboard => (
                    <div className='bg-[var(--colCard)] text-center rounded-xl shadow-lg'>{dashboard.name}</div>
                ))
            }
        </div>

    )
}
