'use client'
import DevicesProfileCard from '@/components/Modules/Cards/DevicesProfileCard'
import Loading from '@/components/Modules/Loadings/Loading'
import AddDevicesProfilesModal from '@/components/Modules/Modals/AddDevicesProfile/AddDevicesProfilesModal'
import useDevicesProfiles from '@/hooks/queryHooks/devices/useDevicesProfiles'
import useMetrics from '@/hooks/queryHooks/devices/useMetrics'
import { useDeviceMetricStore } from '@/stores/useDeviceMetricStore'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import SimpleBar from 'simplebar-react'

export default function DevicesProfiles() {

    const { data: profilesData, isFetching } = useDevicesProfiles()
    const { setDevicesMetrics, devicesMetrics } = useDeviceMetricStore()
    const { data: metricsData } = useMetrics()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (metricsData) {
            setDevicesMetrics(metricsData.results)
        }
    }, [metricsData, devicesMetrics])

    return (
        <div className='w-full p-5'>
            <AddDevicesProfilesModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='w-full flex-grow bg-[var(--colCard)] h-[83dvh] rounded-xl shadow-lg flex flex-col p-2'>
                {
                    (profilesData && metricsData) &&
                    <div className='py-5 px-3 flex items-center gap-2'>
                        <button onClick={() => setIsOpen(true)} className='bg-[var(--colBg)] w-[150px] py-2 px-5 rounded-full'>افزودن پروفایل</button>
                        <button className='bg-[var(--colBg)] w-[150px] py-2 px-5 rounded-full'>فلیتر</button>
                        <div className='flex items-center bg-[var(--colBg)] px-5 py-2 gap-3 rounded-full'>
                            <FaSearch />
                            <input type="text" placeholder='جستوجو ...' />
                        </div>
                    </div>
                }
                <div className='flex-grow overflow-hidden'>
                    {
                        (!profilesData || !metricsData) &&
                        <div className='w-full h-full flex items-center justify-center'><Loading /></div>
                    }
                    {
                        (profilesData && metricsData) &&
                        <SimpleBar className='rounded-xl bg-[var(--colBg)] inner-shadow' style={{ height: '100%' }}>
                            <div className='w-full flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3'>
                                {profilesData?.results?.map(profile => {
                                    return <DevicesProfileCard key={profile.id} {...profile} />
                                })}
                            </div>
                        </SimpleBar>
                    }
                </div>
            </div>
        </div>
    )
}
