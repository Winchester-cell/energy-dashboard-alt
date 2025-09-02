import DeviceIdleCard from '@/components/Modules/Cards/HospitalCards/DeviceIdleCard'
import SearchInput from '@/components/Modules/Inputs/SearchInput'
import { hospitalDevices } from '@/data/fakeData'
import React from 'react'
import SimpleBar from 'simplebar-react'

export default function DevicesIdleSection() {
    return (
        <>
            <h2 className='font-bold text-[20px] my-5'>مانتورینگ دستگاها و ساعات بیکاری</h2>
            <div className='bg-[var(--colCard)] rounded-xl shadow-lg w-full p-5'>
                <div>
                    <SearchInput />
                </div>
                <SimpleBar className='mt-5' style={{ height: 295 }}>
                    <div className='bg-[var(--colBg)] p-5 rounded-xl grid grid-cols-3 gap-5'>
                        {hospitalDevices.map(dev => <DeviceIdleCard key={dev.id} {...dev} />)}
                    </div>
                </SimpleBar>
            </div>
        </>
    )
}
