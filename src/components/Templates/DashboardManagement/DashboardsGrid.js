'use client'
import { deleteDashboard } from '@/axios/requests/dashboards/deleteDashboard'
import fetchDashboards from '@/axios/requests/dashboards/fetchDashboards'
import Loading from '@/components/Modules/Loadings/Loading'
import ConfirmModal from '@/components/Modules/Modals/ConfirmModal/ConfirmModal'
import useDeleteDashboard from '@/hooks/queryHooks/dashboard/useDeleteDashboard'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";


export default function DashboardsGrid({ dashboards }) {

    const { data, isLoading } = useQuery({
        queryKey: ['dashboards'],
        queryFn: fetchDashboards
    })

    const [isOpen, setIsOpen] = useState(false)
    const [clickedID, setClickedID] = useState()
    const deleteDashboardMutation = useDeleteDashboard()

    const deleteClickHandler = (ID) => {
        setIsOpen(true)
        setClickedID(ID)
    }

    const deleteHandler = async () => {
        await deleteDashboardMutation.mutateAsync(clickedID)
        setIsOpen(false)
    }


    if (isLoading) {
        return (
            <div className='w-full h-[60dvh] flex justify-center items-center'>
                <Loading />
            </div>
        )
    }

    return (

        <>
            <div className='grid grid-cols-2 gap-5 px-5'>
                {
                    data?.results?.map(dashboard => (
                        <div key={dashboard.id} className='relative w-full h-fit'>
                            <Link href={`/dashboard-management/${dashboard.id}`} className='w-full block py-10 bg-[var(--colCard)] text-center rounded-xl shadow-lg'>
                                {dashboard.name}
                            </Link>
                            <button onClick={() => deleteClickHandler(dashboard.id)} className='absolute top-5 start-5'>
                                <IoIosClose className='w-5 h-5' />
                            </button>
                        </div>
                    ))
                }
            </div>

            <ConfirmModal onConfirm={deleteHandler} isOpen={isOpen} setIsOpen={setIsOpen} />

        </>


    )
}
