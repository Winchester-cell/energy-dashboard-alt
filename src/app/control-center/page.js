import DeviceStatusCard from '@/components/Modules/Cards/DeviceStatusCard'
import ControlCenterHeadPart from '@/components/Templates/ControlCenter/ControlCenterHeadPart'
import { devices } from '@/data/fakeData'
import React from 'react'

export default function ControlCenter() {
    return (
        <div className='p-5 '>
            <ControlCenterHeadPart />
            <div className='w-full grid grid-cols-3 gap-5 mt-5'>
                {
                    devices.map(device => {
                        return <DeviceStatusCard key={device.id} {...device} />
                    })
                }
            </div>
        </div>
    )
}
