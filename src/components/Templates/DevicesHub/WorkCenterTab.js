import WorkCenterCard from '@/components/Modules/Cards/WorkCenterCard'
import Loading from '@/components/Modules/Loadings/Loading'
import AddWorkCenterModal from '@/components/Modules/Modals/AddWorkCenter/AddWorkCenterModal'
import PlatFormsHeadPart from '@/components/Modules/PlatformsHeadPart/PlatFormsHeadPart'
import useWorkCenters from '@/hooks/queryHooks/solutions/useWorkCenters'
import React, { useState } from 'react'
import SimpleBar from 'simplebar-react'

export default function WorkCenterTab() {

    const { data: workCenterData, isFetching } = useWorkCenters()
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className='w-full px-5'>
            <AddWorkCenterModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='w-full h-[75dvh] bg-[var(--colCard)] rounded-xl p-2 flex flex-col'>
                {
                    <PlatFormsHeadPart setIsOpen={setIsOpen} btnName={'افزودن مرکز'}/>
                }
                <div className='flex-grow overflow-hidden'>
                    {
                        isFetching && !workCenterData &&
                        <div className='w-full h-full flex items-center justify-center'><Loading /></div>
                    }
                    <SimpleBar className='rounded-xl bg-[var(--colBg)] inner-shadow' style={{ height: '100%' }}>
                        <div className='w-full flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3'>
                            {workCenterData?.results?.map(device => {
                                return <WorkCenterCard key={device.id} {...device} />
                            })}
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}
