'use client'
import fetchDashboard from '@/axios/requests/dashboards/fetchDashboard'
import DashboardGrid from '@/components/Templates/Organizations-DashBoard/DashboardGrid'
import DashboardHead from '@/components/Templates/Organizations-DashBoard/DashboardHead'
import useDynamicDashboardStore from '@/stores/useDynamicDashboardStore'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function DashboardEditor() {

    const params = useParams()
    const id = params.id

    const { data } = useQuery({
        queryKey: ['dashboard', id],
        queryFn: () => fetchDashboard(id),
        enabled: !!id,
    })

    const { setWidgets } = useDynamicDashboardStore()

    useEffect(() => {
        if (data) {
            setWidgets(data.widgets)
        }
    }, [data])

    return (
        <>
            <DashboardHead />
            <DashboardGrid />
        </>
    )
}
