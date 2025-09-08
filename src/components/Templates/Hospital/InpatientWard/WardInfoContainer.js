import { wardInfo } from '@/data/fakeData'
import React from 'react'
import WardRoomInfoCard from './WardRoomInfoCard'
import SimpleBar from 'simplebar-react'

export default function WardInfoContainer() {
    return (
        <div className='w-full h-[83dvh] glass-card rounded-2xl p-5 overflow-hidden'>
            <div className='w-full flex items-center justify-between px-5'>
                <h2 className='text-xl font-bold'>بخش {wardInfo.name}</h2>
                <div className='p-3 flex items-center gap-5 glass-card rounded-full overflow-hidden'>
                    <div className='flex items-center gap-2'>
                        <div className='w-4 h-4 glass-card-no-bg bg-[#35de7357] rounded-full' />
                        <div>نرمال</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-4 h-4 glass-card-no-bg bg-[#b8292961] rounded-full' />
                        <div>بحرانی</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-4 h-4 glass-card-no-bg bg-[#ffffff1f] rounded-full' />
                        <div>ترخیص شده</div>
                    </div>
                </div>
            </div>
            <div className='pb-10 pt-5 h-full'>
                <SimpleBar className='h-full'>
                    <div className='flex flex-col gap-5'>
                        {wardInfo.rooms.map((room, index) => (
                            <WardRoomInfoCard key={index} {...room} />
                        ))}
                    </div>
                </SimpleBar>
            </div>
        </div>
    )
}
