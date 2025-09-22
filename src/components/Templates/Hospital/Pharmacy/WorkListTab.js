import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'
import WorkListCard from '@/components/Modules/Cards/HospitalCards/WorkListCard'
import SingleSelectInput from '@/components/Modules/Inputs/SingleSelectInput'
import WorkListModal from '@/components/Modules/Modals/Hospital/WorkListModal'
import { drugWorkList } from '@/data/fakeData'
import { selectBoxGlassStyle, selectBoxStyleNoPadding } from '@/data/stylesData'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function WorkListTab() {

    const path = usePathname()
    const { themeType } = useThemeTypeStore()
    const style = colorVariantSelector(path, themeType)

    const [selectedWork, setSelectedWork] = useState(drugWorkList[0])
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={`w-full ${style.cardStyleA} shadow-lg rounded-2xl p-5 grid grid-cols-3 gap-5 mt-5`}>
                <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='نام بیمار ...' />
                <SingleSelectInput staticOption={[]} place={'بخش ...'} style={themeType === 'hospital' ? selectBoxGlassStyle : selectBoxStyleNoPadding} />
                <SingleSelectInput staticOption={[]} place={'وضعیت ...'} style={themeType === 'hospital' ? selectBoxGlassStyle : selectBoxStyleNoPadding} />
            </div>

            <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
                <div className={`p-5 ${style.gradCardBlue} font-bold shadow-lg rounded-2xl gap-5 grid grid-cols-6`}>
                    <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>بیمار</div>
                    <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>بخش</div>
                    <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>دارو</div>
                    <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>پزشک تجویز کننده</div>
                    <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>زمان ثبت</div>
                    <div>وضعیت</div>
                </div>
                {
                    drugWorkList.map((work, index) => {
                        return (
                            <AnimateOnScroll key={work.id} delay={index * 70}>
                                <WorkListCard setIsOpen={setIsOpen} setSelectedWork={setSelectedWork} index={index} {...work} />
                            </AnimateOnScroll>
                        )
                    })
                }
            </div>

            <WorkListModal selectedWork={selectedWork} isOpen={isOpen} setIsOpen={setIsOpen} />

        </>
    )
}
