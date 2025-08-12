import { getTimeSeriesReport } from '@/axios/requests/reports/getTimeSeriesReport'
import AreaChart from '@/components/Modules/Charts/AreaChart'
import BarChart from '@/components/Modules/Charts/BarChart'
import { useDevicesStore } from '@/stores/useDevicesStore'
import { processTimeSeriesData } from '@/utils/processTimeSeriesData'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

export default function ChartsSection() {

    const { currentDevice } = useDevicesStore()
    const [chartData, setChartData] = useState(null)

    const { data } = useQuery({
        queryKey: ['timeSeriesReport', currentDevice],
        queryFn: () => getTimeSeriesReport(currentDevice),
        enabled: currentDevice != null,
        refetchInterval:3000
    })

    useEffect(() => {
        if (data) {
            const newData = processTimeSeriesData(data)
            setChartData(newData)
        }
    }, [data])


    return (
        <div className=' flex flex-col gap-5'>
            <div className='w-full bg-[var(--colCard)] p-2 shadow-md rounded-xl h-[clamp(300px,19dvw,600px)]'>
                {
                    chartData !== null &&
                    <AreaChart title={'آمار لحظه ای'} {...chartData} />
                }
            </div>
            <div className='w-full bg-[var(--colCard)] p-2 shadow-md rounded-xl h-[clamp(300px,19dvw,600px)]'>
                <BarChart />
            </div>
        </div>
    )
}
