import React from 'react'
import ModalBase from '../ModalBase'
import { usePathname } from 'next/navigation'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { colorVariantSelector } from '@/data/themeVariants'
import SingleSelectInput from '../../Inputs/SingleSelectInput'
import { selectBoxGlassStyle, selectBoxStyleNoPadding } from '@/data/stylesData'

export default function AddDrugModal({ isOpen, setIsOpen }) {

    const path = usePathname()
    const { themeType } = useThemeTypeStore()
    const style = colorVariantSelector(path, themeType)

    return (
        <ModalBase isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={`w-[65%] ${style.cardStyleA} p-5 rounded-2xl`}>
                <h2 className='text-2xl'>افزودن داروی جدید</h2>
                <form className='grid grid-cols-2 mt-5 gap-5'>
                    <input type="text" placeholder='نام دارو ...' className={`${style.cardStyleB} rounded-full px-5 py-2`} />
                    <input type="text" placeholder='نام ژنتیک ...' className={`${style.cardStyleB} rounded-full px-5 py-2`} />
                    <input type="text" placeholder='قدرت ...' className={`${style.cardStyleB} rounded-full px-5 py-2`} />
                    <SingleSelectInput menuPortalTarget={null} menuPosition={null} style={themeType === 'hospital' ? selectBoxGlassStyle : selectBoxStyleNoPadding} place={'شکل دارویی'} />
                    <input type="text" placeholder='بارکد ...' className={`${style.cardStyleB} rounded-full px-5 py-2 col-span-2`} />
                    <div className='col-span-2 flex justify-center'>
                    <button className='col-span-2 w-fit bg-green-600 text-white py-2 px-5 rounded-full'>ثبت دارو</button>
                    </div>
                </form>
            </div>
        </ModalBase>
    )
}
