'use client'

import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import React from 'react'
import { BsMoonStarsFill } from "react-icons/bs";

export default function ThemeToggle() {

    const { theme, setTheme } = useTheme()
    const pathname = usePathname()
    const { themeType } = useThemeTypeStore()
    const style = colorVariantSelector(pathname, themeType)

    const themeToggleHandler = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button className={`flex items-center justify-center w-10 h-10 border-2 ${style.textStyleA} ${style.borderStyle} rounded-full linkHover  ${style.hoverStyle}`} onClick={themeToggleHandler}>
            <BsMoonStarsFill />
        </button>
    )
}
