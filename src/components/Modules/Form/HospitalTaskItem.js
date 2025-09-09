import { emergencyPatient } from '@/data/fakeData';
import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { GiCheckMark } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";



export default function HospitalTaskItem({ patientID, id, task, isDone }) {

    const [isD, setIsD] = useState(isDone)

    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const toggleTask = () => {
        setIsD(!isD)
    }

    return (
        <div className={`w-full ${style.cardStyleA} flex items-center shadow-lg p-5 rounded-xl justify-between`}>
            <span className={`${isD ? `line-through` : ``}`}>{task}</span>
            <span onClick={toggleTask} >{isD ? <IoCloseOutline /> : <GiCheckMark />}</span>
        </div>
    )
}
