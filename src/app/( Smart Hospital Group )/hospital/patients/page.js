'use client'
import NewPatient from '@/components/Templates/Hospital/Patients/NewPatient'
import PatientListSection from '@/components/Templates/Hospital/Patients/PatientListSection'
import PatientSearchSection from '@/components/Templates/Hospital/Patients/PatientSearchSection'
import { patients } from '@/data/fakeData'
import React, { useState } from 'react'

export default function PatientsPage() {

    const [filteredList, setFilteredList] = useState(patients)

    return (
        <div className='p-5'>
            <NewPatient />
            <PatientSearchSection filteredList={filteredList} setFilteredList={setFilteredList} />
            <PatientListSection filteredList={filteredList} setFilteredList={setFilteredList} />
        </div>
    )
}
