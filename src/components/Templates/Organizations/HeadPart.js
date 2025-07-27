import PaginationControl from '@/components/Modules/Controls/PaginationControl'
import Link from 'next/link'
import React from 'react'

export default function HeadPart(props) {
    return (
        <div className='w-full flex justify-between my-5 px-5 text-[var(--colTextA)]'>
            <Link href={'#'} className='font-bold bg-[var(--colCard)]  border-[3px] rounded-full py-2 px-4 border-[var(--colTextA)] block'>ثبث سازمان جدید</Link>
            <PaginationControl {...props} />
        </div>
    )
}