import PaginationControl from '@/components/Modules/Controls/PaginationControl'
import React from 'react'

export default function BottomPart(props) {
    return (
        <div className='w-full flex justify-center lg:justify-end my-5 px-5'>
            <PaginationControl {...props} />
        </div>
    )
}