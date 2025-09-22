import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll'
import DrugInfoTableCard from '@/components/Modules/Cards/HospitalCards/DrugInfoTableCard'
import SingleSelectInput from '@/components/Modules/Inputs/SingleSelectInput'
import AddDrugModal from '@/components/Modules/Modals/Hospital/AddDrugModal'
import { medicines } from '@/data/fakeData'
import { selectBoxGlassStyle, selectBoxStyleNoPadding } from '@/data/stylesData'
import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";


export default function DrugsManagmentTab() {

  const path = usePathname()
  const { themeType } = useThemeTypeStore()
  const style = colorVariantSelector(path, themeType)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`${style.cardStyleA} rounded-2xl p-5`}>

        <div className='w-full flex items-center justify-between'>
          <h2 className='text-2xl font-bold'>مدیریت داروهای بیمارستان</h2>
          <button onClick={() => setIsOpen(true)} className={`${style.cardStyleB} px-7 py-2 rounded-full flex items-center gap-2 shadow-lg`}><FaPlus /> افزودن</button>
        </div>

        <div className='grid grid-cols-3 mt-5 gap-5'>
          <SingleSelectInput style={themeType === 'hospital' ? selectBoxGlassStyle : selectBoxStyleNoPadding} place={'شکل دارویی'} />
          <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='قدرت ...' />
          <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='بارکد ...' />
        </div>

        <h2 className='mt-10 font-bold'>لیست داروها : </h2>

        <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
          <div className={`p-5 ${style.gradCardBlue} font-bold shadow-lg rounded-2xl gap-5 grid grid-cols-7`}>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>ردیف</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>نام دارو</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>نام ژنتیک</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>شکل دارو</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>قدرت</div>
            <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>بارکد</div>
            <div>عملیات</div>
          </div>
          {
            medicines.map((medicine, index) => {
              return (
                <AnimateOnScroll key={medicine.id} delay={index * 70}>
                  <DrugInfoTableCard index={index} {...medicine} />
                </AnimateOnScroll>
              )
            })
          }
        </div>

      </div>

      <AddDrugModal isOpen={isOpen} setIsOpen={setIsOpen} />

    </>
  )
}
