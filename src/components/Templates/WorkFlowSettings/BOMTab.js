import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll';
import BOMCard from '@/components/Modules/Cards/WorkFlows/BOMCard';
import SingleSelectInput from '@/components/Modules/Inputs/SingleSelectInput'
import { selectBoxStyleNoPadding } from '@/data/stylesData'
import React, { useState } from 'react'
import { useFormStatus } from 'react-dom';
import { FaPlus } from "react-icons/fa";

const options = [
  { value: 'R13', label: 'تایر پراید ۱۶۵/۸۰R13' },
  { value: 'R15', label: 'تایر پژو ۱۸۵/۶۵R15' },
  { value: 'R22', label: 'تایر کامیون ۱۱R22.5' },
  { value: '18-30', label: 'تایر موتورسیکلت ۳.۰۰-۱۸' },
]


const rawMaterialsUsage = [
  {
    id: 1,
    list: [
      { value: 'sbr', label: 'کائوچوی SBR-1502' },
      { value: 'sbrr', label: 'کائوچوی طبیعی' },
      { value: 'sbrrr', label: 'کائوچوی بوتیل' },
    ],
    amount: 5.5,
    unit: [
      { value: 'kg', label: 'کیلوگرم' },
      { value: 'gr', label: 'گرم' },
      { value: 'ton', label: 'تن' },
    ],
    price: "۱۲۰,۰۰۰ تومان",
  },
  {
    id: 2,
    list: [
      { value: 'N330', label: 'دوده N330' },
      { value: 'N220', label: 'دوده N220' },
      { value: 'N550', label: 'دوده N550' },
    ],
    amount: 1.2,
    unit: [
      { value: 'kg', label: 'کیلوگرم' },
      { value: 'gr', label: 'گرم' },
      { value: 'ton', label: 'تن' },
    ],
    price: "۸۵,۰۰۰ تومان",
  },
  {
    id: 3,
    list: [
      { value: 'N3300', label: 'روغن فرآیند' },
      { value: 'N2200', label: 'روغن آروماتیک' },
      { value: 'N5500', label: 'روغن نفتنیک' },
    ],
    amount: 0.8,
    unit: [
      { value: 'lt', label: 'لیتر' },
      { value: 'kg', label: 'کیلوگرم' },
      { value: 'gal', label: 'گالن' },
    ],
    price: "۴۵,۰۰۰ تومان",
  },
  {
    id: 4,
    list: [
      { value: 'N33000', label: 'سیم فولادی ۱.۲mm' },
      { value: 'N22000', label: 'کورد فولادی' },
      { value: 'N55000', label: 'کورد نساجی' },
    ],
    amount: 0.3,
    unit: "کیلوگرم",
    price: "۲۸۰,۰۰۰ تومان",
  },
];


export default function BOMTab() {

  const [selectedItem, setSelectedItem] = useState(options[0])

  const hanldeChange = (data) => {
    setSelectedItem(data)
  }


  return (
    <div className='p-5 bg-[var(--colCard)] rounded-2xl'>

      <div className='bg-[var(--colBg)] rounded-2xl p-5 flex items-center gap-5'>
        <div className='w-[300px] bg-[var(--colCard)] p-1 rounded-full shadow-lg'>
          <div className='shadow-inner'>
            <SingleSelectInput hasDefaultSelect={true} onChange={hanldeChange} staticOption={options} style={selectBoxStyleNoPadding} place={'انتخاب محصول'} />
          </div>
        </div>
        <button className='flex gap-2 items-center justify-center py-3 px-10 bg-emerald-600 text-white rounded-full shadow-lg'>
          <FaPlus />
          BOM جدید برای محصول
        </button>
      </div>

      <div className='bg-[var(--colBg)] rounded-2xl p-5 mt-5'>

        <div className='bg-[var(--colCard)] shadow-lg p-5 rounded-2xl'>
          📌 نسخه فعال: v2.1 - آخرین بروزرسانی: ۱۴۰۳/۰۸/۱۵ توسط مهندس رضایی
        </div>

        <div className='text-xl bg-[var(--colCard)] shadow-lg py-7 px-5 rounded-2xl font-bold my-5'>
          📋 فرمول ساخت (BOM) برای : {selectedItem.label}
        </div>

        <div className='w-full mt-5 rounded-2xl flex flex-col gap-3 text-[12px]'>
          <div className={`p-5 gradCardRedLight shadow-lg rounded-2xl gap-5 grid grid-cols-5 text-white`}>
            <div className={`border-l-2 border-[white] `}>ماده اولیه	</div>
            <div className={`border-l-2 border-[white] `}>مقدار</div>
            <div className={`border-l-2 border-[white] `}>واحد</div>
            <div className={`border-l-2 border-[white] `}>قیمت واحد</div>
            <div>اقدامات</div>
          </div>
          {
            rawMaterialsUsage.map((item, index) => {
              return (
                <AnimateOnScroll key={item.id} delay={index * 70}>
                  <BOMCard index={index} {...item} />
                </AnimateOnScroll>
              )
            })
          }
        </div>

        <button className='w-full my-5 border-dashed border-2 rounded-2xl border-[var(--colTextA)] flex justify-center items-center gap-2 py-5'>
          <FaPlus />
          افزودن ماده جدید
        </button>

      </div>

      <div className="bg-[var(--colBg)] rounded-2xl p-5 mt-5 flex flex-col gap-5">
        <h4 className="font-semibold">💰 خلاصه هزینه‌ها (برای یک واحد)</h4>
        <div className="flex items-center justify-between">
          <span>کائوچوی SBR:</span>
          <span>۶۶۰,۰۰۰ تومان</span>
        </div>
        <div className="flex items-center justify-between">
          <span>دوده N330:</span>
          <span>۱۰۲,۰۰۰ تومان</span>
        </div>
        <div className="flex items-center justify-between">
          <span>روغن فرآیند:</span>
          <span>۳۶,۰۰۰ تومان</span>
        </div>
        <div className="flex items-center justify-between">
          <span>سیم فولادی:</span>
          <span>۸۴,۰۰۰ تومان</span>
        </div>
        <div className="flex items-center justify-between">
          <span>مجموع هزینه مواد اولیه:</span>
          <span>۸۰۸٬۴۰۷ تومان</span>
        </div>
      </div>

    </div>
  )
}
