'use client'
import { colorVariantSelector } from '@/data/themeVariants';
import i18n from '@/i18n';
import { usePathname } from 'next/navigation';
import React from 'react'
import { LuLanguages } from "react-icons/lu";

export default function LangToggle() {

    const pathname = usePathname()
    const style = colorVariantSelector(pathname)

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa')
    }

    return (
        <button className={`flex items-center justify-center w-10 h-10 border-2 rounded-full linkHover ${style.textStyleA} ${style.borderStyle} ${style.hoverStyle}`} onClick={toggleLang}>
            <LuLanguages />
        </button>
    )
}
