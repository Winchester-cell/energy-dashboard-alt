import PatientCardEmergency from '@/components/Modules/Cards/HospitalCards/PatientCardEmergency'
import { emergencyPatient } from '@/data/fakeData'
import React from 'react'
import SimpleBar from 'simplebar-react'

export default function PatientsListBar({ selectedPatient , setSelectedPatient}) {

    const onPatientSelect = (id) => {
        const targetIndex = emergencyPatient.findIndex( p => p.id === id )
        setSelectedPatient(emergencyPatient[targetIndex])
    }

    return (
        <div className='w-[300px] h-[83dvh] glass-card rounded-2xl flex flex-col gap-2 p-5'>
            <SimpleBar className='h-full'>
                <div className='flex flex-col gap-3'>
                    {
                        emergencyPatient.map(p => {
                            return <PatientCardEmergency selectedPatient={selectedPatient} onPatientSelect={onPatientSelect} key={p.id} {...p} />
                        })
                    }
                </div>
            </SimpleBar>
        </div>
    )
}
