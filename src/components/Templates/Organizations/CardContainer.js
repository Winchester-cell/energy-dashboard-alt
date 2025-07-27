import OrganizationCard from '@/components/Modules/Cards/OrganizationCard'
import React from 'react'

export default function CardContainer({ data }) {

    return (

        <div className='w-full place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 pb-5'>
            {data.map(organization => {
                return <OrganizationCard key={organization._id} {...organization} />
            })}
        </div>

    )

}
