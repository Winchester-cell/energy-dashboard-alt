import { colorVariantSelector } from '@/data/themeVariants'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits';
import { usePathname } from 'next/navigation'
import React from 'react'
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaBoltLightning } from "react-icons/fa6";
import { CiPill } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll';
import { interactions } from '@/data/fakeData';
import IntractionCard from '@/components/Modules/Cards/HospitalCards/IntractionCard';
import SingleSelectInput from '@/components/Modules/Inputs/SingleSelectInput';
import { selectBoxGlassStyle, selectBoxStyleNoPadding } from '@/data/stylesData';




export default function PharmcayDashboardTab() {

  const path = usePathname()
  const { themeType } = useThemeTypeStore()
  const style = colorVariantSelector(path, themeType)

  return (
    <>
      <div className='grid grid-cols-2 gap-5'>
        <div className={`gradCardBlue shadow-lg rounded-2xl py-5 px-10 flex justify-between items-center text-white`}>

          <div className='flex items-center gap-2'>
            <HiOutlineClipboardDocumentList className='w-16 h-16' />
            <div className='text-2xl'>نخسه های جدید در انتظار تایید</div>
          </div>

          <div className={`text-2xl`}>
            {toPersianDigits(25)}
          </div>

        </div>
        <div className={`gradCardGreen shadow-lg rounded-2xl py-5 px-10 flex justify-between items-center text-white`}>

          <div className='flex items-center gap-2'>
            <FaBoltLightning className='w-16 h-16' />
            <div className='text-2xl'>نسخه های فوری</div>
          </div>

          <div className={`text-2xl`}>
            {toPersianDigits(5)}
          </div>

        </div>
        <div className={`gradCardPink shadow-lg rounded-2xl py-5 px-10 flex justify-between items-center text-white`}>

          <div className='flex items-center gap-2'>
            <CiPill className='w-16 h-16' />
            <div className='text-2xl'> داروهای با موجودی کم</div>
          </div>

          <div className={`text-2xl`}>
            {toPersianDigits(25)}
          </div>

        </div>
        <div className={`gradCardYellow shadow-lg rounded-2xl py-5 px-10 flex justify-between items-center text-white`}>

          <div className='flex items-center gap-2'>
            <MdAttachMoney className='w-16 h-16' />
            <div className='text-2xl'> هزینه کل داروهای توزیع شده امروز </div>
          </div>

          <div className={`text-2xl`}>
            {toPersianDigits(2_500_000)}
          </div>

        </div>
      </div>

      <h2 className={`${style.cardStyleA} text-lg w-fit mt-5 rounded-xl py-2 px-5 font-bold`}>هشدار ها :</h2>

      <div className={`w-full ${style.cardStyleA} shadow-lg rounded-2xl p-5 grid grid-cols-3 gap-5 mt-5`}>
        <input className={`block ${style.placeHolderStyle} ${style.cardStyleB} ps-5 py-2 rounded-full`} type="text" placeholder='نام بیمار ...' />
        <SingleSelectInput staticOption={[]} place={'مرتب سازی بر اساس ...'} style={themeType === 'hospital' ? selectBoxGlassStyle : selectBoxStyleNoPadding} />
      </div>


      <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
        <div className={`p-5 ${style.gradCardBlue} font-bold shadow-lg rounded-2xl gap-5 grid grid-cols-7`}>
          <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>ردیف</div>
          <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>زمان</div>
          <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>نام بیمار</div>
          <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>دارو های متداخل</div>
          <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>سطح خطر</div>
          <div className={`border-l-2 ${themeType === 'hospital' ? `border-[#ffffff33]` : `border-[var(--colTextA)]`} `}>وضعیت</div>
          <div>اقدام</div>
        </div>
        {
          interactions.map((intraction, index) => {
            return (
              <AnimateOnScroll key={intraction.id} delay={index * 70}>
                <IntractionCard index={index} {...intraction} />
              </AnimateOnScroll>
            )
          })
        }
      </div>
    </>
  )
}
