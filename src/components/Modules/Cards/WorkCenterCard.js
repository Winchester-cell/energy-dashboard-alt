import { useTheme } from 'next-themes'
import React from 'react'

export default function WorkCenterCard(props) {

    const { name, code, capacity_hours_per_day, standard_rate_units_per_hour } = props
    const { theme } = useTheme()

    return (
        <div className={`w-full h-auto bg-[var(--colCard)] rounded-xl shadow-lg p-4 flex flex-col gap-3 ${theme === 'dark' ? `cardborder` : ``}`}>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{name}</div>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{code}</div>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{` ظرفیت روزانه : ${capacity_hours_per_day}`}</div>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{` نرخ استاندارد ساعتی : ${standard_rate_units_per_hour}`}</div>
            {/* <button onClick={() => deleteProfileMutation.mutate(id)} className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center flex justify-center'><MdDelete className='w-5 h-5' /></button> */}
        </div>
    )

}
