import HospitalTaskItem from '@/components/Modules/Form/HospitalTaskItem'
import React from 'react'

export default function EmergencyTaskForm({ selectedPatient }) {
    return (

        <div className='w-full glass-card mt-5 p-5 rounded-xl'>
            <h2>وظایف پروتکل درمانی</h2>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {selectedPatient.emergencyTasks.map((t, index) => <HospitalTaskItem key={index} patientID={selectedPatient.id} {...t} />)}
            </div>
        </div>

    )
}
