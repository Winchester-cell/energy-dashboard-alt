'use client'
import OrganizationCard from '@/components/Modules/Cards/OrganizationCard'
import { factories } from '@/data/fakeData'
import React from 'react'

export default function OrganizationsCardContainer({ data }) {

    return (

        <div className='w-full place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 pb-5'>
            {factories[0].children.map(organization => {
                return <OrganizationCard key={organization.id} {...organization} />
            })}
        </div>

    )

}
