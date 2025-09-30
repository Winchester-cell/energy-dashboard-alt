import PatientAlert from '@/components/Modules/Cards/HospitalCards/PatientAlert'
import { alerts } from '@/data/fakeData'
import React from 'react'
import SimpleBar from 'simplebar-react'
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import { colorVariantSelector } from '@/data/themeVariants'

export default function WarnNotifyBar() {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div className={`w-[300px] h-[83dvh] ${style.cardStyleA} shadow-lg rounded-2xl flex flex-col gap-2 p-5 overflow-hidden`}>
            <h2>هشدار های اخیر :</h2>
            <div className='h-full pb-5'>
                <SimpleBar className='h-full'>
                    <div className='flex flex-col gap-3 px-2'>
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
