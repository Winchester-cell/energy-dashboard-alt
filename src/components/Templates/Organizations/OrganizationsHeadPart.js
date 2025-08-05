'use client'
import AddOrganizationModal from '@/components/Modules/Modals/AddOrganization/AddOrganizationModal'
import React, { useState } from 'react'

export default function OrganizationsHeadPartPart(props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-full flex justify-between my-5 px-5 text-[var(--colTextA)]'>
            <div className='flex items-center gap-5'>
                <h2 className='bg-[var(--colCard)] rounded-full px-7 shadow-lg py-2'>شهرک صنعتی کاسپین</h2>
                <button onClick={()=> setIsOpen(true)} className='bg-[var(--colCard)] rounded-full px-7 shadow-lg py-2'>افزودن زیرمجموعه</button>
            </div>
            <AddOrganizationModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}