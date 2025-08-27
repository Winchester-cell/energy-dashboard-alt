import DeviceCard from '@/components/Modules/Cards/DeviceCard'
import Loading from '@/components/Modules/Loadings/Loading'
import AddDeviceModal from '@/components/Modules/Modals/AddDevice/AddDeviceModal'
import useDevices from '@/hooks/queryHooks/devices/useDevices'
import useDevicesProfiles from '@/hooks/queryHooks/devices/useDevicesProfiles'
import useOrganizations from '@/hooks/queryHooks/organization/useOrganization'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import SimpleBar from 'simplebar-react'

export default function DevicesTab() {

    const [isOpen, setIsOpen] = useState(false)
    const { data: devicesData, isFetching } = useDevices()
    const { isFetching: fetchingOrgs } = useOrganizations()
    const { isFetching: fetchingProfiles } = useDevicesProfiles()

    return (
        <div className='w-full px-5'>
            <AddDeviceModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='w-full h-[75dvh] bg-[var(--colCard)] rounded-xl p-2 flex flex-col'>
                {
                    (!fetchingOrgs && !fetchingProfiles) &&
                    <div className='py-5 px-3 flex items-center gap-2'>
                        <button onClick={() => setIsOpen(true)} className='bg-[var(--colBg)] w-[150px] py-2 px-5 rounded-full'>افزودن دستگاه</button>
                        <button className='bg-[var(--colBg)] w-[150px] py-2 px-5 rounded-full'>فلیتر</button>
                        <div className='flex items-center bg-[var(--colBg)] px-5 py-2 gap-3 rounded-full'>
                            <FaSearch />
                            <input type="text" placeholder='جستوجو ...' />
                        </div>
                    </div>
                }
                <div className='flex-grow overflow-hidden'>
                    {
                        isFetching && !devicesData &&
                        <div className='w-full h-full flex items-center justify-center'><Loading /></div>
                    }
                    <SimpleBar className='rounded-xl bg-[var(--colBg)] inner-shadow' style={{ height: '100%' }}>
                        <div className='w-full flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3'>
                            {devicesData?.results?.map(device => {
                                return <DeviceCard key={device.id} {...device} />
                            })}
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}
