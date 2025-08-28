'use client'
import MetricInfoCard from '@/components/Modules/Cards/MetricInfoCard'
import Loading from '@/components/Modules/Loadings/Loading'
import AddMetricsModal from '@/components/Modules/Modals/AddMetrics/AddMetricsModal'
import PlatFormsHeadPart from '@/components/Modules/PlatformsHeadPart/PlatFormsHeadPart'
import { useToast } from '@/context/ToastContext'
import useMetrics from '@/hooks/queryHooks/devices/useMetrics'
import React, { useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import SimpleBar from 'simplebar-react'

export default function MetricsPage() {

    const scrollableNodeRef = React.createRef()
    const { data: metricsData } = useMetrics()
    const [isOpen, setIsOpen] = useState(false)
    const { showToast } = useToast()
    const handleScroll = (e) => {
        const target = e.target
        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            showToast('پایان اسکرول')
        }
    }


    return (
        <div className='w-full p-5'>
            <AddMetricsModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='w-full flex-grow bg-[var(--colCard)] h-[83dvh] rounded-xl shadow-lg flex flex-col p-2'>
                <PlatFormsHeadPart setIsOpen={setIsOpen} btnName={'افزودن متریک'} />
                <div className='flex-grow overflow-hidden'>
                    {
                        !metricsData &&
                        <div className='w-full h-full flex items-center justify-center'><Loading /></div>
                    }
                    {
                        metricsData &&
                        <SimpleBar scrollableNodeProps={{ ref: scrollableNodeRef, onScroll: (e) => handleScroll(e) }} className='rounded-xl bg-[var(--colBg)] inner-shadow' style={{ height: '100%' }}>
                            <div className='w-full flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3'>
                                {metricsData?.results?.map(metric => {
                                    return <MetricInfoCard key={metric.id} {...metric} />
                                })}
                            </div>
                        </SimpleBar>
                    }
                </div>
            </div>
        </div>
    )
}
