import React from 'react'
import SummryCard from '@/components/Modules/Cards/HospitalCards/SummaryCard'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits';
import { MdGroup } from "react-icons/md";
import { LuBedSingle } from "react-icons/lu";
import { IoIosTime } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";

export default function SummarySection() {
    return (
        <>
            <h2 className='font-bold text-[20px] mb-5'>خلاصه وضعیت</h2>
            <div className='w-full grid grid-cols-2 gap-5'>
                <SummryCard
                    icon={<MdGroup className='w-16 h-16' />}
                    cardTitle={'تعداد کل بیماران بستری'}
                    metricA={'امروز'}
                    valA={'نسبت به دیروز'}
                    metricB={'نفر'}
                    valB={200}
                    extraText={'ظرفیت کل :'}
                    extraVal={`${toPersianDigits(300)} تخت`}
                />
                <SummryCard
                    icon={<LuBedSingle className='w-16 h-16' />}
                    cardTitle={'درصد تخت های اشغال شده'}
                    metricA={'وضعیت'}
                    valA={'مطلوب'}
                    metricB={'درصد'}
                    valB={50}
                    extraText={'اشغال شده :'}
                    extraVal={`${toPersianDigits(150)} از ${toPersianDigits(300)} تخت`}
                />
                <SummryCard
                    icon={<IoIosWarning className='w-16 h-16' />}
                    cardTitle={'تعداد هشدارهای بحرانی فعال'}
                    metricA={'فعال'}
                    valA={'نیاز به توجه'}
                    metricB={'هشدار'}
                    valB={7}
                    extraText={'اورژانس :'}
                    extraVal={`${toPersianDigits(7)} هشدار`}
                />
                <SummryCard
                    icon={<IoIosTime className='w-16 h-16' />}
                    cardTitle={'میانگین زمان انتظار اورژانس'}
                    metricA={'میانگین'}
                    valA={'اخرین ساعت'}
                    metricB={'دقیقه'}
                    valB={22}
                    extraText={' هدف استاندارد :'}
                    extraVal={'پانزده دقیقه'}
                />
            </div>
        </>
    )
}
