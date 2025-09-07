import React from 'react'
import { FaAmbulance } from "react-icons/fa";


export default function PatientCardEmergency(props) {
    const { id , name, age, gender, onWay , mainArg , onPatientSelect , selectedPatient } = props
    return (
        <div style={{borderColor:selectedPatient.id === id ? `white` : null}} className={`cursor-pointer w-full glass-card-b text-[12px] p-3 rounded-xl flex justify-between items-center`} onClick={()=>onPatientSelect(id)} >
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
