import { getDeviceCount } from '@/axios/requests/devices/getDeviceCount'
import DeviceStatusCard from '@/components/Modules/Cards/DeviceStatusCard'
import DonutChart from '@/components/Modules/Charts/DonutChart'
import Loading from '@/components/Modules/Loadings/Loading'
import LocalMap from '@/components/Modules/Maps/LocalMap'
import { useDevicesStore } from '@/stores/useDevicesStore'
import { processGenderCountData } from '@/utils/formaters/processGenderCountData'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

export default function MapAndStatusCard() {

    const { currentDevice } = useDevicesStore()
    const [chartData, setChartData] = useState(null)
    const { data, isLoading } = useQuery({
        queryKey: ['deviceCount', currentDevice],
        queryFn: () => getDeviceCount(currentDevice),
        enabled: currentDevice != null,
        refetchInterval: 3000
    })

    useEffect(() => {
        if (data) {
            const newChartData = processGenderCountData(data.available_analytics?.gender?.data)
            setChartData(newChartData)
        }
    }, [data])

    return (
        <>
            <div className='flex w-full lg:h-[25dvw] lg:flex-row flex-col gap-5'>
                <DeviceStatusCard />
                <div className='lg:w-1/2 w-full rounded-xl bg-[var(--colCard)] shadow-md p-5 py-10 h-full'>
                    {
                        chartData &&
                        <DonutChart title={'تفکیک جنسیت'} {...chartData} />
                    }
                </div>
            </div>
            <LocalMap />
        </>
    )
}
