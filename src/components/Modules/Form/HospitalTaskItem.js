import { emergencyPatient } from '@/data/fakeData';
import React, { useState } from 'react'
import { GiCheckMark } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";



export default function HospitalTaskItem({ patientID, id, task, isDone }) {

    const [ isD , setIsD ] = useState(isDone)

    const toggleTask = () => {
        setIsD(!isD)
    }

    return (
        <div className='w-full glass-card flex items-center p-5 rounded-xl justify-between'>
            <span className={`${isD ? `line-through` : ``}`}>{task}</span>
            <span onClick={toggleTask} >{isD ? <IoCloseOutline /> : <GiCheckMark />}</span>
        </div>
    )
}
