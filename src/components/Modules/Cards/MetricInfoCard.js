import React from 'react'

export default function MetricInfoCard(props) {
    const {key_name , verbose_name , unit_of_measure} = props
    return (
        <div className={`w-full h-auto bg-[var(--colCard)] rounded-xl shadow-lg p-4 flex flex-col gap-3`}>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{key_name}</div>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{verbose_name}</div>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{unit_of_measure}</div>
            {/* <button onClick={() => deleteProfileMutation.mutate(id)} className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center flex justify-center'><MdDelete className='w-5 h-5' /></button> */}
        </div>
    )
}
