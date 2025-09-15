import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaChartPie } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";





export default function StaffStatus() {

    const { themeType } = useThemeTypeStore()
    const path = usePathname()
    const style = colorVariantSelector(path, themeType)

    return (

        <div className={`${style.cardStyleA} shadow-lg rounded-2xl p-5 w-full`}>
            <h2 className='font-bold'>جزئیات و وضعیت پرسنل</h2>
            <div className='text-[12px] mt-5 flex flex-col gap-5'>
                <div className='w-full flex justify-between items-center'>
                    <div>
                        <span className={`${style.textStyleC} font-bold`}>وضعیت اشغال تخت </span>: <span>{` 7 از 10 تخت`}</span>
                    </div>
                    <FaBedPulse className='text-2xl' />
                </div>
                <div className='w-full flex justify-between items-center mt-2'>
                    <div className={`${style.textStyleC} font-bold`}>درصد تخت های اشغال شده</div>
                    <FaChartPie className='text-2xl' />
                </div>
                <div className='w-full bg-[#979797] h-7 rounded-lg text-center overflow-hidden relative'>
                    <div className='absoluteCenter'>70%</div>
                    <div className={`h-full w-[70%] ${style.bgStyleB}`} />
                </div>
                <div className='w-full flex justify-between items-center mt-2'>
                    <div>
                        <span className={`${style.textStyleC} font-bold`}>وضعیت پرسنل </span>: <span>{`14/20 مشغول به کار`}</span>
                    </div>
                    <FaUserDoctor className='text-2xl' />
                </div>
            </div>
        </div>

    )
}
