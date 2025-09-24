import AddPatientModal from '@/components/Modules/Modals/Hospital/AddPatientModal';
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";

export default function NewPatient() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-full'>
            <button onClick={() => setIsOpen(true)} className={`flex items-center gap-2 mb-5 gradCardGreen rounded-full text-lg font-bold py-5 px-7 text-white`}>
                <FaPlus />
                پذیرش بیمار جدید
            </button>
            <AddPatientModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
