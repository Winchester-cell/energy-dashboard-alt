import React from 'react'
import EmergencyTaskForm from './EmergencyTaskForm'
import SimpleBar from 'simplebar-react'
import VitalSignsSection from './VitalSignsSection'
import PatientPersonalInfoSection from './PatientPersonalInfoSection'
import { useThemeTypeStore } from '@/stores/useThemeTypeStore'
import { usePathname } from 'next/navigation'
import { colorVariantSelector } from '@/data/themeVariants'


export default function PatientsInfoContainer({ selectedPatient }) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    return (
        <div className={`w-full h-[83dvh] ${style.cardStyleA} shadow-lg rounded-2xl p-5 overflow-hidden`}>

            <SimpleBar className='h-full'>

                <PatientPersonalInfoSection selectedPatient={selectedPatient} />

                <VitalSignsSection selectedPatient={selectedPatient} />

                <EmergencyTaskForm selectedPatient={selectedPatient} />

            </SimpleBar>

        </div>
    )
}
