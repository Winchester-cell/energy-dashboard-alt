'use client'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HospitalLayout({ children }) {
    const { theme } = useTheme()
    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div className={`${style.textStyleA}`}>
            {
                themeType === 'hospital' &&
                <div className='w-screen h-screen fixed top-0 left-0 -z-40'>
                    <div className='relative h-full w-full'>
                        <img className='absolute top-0 w-full h-full object-cover z-10' src="/images/hosBG.jpg" />
                        {
                            theme === 'dark' ? (
                                <div className='absolute top-0 w-full h-full z-20 bg-[#00000097]'></div>
                            ) : (
                                <div className='absolute top-0 w-full h-full z-20 bg-[#0000002c]'></div>
                            )
                        }
                    </div>
                </div>
            }
            {children}
        </div>
    )
}
