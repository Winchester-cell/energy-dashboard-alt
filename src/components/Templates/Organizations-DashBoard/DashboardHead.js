'use client'
import WidgetModal from '@/components/Modules/Modals/Widget/WidgetModal'
import useDynamicDashboardStore from '@/stores/useDynamicDashboardStore';
import React, { useState } from 'react'
import { FaPlus, FaSave } from "react-icons/fa";
import { MdEdit } from "react-icons/md";



export default function DashboardHead() {

    const [isOpen, setIsOpen] = useState(false)
    const { isEditing, setIsEditing } = useDynamicDashboardStore()

    return (
        <div className='p-5 text-[var(--colTextA)]'>
            <div className='flex items-center gap-2'>
                <button onClick={() => setIsOpen(true)} className='bg-[var(--colCard)] px-7 py-3 rounded-full shadow-lg flex items-center gap-2' >
                    <FaPlus />
                    <span>افزودن</span>
                </button>
                {
                    isEditing ? (
                        <button onClick={()=>setIsEditing(false)}  className='bg-[var(--colCard)] px-7 py-3 rounded-full shadow-lg flex items-center gap-2' >
                            <FaSave />
                            <span>ذخیره</span>
                        </button>
                    ) : (
                        <button onClick={()=>setIsEditing(true)} className='bg-[var(--colCard)] px-7 py-3 rounded-full shadow-lg flex items-center gap-2' >
                            <MdEdit />
                            <span>ویرایش</span>
                        </button>
                    )
                }

            </div>
            <WidgetModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div >
    )
}
