import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function TabSelector({ selectedTab, setSelectedTab , tabs }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const selectedClass = `${style.cardStyleA}  rounded-t-3xl`

    return (
        <div className={`flex w-full ${themeType === 'hospital' && pathname.startsWith('/hospital') ? `glass-card` : ``} pt-5 rounded-t-xl items-center mt-5 px-16 gap-5`}>
            {
                tabs.map(tab => {
                    return <div key={tab.id} onClick={() => setSelectedTab(tab)} className={`text-[6px] lg:text-[14px] w-full cursor-pointer flex justify-center py-5 ${selectedTab.selectKey === tab.selectKey ? selectedClass : ``}`}>{tab.tabName}</div>
                })
            }
        </div>
    )
}
