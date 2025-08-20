import React from 'react'

export default function DevicesProfileCard(props) {
    const { name, manufacturer } = props
    return (
        <div className={`w-full h-auto bg-[var(--colCard)] rounded-xl shadow-lg p-4 flex flex-col gap-3`}>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{name}</div>
            <div className='w-full text-[12px] bg-[var(--colBg)] p-3 rounded-md text-center'>{manufacturer}</div>
        </div>
    )
}
