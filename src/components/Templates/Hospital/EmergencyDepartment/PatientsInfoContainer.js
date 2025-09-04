import ECG from '@/components/Modules/Cards/HospitalCards/ECG'
import { toPersianDigits } from '@/utils/formaters/toPersianDigits'
import React from 'react'
import { FaHeartbeat, FaUserCircle } from 'react-icons/fa'
import EmergencyTaskForm from './EmergencyTaskForm'

export default function PatientsInfoContainer({ selectedPatient }) {
    return (
        <div className='w-full h-[83dvh] glass-card rounded-2xl p-5'>

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

            <div className='glass-card mt-5 p-5 rounded-xl'>
                <h2 className='text-[20px] font-bold flex items-center gap-2'><FaHeartbeat className='text-2xl' /> علائم حیاتی زنده</h2>
                <div className='flex items-center gap-5 p-5'>
                    <div className='w-full text-center glass-card flex items-center justify-center flex-col gap-3 h-[100px] rounded-xl'>
                        <div>اشباع اکسیژن</div>
                        <div>{toPersianDigits(selectedPatient.vitalSigns.oxy)}%</div>
                    </div>
                    <div className='w-full text-center glass-card flex items-center justify-center flex-col gap-3 h-[100px] rounded-xl'>
                        <div>ضربان قلب</div>
                        <div>{toPersianDigits(selectedPatient.vitalSigns.heartbeat)}</div>
                    </div>
                    <div className='w-[400px] h-[100px] glass-card flex items-center justify-center rounded-xl'>
                        <ECG />
                    </div>
                </div>
            </div>

            <EmergencyTaskForm selectedPatient={selectedPatient} />
            
        </div>
    )
}
