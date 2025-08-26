'use client'
import MetricInfoCard from '@/components/Modules/Cards/MetricInfoCard'
import Loading from '@/components/Modules/Loadings/Loading'
import AddMetricsModal from '@/components/Modules/Modals/AddMetrics/AddMetricsModal'
import { useToast } from '@/context/ToastContext'
import useMetrics from '@/hooks/useMetrics'
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
                <div className='py-5 px-3 flex items-center gap-2'>
                    <button onClick={() => setIsOpen(true)} className='bg-[var(--colBg)] w-[150px] py-2 px-5 rounded-full'>افزودن متریک</button>
                    <button className='bg-[var(--colBg)] w-[150px] py-2 px-5 rounded-full'>فلیتر</button>
                    <div className='flex items-center bg-[var(--colBg)] px-5 py-2 gap-3 rounded-full'>
                        <FaSearch />
                        <input type="text" placeholder='جستوجو ...' />
                    </div>
                </div>
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
