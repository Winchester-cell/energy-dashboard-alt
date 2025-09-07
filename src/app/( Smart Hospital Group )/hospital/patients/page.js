import PatientListSection from '@/components/Templates/Hospital/Patients/PatientListSection'
import PatientSearchSection from '@/components/Templates/Hospital/Patients/PatientSearchSection'
import React from 'react'

export default function PatientsPage() {
    return (
        <div className='p-5'>
            <PatientSearchSection />
            <PatientListSection />
        </div>
    )
}
