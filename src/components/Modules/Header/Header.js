'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import Clock from '../Clock/Clock'
import CetecLogo from "@/asset/CetecLogo.svg"
import { usePathname } from 'next/navigation'
import { colorVariantSelector } from '@/data/themeVariants'
export default function Header() {

    const { t } = useTranslation()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname)

    return (
        <div className={`w-full h-12 ${style.cardStyleA} ${style.textStyleA} shadow-md rounded-full flex justify-between items-center px-5 md:px-10 lg:px-16 py-7`}>

    
            <CetecLogo className={`scale-75`} />

            <div>
                <h1 className="text-center font-bold text-[clamp(10px,1.3dvw,24px)]">{t('headerTitle')}</h1>
            </div>

            <div>
                <Clock />
            </div>

        </div>
    )
}