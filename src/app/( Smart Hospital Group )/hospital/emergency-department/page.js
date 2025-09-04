'use client'
import { emergencyPatient } from '@/data/fakeData'
import React, { useState } from 'react'
import PatientsListBar from '@/components/Templates/Hospital/EmergencyDepartment/PatientsListBar'
import PatientsInfoContainer from '@/components/Templates/Hospital/EmergencyDepartment/PatientsInfoContainer'
import EmergencyTaskForm from '@/components/Templates/Hospital/EmergencyDepartment/EmergencyTaskForm'


export default function EmergencyPage() {

    const [selectedPatient, setSelectedPatient] = useState(emergencyPatient[0])

    return (
        <div className='p-5 flex gap-5'>

            <PatientsListBar selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />

            <PatientsInfoContainer selectedPatient={selectedPatient} />

        </div>
    )
}
