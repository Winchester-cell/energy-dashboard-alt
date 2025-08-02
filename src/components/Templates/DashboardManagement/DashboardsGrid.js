'use client'
import fetchDashboards from '@/axios/requests/dashboards/fetchDashboards'
import Loading from '@/components/Modules/Loadings/Loading'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'

export default function DashboardsGrid({ dashboards }) {

    const { data, isLoading } = useQuery({
        queryKey: ['dashboards'],
        queryFn: fetchDashboards
    })

    if (isLoading) {
        return (
            <div className='w-full h-[60dvh] flex justify-center items-center'>
                <Loading />
            </div>
        )
    }

    return (

        <div className='grid grid-cols-2 gap-5 px-5'>
            {
                data?.results?.map(dashboard => (
                    <Link href={`/dashboard-management/${dashboard.id}`} key={dashboard.id} className='py-5 bg-[var(--colCard)] text-center rounded-xl shadow-lg'>{dashboard.name}</Link>
                ))
            }
        </div>

    )
}
