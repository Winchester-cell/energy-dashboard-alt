'use client'
import React, { useState } from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { IoWarning } from "react-icons/io5";

export default function InventoryTransaction() {
    const [openItems , setOpenItems] = useState([])

    const stores = [
        {
            id:1,
            number: '۱,۲۴۷',
            status: "کل اقلام موجودی",
            decInc: "+۱۲ از هفته گذشته",
            st: true
        },
        {
            id:2,
            number: '۸۵.۲%',
            status: "نرخ دسترسی موجودی",
            decInc: " +۲.۳% از ماه گذشته",
            st: true
        },
        {
            id:3,
            number: '۴۳',
            status: "اقلام کم موجود",
            decInc: " -۷ از هفته گذشته",
            st: false
        },
        {
            id:4,
            number: '۱۲',
            status: "اقلام نزدیک انقضا",
            decInc: "+۳ از هفته گذشته",
            st: true
        },
    ]
    const items = [
    {
      id: 1,
      name: "کائوچوی طبیعی SBR-1502",
      sku: "RAW-RUB-01",
      unit: "کیلوگرم",
      total: "8,000",
      status: "موجودی کافی",
      details: [
        { id: 1, batch: "LOT-A543", location: "A1-R2-S3", amount: "5,000 کیلوگرم", expire: "1404/09/01", status: "سالم" },
        { id: 2, batch: "LOT-B987", location: "A2-R1-S5", amount: "3,000 کیلوگرم", expire: "1403/07/24", status: "سالم" }
      ]
    },
    {
      id: 2,
      name: "تایر پیکاپ 165/R13",
      sku: "TR-16S",
      unit: "حلقه",
      total: "1,250",
      status: "موجودی متوسط",
      details: [
        { id: 1, batch: "BATCH-2024-081", location: "B1-R3-S1", amount: "800 حلقه", produce: "1403/05/15", status: "سالم" },
        { id: 2, batch: "BATCH-2024-082", location: "B1-R3-S2", amount: "450 حلقه", produce: "1403/04/23", status: "سالم" }
      ]
    },
    {
      id: 3,
      name: "سیم فولادی 12 میلیمتر",
      sku: "RAW-STL-12",
      unit: "کیلوگرم",
      total: "250",
      status: "موجودی کم",
      warning: "موجودی این کالا به حداقل رسیده است، سفارش جدید ضروری می‌باشد.",
      details: [
        { id: 1, batch: "STL-LOT-55", location: "C2-R1-S4", amount: "250 کیلوگرم", expire: "1404/07/10", status: "کمبود موجودی" }
      ]
    },
    {
      id: 4,
      name: "کربن بلک N330",
      sku: "RAW-CB-N33B",
      unit: "کیلوگرم",
      total: "1,800",
      status: "موجودی کافی",
      details: [
        { id: 1, batch: "CB-2024-48", location: "A3-R2-S2", amount: "1,200 کیلوگرم", expire: "1406/05/10", status: "سالم" },
        { id: 2, batch: "CB-2024-88", location: "A3-R2-S3", amount: "600 کیلوگرم", expire: "1406/04/20", status: "نزدیک انقضا" }
      ]
    }
    ];

    const toggleButton = (itemId) => {
        setOpenItems((prev) => prev.includes(itemId) ? prev.filter((x) => x !== itemId) : [...prev, itemId])
    }

  return (
    <div className='p-5 rounded-md'>
      {/* HEADER */}
      <div className='flex items-center gap-3 w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl mb-5'>
        <SlArrowLeft />
        <div>
            <h3 className='text-2xl font-bold'>موجودی و تراکنش‌های انبار</h3>
            <p className='text-[var(--colTextB)] mt-3'>مدیریت موجودی کالاها و مواد اولیه</p>
        </div>
      </div>

      {/* MAP ON STORE ITEMS */}
      <div className='grid grid-cols-4 gap-14 justify-around w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl mb-5'>
        {
            stores.map((store)=>{
                return(
                    <div className='shadow-md border border-gray-200 px-8 py-5 rounded-lg flex flex-col items-center gap-2' key={store.id}>
                        <h3 className='font-bold text-2xl'>{store.number}</h3>
                        <p>{store.status}</p>
                        <span className={`${store.st === true ? "text-lime-600" : "text-red-600"}`}>{store.decInc}</span>
                    </div>
                )
            })
        }
      </div>
      
      {/* TRANSACTION SUBMIT */}
      <div className='grid items-center justify-center grid-cols-[2fr_1fr_1fr_1fr] gap-3 bg-[var(--colCard)] shadow-lg p-5 rounded-2xl mb-5'>
        {/* SEARCH BOX */}
        <div className='relative '>
            <CiSearch className='absolute right-[15px] bottom-[14px] text-[19px] text-black'/>
            <input placeholder='جستجوی کالا براساس نام یا کد ...' className='bg-[#cdcdcd] text-black placeholder:text-black pr-[45px] shadow-lg w-[100%] p-3 rounded-lg'/>
        </div>
        {/* STORAGES TO PICK */}
        <select name="storage" id="storage" className='pr-2 bg-[#cdcdcd] h-[74%] border-solid border-slate-300 shadow-lg rounded-lg text-black'>
            <option value="">همه انبارها</option>
            <option value="">انبار مواد اولیه</option>
            <option value="">انبار اصلی</option>
            <option value="">انبار محصولات نهایی</option>
            <option value="">انبار قطعات یدکی</option>
        </select>
        {/* STATUS TO PICK */}
        <select name="status" id="status" className='pr-2 bg-[#cdcdcd] h-[74%] border-solid border-slate-300 shadow-lg rounded-lg text-black'>
            <option value="">همه وضعیت‌ها</option>
            <option value="">موجودی کافی</option>
            <option value="">موجودی متوسط</option>
            <option value="">موجودی کم</option>
            <option value="">ناموجود</option>
        </select>
        {/* BUTTON FOR SUBMIT */}
        <div className="relative flex items-center justify-between gap-3 p-3 rounded-xl shadow-sm">
            <LuPlus className='absolute right-5 bottom-6'/>
            <button className='flex items-center gap-2 bg-blue-600 text-white px-5 pr-[30px] py-2 rounded-lg hover:bg-blue-700 transition-all'>ثبت تراکنش جدید</button>
        </div>
      </div>
      
      {/* ACCORDIAN */}
      <div className='bg-[var(--colCard)] rounded-2xl w-full mb-5 text-[var(--colTextA)]'>
        {/* HEADER OF ACCORDIAN */}
        <div className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] items-center justify-between p-5 text-center gap-5'>
            <div className='ml-[35px]'>کالا (محصول/ماده)</div>
            <div>SKU</div>
            <div>موجودی کل</div>
            <div className='ml-[-7px]'>واحد</div>
            <div className='ml-[-23px]'>وضعیت</div>
            <div className='ml-[60px]'>اقدامات</div>
        </div>
        <span className='w-[100%] h-[1px] bg-slate-500 block mt-1 mb-3'></span>
        <div>
          {/* EACH TAB OF ACCORDIAN */}
            {items.map((item) => {
                return(
                  // MAIN BODY
                    <div key={item.id}>
                        <div className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] items-center text-center gap-5 hover:bg-[var(--textHover)] transition-all'>
                        <div onClick={()=> toggleButton(item.id)} className='relative flex pr-20'>
                            {openItems.includes(item.id) ? <SlArrowDown className='absolute top-[2px] left-11'/> : <SlArrowUp className='absolute top-[2px] left-11'/>}
                            <p>{item.name}</p>
                        </div>
                        <p>{item.sku}</p>
                        <span>{item.total}</span>
                        <p>{item.unit}</p>
                        <p className={`rounded-lg py-1 font-semibold ${item.status === "موجودی کافی" ? "bg-[#92ffab66] text-lime-900" : item.status === "موجودی متوسط" ? "bg-yellow-200 text-yellow-900" : "bg-red-200 text-red-900"}`}>{item.status}</p>
                        <div className='p-1 border w-[50%] my-2 rounded-md'>مشاهده جزئیات</div>
                        </div>

                      {/* BODY WHEN I CLICK ON EACH ONE */}
                      {openItems.includes(item.id) && (
                        <div className='bg-[var(--accordianTabs)]'>
                              <div className='mb-2 mt-3 p-3 font-bold mr-20'>
                                  <p>جزئیات بچ/لات موجودی</p>
                              </div>  
                              <div className='grid grid-cols-[2fr_2fr_2fr_2fr_2fr] mb-2 text-center'>
                                  <div>شماره لات</div>
                                  <div>مکان انبار</div>
                                  <div>موجودی</div>
                                  <div className='ml-[10px]'>تاریخ انقضا</div>
                                  <div className='ml-5'>وضعیت</div>
                              </div>
                              <span className='w-[100%] h-[1px] bg-slate-400 block mt-1 mb-3'></span>
                              <div className='p-4'>
                                  {item.details.map((data) => {
                                      return(
                                          <div>
                                            <div key={data.id} className='grid grid-cols-[2fr_2fr_2fr_2fr_2fr] text-center gap-2 mb-2'>
                                              <p>{data.batch}</p>
                                              <p className='bg-[var(--textBoxA)] p-1 rounded-xl'>{data.location}</p>
                                              <p className='font-bold'>{data.amount}</p>
                                              <p>{data.expire}</p>
                                              <p className={`p-1 rounded-lg ${data.status === "سالم" ? "bg-[--textBoxB] text-lime-900" : data.status === "کمبود موجودی" ? "bg-yellow-200 text-yellow-900" : "bg-red-200 text-red-900"}`}>{data.status}</p> 
                                              
                                          </div>
                                          {/* WHEN THE STATUS HAS LOW ITEMS */}
                                          {data.status === "کمبود موجودی" ? <div className='bg-amber-200 w-[100%] mt-3 rounded-lg text-right p-4 text-black'>
                                                <div className='flex gap-2 items-center mb-2'>
                                                  <IoWarning className='text-xl'/>
                                                  <p className='font-bold'>هشدار موجودی کم</p>
                                                </div>
                                                <p>موجودی این کالا به حد آستانه رسیده است. سفارش خرید جدید ضروری می‌باشد.</p>
                                              </div> : ""}
                                          </div>
                                      )
                                  })}
                              </div>
                          </div>
                      )}
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}
