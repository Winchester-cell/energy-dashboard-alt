import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default function PatientPersonalInfoSection({selectedPatient}) {
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <FaUserCircle className='w-16 h-16' />
                <div className='glass-card-b p-3 rounded-full'>{selectedPatient.name}</div>
                <div className='text-[16px] glass-card-b text-[#b7b7b7] p-3 rounded-full'>{selectedPatient.gender} | {selectedPatient.age} ساله</div>
            </div>
            <div className='text-[16px] glass-card-b w-[200px] py-3 rounded-full text-center'>
                وضعیت بیمار : {selectedPatient.status}
            </div>
        </div>
    )
}
