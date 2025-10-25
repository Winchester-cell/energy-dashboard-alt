import React from 'react'

export default function Manufacturing() {
    const statsCards = [
  {
    title: "پیشنهادات خرید",
    icon: "💡",
    value: 8,
    color: "#063317",
  },
  {
    title: "مواد با کمبود",
    icon: "⚠️",
    value: 12,
    color: "#811010",
  },
  {
    title: "کل مواد بررسی شده",
    icon: "📦",
    value: 47,
    color: "#122974",
  },
    ];
    const shortages = [
  {
    material: "چوب بلوط",
    current: "15 m²",
    needed: "45 m²",
    shortage: "30 m²",
    date: "1403/09/15",
    color: "#896565"
  },
  {
    material: "پیچ چوب",
    current: "150 عدد",
    needed: "400 عدد",
    shortage: "250 عدد",
    date: "1403/09/20",
    color: "#a59858"
  },
  {
    material: "فولاد ضد زنگ",
    current: "25 kg",
    needed: "60 kg",
    shortage: "35 kg",
    date: "1403/09/25",
    color: "#76838e"
  },
    ];
    const suggestions = [
  {
    priority: "فوری",
    title: "خرید چوب بلوط",
    amount: "35 متر مربع",
    date: "1403/09/15",
    action: "ایجاد سفارش خرید",
    color: "#802e2e",
  },
  {
    priority: "متوسط",
    title: "خرید پیچ چوب",
    amount: "300 عدد",
    date: "1403/09/20",
    action: "ایجاد سفارش خرید",
    color: "#0b8839",
  },
  {
    priority: "برنامه‌ریزی",
    title: "تولید قطعه فلزی",
    amount: "50 عدد",
    date: "1403/09/25",
    action: "ایجاد سفارش کار",
    color: "#265ab0",
  },
    ];


  return (
    <div>
      <div className='p-5'>
        {/* TITLE OF HEADER */}
        <div className='flex flex-col bg-[var(--colCard)] rounded-2xl p-5 gap-2'>
            <div className='flex gap-2 font-bold text-xl'>
                <span>📊</span>
                <p>برنامه‌ریزی نیازمندی مواد (MRP)</p>
            </div>
            <p>اجرای موتور MRP و مشاهده نتایج کمبود مواد و پیشنهادات خرید</p>
        </div>

        {/* TIME FRAME SECTION */}
        <div className='bg-[var(--colCard)] p-5 rounded-2xl flex items-center justify-between mt-5'>
            <div className='grid gap-2'>
                <p>بازه زمانی برنامه‌ریزی :</p>
                <select className='p-2 rounded-md bg-[var(--bgCardB)]'>
                    <option>7 روز آینده</option>
                    <option>14 روز آینده</option>
                    <option>30 روز آینده</option>
                    <option>60 روز آینده</option>
                </select>
            </div>
            <button className='bg-[#1D4ED8] px-5 py-3 rounded-lg text-white'>🚀 اجرای MRP </button>
        </div>
        
        {/* STATS CARDS SECTION */}
        <div className='flex justify-between w-[100%] gap-10 mt-5'>
            {statsCards.map((card , index) => {
                return(
                    <div key={index} className='px-6 py-5 bg-[var(--bgCardB)] w-[33%] flex justify-between items-center rounded-2xl'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold text-base'>{card.title}</p>
                            <span className="text-2xl" style={{color: card.color}}>{card.value}</span>
                        </div>
                        <span className="text-3xl">{card.icon}</span>
                    </div>
                )
            })}
        </div>
        
        {/* SHORTAGES AND SUGGESTION SECTION */}
        <div className='w-[100%] flex gap-2'>
            {/* Right Section */}
            <div className='bg-[var(--colCard)] rounded-2xl p-5 mt-5 w-[50%]'>
                <p className='text-lg font-semibold'>جدول کمبودها</p>
                <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden mt-4 text-white">
                  <div className="grid grid-cols-5 bg-[#b1b1b1] font-semibold py-5 px-6 text-center text-sm">
                    <div>ماده اولیه</div>
                    <div>موجودی فعلی</div>
                    <div>مقدار نیاز</div>
                    <div>کمبود</div>
                    <div>تاریخ نیاز</div>
                  </div>
                  {shortages.map((item , index) => {
                    return(
                      <div key={index}
                      className={`grid grid-cols-5 text-center items-center py-4 px-6`} style={{backgroundColor: item.color}}
                      >
                        <div>{item.material}</div>
                        <div>{item.current}</div>
                        <div>{item.needed}</div>
                        <div>{item.shortage}</div>
                        <div>{item.date}</div>
                      </div>
                    )
                  })}
                </div>
            </div>
            {/* Left Section */}
            <div className='bg-[var(--colCard)] rounded-2xl p-5 mt-5 w-[50%]'>
                <p className='text-lg font-semibold'>پنل پیشنهادات</p>
                <div className='flex flex-col gap-3 mt-4'>
                    {suggestions.map((suggest , index) => {
                        return(
                            <div className='bg-[var(--bgCardB)] p-5 rounded-2xl' key={index}>
                                <div className='flex justify-between items-center'>
                                    <p>{suggest.title}</p>
                                    <span className='p-2 rounded-full text-white w-[15%] text-center' style={{backgroundColor: suggest.color}}>{suggest.priority}</span>
                                </div>
                                <div className='flex gap-4'>
                                    <p> مقدار : {suggest.amount} </p>
                                    <span> تاریخ نیاز : {suggest.date}</span>
                                </div>
                                <button className='bg-[#1d4ed8] p-2 rounded-md mt-[8px] text-white'>ایجاد سفارش جدید 🛒</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
