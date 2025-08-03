import React from 'react'
import ChartsGridAlt from './ChartsGridAlt'

export default function SummarySection() {
    return (
        <div className='w-full my-10'>
            <h2 className='text-2xl font-bold mb-10'>خلاصه وضعیت</h2>
            <ChartsGridAlt />
        </div>
    )
}
