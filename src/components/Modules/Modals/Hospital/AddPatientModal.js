import React from 'react'
import ModalBase from '../ModalBase'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import { colorVariantSelector } from '@/data/themeVariants'

export default function AddPatientModal({ isOpen, setIsOpen }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <ModalBase isOpen={isOpen} setIsOpen={setIsOpen}>
            <form className={`grid grid-cols-3 gap-5 ${style.cardStyleA} p-5 mb-5 rounded-xl`}>
                <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='نام و نام خانوادگی ...' />
                <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='کد ملی ...' />
                <div>
                    <button className={`py-2 px-5 w-[100px] ${style.cardStyleB} rounded-full`}>ثبت بیمار</button>
                </div>
            </form>
        </ModalBase>
    )
}
