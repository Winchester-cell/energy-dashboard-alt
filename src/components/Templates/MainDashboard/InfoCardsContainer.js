import InfoCard from '@/components/Modules/Cards/InfoCard'
import cardInfosContent from '@/content/infoCardContent'
import React from 'react'

export default function InfoCardsContainer() {
    return (
        <div className='grid grid-cols-6 p-5 gap-5 text-[var(--colTextA)]'>
            {cardInfosContent.map((info, index) => {
                return <InfoCard key={index} {...info} />
            })}
        </div>
    )
}
