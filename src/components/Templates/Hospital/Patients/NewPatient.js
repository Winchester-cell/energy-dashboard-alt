import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function NewPatient() {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const [isFormShowing, setIsFormShowing] = useState(false)

    return (
        <div className='w-full'>
            <button onClick={() => setIsFormShowing(true)} className={`${style.cardStyleA} mb-5 rounded-full py-2 px-5`}>پذیرش بیمار جدید</button>
            {
                isFormShowing &&
                <form className={`grid grid-cols-3 gap-5 ${style.cardStyleA} p-5 mb-5 rounded-xl`}>
                    <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='نام و نام خانوادگی ...' />
                    <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='کد ملی ...' />
                    <div>
                        <button className={`py-2 px-5 w-[100px] ${style.cardStyleB} rounded-full`}>ثبت بیمار</button>
                        <button onClick={() => setIsFormShowing(false)} className={`py-2 px-5 w-[100px] ${style.cardStyleB} rounded-full ms-2`}>لغو</button>
                    </div>
                </form>
            }
        </div>
    )
}
