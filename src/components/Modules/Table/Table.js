import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'
import TableRow from './TableRow'
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'

export default function Table({ headItems, rowItems = [] }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const headClass = `border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`}`

    return (
        <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
            <div className={`p-5 ${style.gradCardBlue} shadow-lg rounded-2xl gap-5 grid grid-flow-col auto-cols-fr`}>
                {headItems.map((item, idx) => (
                    <div key={idx} className={idx === headItems.length - 1 ? `` : headClass}>
                        {item.label}
                    </div>
                ))}
            </div>
            {
                rowItems.map((item, index) => {
                    return (
                        <AnimateOnScroll key={item.id} delay={index * 70}>
                            <TableRow index={index} {...item} />
                        </AnimateOnScroll>
                    )
                })
            }
        </div>
    )
}
