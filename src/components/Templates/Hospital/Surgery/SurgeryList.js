import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { usePathname } from 'next/navigation';
import React from 'react'
import SimpleBar from 'simplebar-react';

export default function SurgeryList() {

    const todaySurgeries = [
        {
            patient: "رضا محمدی",
            surgery: "آپاندکتومی",
            room: "اتاق عمل ۱",
            doctor: "دکتر احمدی",
            start: "09:00",
            end: "11:00",
            status: "در حال انجام",
        },
        {
            patient: "سارا رضایی",
            surgery: "لاپاراسکوپی",
            room: "اتاق عمل ۱",
            doctor: "دکتر احمدی",
            start: "11:30",
            end: "13:00",
            status: "آماده‌سازی",
        },
        {
            patient: "علی کریمی",
            surgery: "جراحی قلب",
            room: "اتاق عمل ۲",
            doctor: "دکتر محسنی",
            start: "10:00",
            end: "14:00",
            status: "آماده‌سازی",
        },
        {
            patient: "نرگس موسوی",
            surgery: "تعویض زانو",
            room: "اتاق عمل ۳",
            doctor: "دکتر سلطانی",
            start: "11:00",
            end: "13:00",
            status: "با تأخیر",
        },
    ];

    const { themeType } = useThemeTypeStore()
    const path = usePathname()
    const style = colorVariantSelector(path, themeType)

    return (
        <div className={`w-full flex-grow ${style.cardStyleA} rounded-2xl p-5 overflow-hidden`}>
            <SimpleBar className='h-full'>
                {
                    todaySurgeries.map(s => {
                        return (
                            <div className={`${style.cardStyleB} rounded-xl p-3 mt-2 flex items-center justify-between`}>
                                <div>
                                    <div>{s.surgery}</div>
                                    <div className={`text-[12px] ${style.textStyleB}`}>{s.doctor}</div>
                                </div>
                                <div className={`${style.textStyleC}`}>{s.status}</div>
                            </div>
                        )
                    })
                }
            </SimpleBar>
        </div>
    )
}
