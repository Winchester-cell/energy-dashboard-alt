'use client'
import AddDashboardModal from '@/components/Modules/Modals/AddDashboard/AddDashboardModal'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

export default function HeadPart() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='p-5'>
            <button onClick={() => setIsOpen(true)} className='bg-[var(--colCard)] px-7 py-3 rounded-full shadow-lg flex items-center gap-2' >
                <FaPlus />
                <span>افزودن داشبورد</span>
            </button>
            <AddDashboardModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
