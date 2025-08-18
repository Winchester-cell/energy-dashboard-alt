import DeviceCard from '@/components/Modules/Cards/DeviceCard'
import useDevices from '@/hooks/useDevices'
import React from 'react'
import SimpleBar from 'simplebar-react'

export default function DevicesTab() {

    const { data: devicesData } = useDevices()

    return (
        <div className='w-full px-5'>
            <div className='w-full h-[75dvh] bg-[var(--colCard)] rounded-xl p-2 flex flex-col'>
                <div className='flex-grow overflow-hidden'>
                    <SimpleBar className='rounded-xl bg-[var(--colBg)] inner-shadow' style={{ height: '100%' }}>
                        <div className='w-full flex-grow grid grid-cols-5 gap-5 p-3'>
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
