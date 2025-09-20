import { drugWorkList } from '@/data/fakeData'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function WorkListCard(props) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const setWorkHandler = (workID) => {
        const targetItem = drugWorkList.find( w => w.id === workID )
        props.setSelectedWork(targetItem)
        props.setIsOpen(true)
    }

    return (
        <div onClick={()=> setWorkHandler(props.id)} className={`p-5 ${style.cardStyleB} shadow-lg rounded-2xl gap-5 grid grid-cols-6 transition-all duration-500 `}>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>
                {props.name}
                <div className={`${style.textStyleB} mt-2`}>{props.age} ساله</div>
            </div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} flex items-center`}>{props.ward}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`}`}>
                {props.drug.name}
                <div className={`${style.textStyleB} mt-2`}>{props.drug.dosage} , {props.drug.type}</div>
            </div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} flex items-center`}>{props.doctor}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} flex items-center`}>{props.registeredAt}</div>

            <div className='flex items-center'>{props.status}</div>
        </div >
    )
}
