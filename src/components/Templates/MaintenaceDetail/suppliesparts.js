import React from 'react'
import { FaPuzzlePiece } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";

export default function SuppliesParts() {
  const materials = [
  {
    name: "بلبرینگ 6206",
    code: "BRG-6206-2RS",
    required: "2 عدد",
    stock: "5 عدد",
    unitPrice: "250,000 تومان",
    status: "موجود"
  },
  {
    name: "بلبرینگ 6208",
    code: "BRG-6208-2RS",
    required: "2 عدد",
    stock: "3 عدد",
    unitPrice: "320,000 تومان",
    status: "موجود"
  },
  {
    name: "گریس صنعتی",
    code: "GRS-NLGI2",
    required: "1 کیلوگرم",
    stock: "15 کیلوگرم",
    unitPrice: "85,000 تومان",
    status: "موجود"
  },
  {
    name: "واشر فلزی",
    code: "WSH-M20",
    required: "4 عدد",
    stock: "2 عدد",
    unitPrice: "15,000 تومان",
    status: "کم"
  },
  {
    name: "پیچ آلن M8x25",
    code: "SCR-M8-25",
    required: "8 عدد",
    stock: "0 عدد",
    unitPrice: "5,000 تومان",
    status: "ناموجود"
  }
];
  return (
    <div className='p-5 bg-[var(--colCard)] rounded-md '>
      <div className='flex gap-3 font-semibold text-lg mb-4'>
        <FaPuzzlePiece />
        <p> قطعات و مواد مصرفی</p>
      </div>
      <div className=' bg-[#5c6975] rounded-xl p-5'>
        {/* HEADER */}
        <div className='grid grid-cols-5 text-center'>
          <div>نام قطعه / ماده</div>
          <div>تعداد مورد نیاز</div>
          <div>موجودی انبار</div>
          <div>قیمت واحد</div>
          <div>وضعیت</div>
        </div>
        <span className='w-[100%] h-[1px] bg-slate-500 block mt-3'></span>
        {/* TABLE ROWS */}
        <div className='mt-3'>
          {materials.map((material) => {
            return(
              <>
                <div className='grid grid-cols-5 text-center items-center' key={material.id}>
                  <div className='flex flex-col text-right'>
                    <p>{material.name}</p>
                    <span className=''>  کد: {material.code}</span>
                  </div>
                  <div>{material.required}</div>
                  <div>{material.stock}</div>
                  <div>{material.unitPrice}</div>
                  <div
                      className={`py-1 px-2 rounded-md font-semibold ${
                        material.status === "موجود"
                          ? "bg-[#92ffab66] text-lime-900"
                          : material.status === "کم"
                          ? "bg-yellow-200 text-yellow-900"
                          : "bg-red-200 text-red-900"
                      }`}
                    >
                      {material.status}
                    </div>
                </div>
                <span className='w-[100%] h-[1px] bg-slate-500 block mt-3 mb-3'></span>
              </>
              
            )
          })}
        </div>
      </div>
          {/* SUPPLIES PARTS NEEDED */}
      <div className='grid md:grid-cols-3 grid-cols-1 mt-5 gap-3'>
        <div className='bg-gray-600 rounded-lg px-4 py-10 grid justify-center text-center border border-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.1)]'>
          <span className='font-semibold text-[20px]'>۱,۲۲۰,۰۰۰</span>
          <p>هزینه کل قطعات (تومان)</p>
        </div>
        <div className='bg-yellow-600 rounded-lg px-4 py-10 grid items-center border border-yellow-600 shadow-[0_2px_4px_rgba(0,0,0,0.1)]'>
          <div className='flex items-center gap-2'>
            <IoWarningOutline className='w-[18px] h-[18px]'/>
            <p className='font-semibold'> نیاز به خرید</p>
          </div>
          <p>واشر فلزی و پیچ آلن نیاز به تهیه از بازار دارند.</p>
        </div>
        <div className='bg-cyan-700 rounded-lg px-4 py-10 grid items-center border border-cyan-700 shadow-[0_2px_4px_rgba(0,0,0,0.1)]'>
          <div className='flex items-center gap-2'>
            <LuNotepadText className='w-[18px] h-[18px]'/>
            <p className='font-semibold'> درخواست انبار</p>
          </div>
          <p>درخواست تحویل قطعات موجود ارسال شده است.</p>
        </div>
      </div>
    </div>
  )
}
