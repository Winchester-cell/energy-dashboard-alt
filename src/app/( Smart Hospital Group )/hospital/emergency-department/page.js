'use client'
import { emergencyPatient } from '@/data/fakeData'
import React, { useState } from 'react'
import PatientsListBar from '@/components/Templates/Hospital/EmergencyDepartment/PatientsListBar'
import PatientsInfoContainer from '@/components/Templates/Hospital/EmergencyDepartment/PatientsInfoContainer'
import NewPatient from '@/components/Templates/Hospital/Patients/NewPatient'

export default function EmergencyPage() {

    const [selectedPatient, setSelectedPatient] = useState(emergencyPatient[0])

    return (

        <>
            <div className='px-5 pt-5'>
                <NewPatient />
            </div>

            <div className='w-full flex gap-5 pb-5 px-5'>

                <PatientsListBar selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />

                <PatientsInfoContainer selectedPatient={selectedPatient} />

            </div>
        </>


    )
}
