import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaAmbulance } from "react-icons/fa";


export default function PatientCardEmergency(props) {

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const { id, name, age, gender, onWay, mainArg, onPatientSelect, selectedPatient } = props

    return (
        <div style={{ border:selectedPatient.id === id ? '1px solid' : null , borderColor: selectedPatient.id === id  ? `${themeType === 'hospital' ? 'white' : 'var(--colTextA)' }` : null }} className={`cursor-pointer shadow-lg w-full ${onWay ?  style.gradCardBlue : style.cardStyleB} text-[12px] p-3 rounded-xl flex justify-between items-center`} onClick={() => onPatientSelect(id)} >
            <div className='flex flex-col gap-2'>
                <div className='font-bold'>{name}</div>
                <div className='text-[10px]'>{age} ساله - {gender}</div>
                <div className='font-bold text-[10px]'>{mainArg}</div>
            </div>
            {
                onWay &&
                <div className='text-[10px] flex flex-col items-center gap-1'>
                    <FaAmbulance className='w-8 h-8' />
                    <span>در مسیر</span>
                </div>
            }
        </div>
    )
}
