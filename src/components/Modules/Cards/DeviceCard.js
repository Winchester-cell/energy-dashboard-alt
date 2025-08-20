import { makeDate } from '@/utils/dateMaker'
import { toPersianDigits } from '@/utils/toPersianDigits'
import { useTheme } from 'next-themes'
import React from 'react'

export default function DeviceCard(props) {
    const { name, unique_id, created_at, organization_name } = props
    const { theme } = useTheme()
    return (
        <div className={`w-full h-[300px] bg-[var(--colCard)] rounded-xl shadow-lg p-4 flex flex-col gap-3 ${theme === 'dark' ? `activeBorder` : `` } `}>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{toPersianDigits(name)}</div>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{toPersianDigits(organization_name)}</div>
            <div className='w-full flex items-center gap-2'>
                <div className='bg-[var(--colBg)] text-[12px] p-3 w-1/2 text-center rounded-md'>وضعیت</div>
                <div className='bg-[var(--colBg)] text-[12px] p-3 w-1/2 text-center rounded-md'>فعال</div>
            </div>
            <div className='w-full text-[12px] text-[var(--colTextB)] bg-[var(--colBg)] p-3 rounded-md text-center'>سریال : {unique_id}</div>
            <div className='w-full text-[12px] text-[var(--colTextB)] bg-[var(--colBg)] p-3 rounded-md text-center'>تاریخ نصب : {toPersianDigits(makeDate(created_at))}</div>
        </div>
    )
}
