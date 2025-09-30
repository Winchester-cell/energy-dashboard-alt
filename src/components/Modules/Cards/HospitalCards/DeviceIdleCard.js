import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function DeviceIdleCard(props) {

    const {color} = props

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)
    const { name, status, idleHours } = props

    return (
        <div style={{boxShadow:`2px 2px 4px ${color}`}} className={`w-full ${style.cardStyleA} p-5 rounded-xl flex flex-col gap-2 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]`}>
            <div>
                نام دستگاه : {name}
            </div>
            <div>
                اخرین وضعیت : {status}
            </div>
            <div>
                ساعت بیکاری : {idleHours}
            </div>

        </div>
    )
}
