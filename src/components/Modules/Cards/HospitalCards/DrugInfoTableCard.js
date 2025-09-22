import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



export default function DrugInfoTableCard({ index, name, generic, form, strength, barcode }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div className={`p-5 ${style.cardStyleB} shadow-lg rounded-2xl gap-5 grid grid-cols-7 transition-all duration-500`}>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} flex items-center`}>{toPersianDigits(index + 1)}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} flex items-center`}>{name}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} flex items-center`}>{generic}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} flex items-center`}>{form}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} flex items-center`}>{strength}</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} flex items-center`}>{barcode}</div>
            <div className='flex gap-5'>
                <button><MdEdit className='w-5 h-5' /></button>
                <button><MdDelete className='w-5 h-5' /></button>
            </div>
        </div >
    )
}
