import PatientAlert from '@/components/Modules/Cards/HospitalCards/PatientAlert'
import { alerts } from '@/data/fakeData'
import React from 'react'
import SimpleBar from 'simplebar-react'
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'

export default function WarnNotifyBar() {
    return (
        <div className='w-[300px] h-[83dvh] glass-card rounded-2xl flex flex-col gap-2 p-5 overflow-hidden'>
            <h2>هشدار های اخیر :</h2>
            <div className='h-full pb-5'>
                <SimpleBar className='h-full'>
                    <div className='flex flex-col gap-3'>
                        {alerts.map((a, index) => (
                            <AnimateOnScroll key={index} delay={index * 100}>
                                <PatientAlert {...a} />
                            </AnimateOnScroll>
                        ))}
                    </div>
                </SimpleBar>
            </div>
        </div>
    )
}
