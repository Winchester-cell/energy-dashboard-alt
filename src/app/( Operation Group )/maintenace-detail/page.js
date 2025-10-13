"use client";
import { SlArrowLeft } from "react-icons/sl";
import TabSelector from "@/components/Modules/TabSelector/TabSelector";
import { natDetailsTabsContent } from "@/content/tabs";
import React, { useState } from "react";

export default function MaintenaceDetailPage() {

    // show the first tab by default
  const [selectedTab, setSelectedTab] = useState(natDetailsTabsContent[0]);

  return (
    <div className="p-5">
        {/* The Header Part */}
        <div className="flex items-center gap-3 w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl mb-5">
            <SlArrowLeft />
            <div className="flex flex-col">
                <h2 className='text-2xl font-bold'>جزئیات دستور کار نت</h2>
                <p className='text-[var(--colTextB)] mt-3'>مدیریت و نظارت بر فعالیت‌های نگهداری و تعمیرات</p>
            </div>
        </div>

        <div className="flex justify-around gap-5 w-full bg-[var(--colCard)] shadow-lg p-5 rounded-2xl ">
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">MWO-55: بازبینی ارزش دستگاه برش</h2>
                <p className='text-[var(--colTextB)]'>دارایی: دستگاه برش CNC-001</p>
            </div>
            <div className="flex flex-col items-center justify-between">
                <p className="font-bold text-2xl">6</p>
                <span className='text-[var(--colTextB)]'>ساعت تخمینی</span>
            </div>
            <div className="flex flex-col items-center justify-between">
                <p className="font-bold text-2xl">3</p>
                <span className='text-[var(--colTextB)]'>تکنسین درگیر</span>
            </div>
            <div className="flex flex-col items-center justify-between">
                <span className="bg-yellow-100 text-slate-950 py-1 px-2 rounded-md">⭕ اولویت بالا</span>
                <p className='text-[var(--colTextB)]'>نوع: تعمیر اضطراری</p>
            </div>
        </div>
      <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabs={natDetailsTabsContent} />
      {selectedTab.elem}
    </div>
  );
}
