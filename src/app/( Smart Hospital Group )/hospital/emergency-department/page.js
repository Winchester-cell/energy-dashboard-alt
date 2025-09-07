'use client'
import { emergencyPatient } from '@/data/fakeData'
import React, { useState } from 'react'
import PatientsListBar from '@/components/Templates/Hospital/EmergencyDepartment/PatientsListBar'
import PatientsInfoContainer from '@/components/Templates/Hospital/EmergencyDepartment/PatientsInfoContainer'

export default function EmergencyPage() {

    const [selectedPatient, setSelectedPatient] = useState(emergencyPatient[0])

    return (

        <div className='w-full flex gap-5 p-5'>

            <PatientsListBar selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />

            <PatientsInfoContainer selectedPatient={selectedPatient} />

        </div>

    )
}
