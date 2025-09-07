import React from 'react'
import EmergencyTaskForm from './EmergencyTaskForm'
import SimpleBar from 'simplebar-react'
import VitalSignsSection from './VitalSignsSection'
import PatientPersonalInfoSection from './PatientPersonalInfoSection'


export default function PatientsInfoContainer({ selectedPatient }) {
    return (
        <div className='w-full h-[83dvh] glass-card rounded-2xl p-5 overflow-hidden'>

            <SimpleBar className='h-full'>

                <PatientPersonalInfoSection selectedPatient={selectedPatient} />

                <VitalSignsSection selectedPatient={selectedPatient} />

                <EmergencyTaskForm selectedPatient={selectedPatient} />

            </SimpleBar>

        </div>
    )
}
