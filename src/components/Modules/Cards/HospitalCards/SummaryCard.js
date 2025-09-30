import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import '@/styles/cardStyle.css'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits';
import { usePathname } from 'next/navigation';
import React from 'react'
import DonutChart from '../../Charts/DonutChart';

export default function SummryCard({ color , icon, cardTitle, metricA, valA, metricB, valB, extraText, extraVal }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    // return (
    //     <div className={`w-full ${style.cardStyleA} p-10 flex flex-col gap-5 rounded-3xl shadow-lg`}>

    //         <div className='w-full flex items-center justify-between'>
    //             {icon}
    //             <div>
    //                 <div className='text-[14px]'>{metricA}</div>
    //                 <div className='text-[12px] text-[var(--colTextB)]'>{valA}</div>
    //             </div>
    //         </div>

    //         <div className='w-full flex items-center justify-between'>

    //             <div>

    //                 <div className='text-[20px] font-bold'>
    //                     {cardTitle}
    //                 </div>

    //                 <div className='text-[20px] font-bold'>
    //                     {toPersianDigits(valB)} <span className='text-[14px] text-[var(--colTextB)]'>{metricB}</span>
    //                 </div>

    //             </div>

    //             <div className='w-[100px] h-[100px]'>
    //                 <DonutChart legendShow={false}  data={[40 , 60]} labels={['' , '']} />
    //             </div>

    //         </div>

    //         <div className='w-full flex items-center justify-between'>
    //             <div>{extraText}</div>
    //             <div>{extraVal}</div>
    //         </div>
    //     </div>
    // )

    return (
        <div style={{boxShadow:`2px 2px 4px ${color}`}} className={`w-full ${style.cardStyleA} p-10 flex gap-5 rounded-3xl shadow-lg items-center transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]`}>

            <div className='flex flex-col gap-5'>
                <div style={{color:color ,  textShadow:`2px 2px 4px ${color}`}} className='text-xl font-bold flex gap-5 items-center'>{icon} {cardTitle}</div>
                <div className='text-[20px] font-bold'>
                    {toPersianDigits(valB)} <span className='text-[14px] text-[var(--colTextB)]'>{metricB}</span>
                </div>
                <div className='flex gap-2'>
                    <div style={{color:color ,  textShadow:`2px 2px 4px ${color}`}} >{extraText}</div>
                    <div style={{color:color ,  textShadow:`2px 2px 4px ${color}`}} >{extraVal}</div>
                </div>
            </div>

            <div className='w-[200px] h-[200px] flex-grow'>
                <DonutChart legendShow={false} data={[40, 60]} labels={['', '']} />
            </div>
        </div>
    )
}
