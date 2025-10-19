import React from 'react'

export default function AiSimMapNode({ data }) {

    return (
        <div className='p-5 w-[250px] bg-[var(--colBg)] rounded-2xl'>
            <h2 className='flex w-full justify-end mb-3'>{data.name}</h2>
            <div className='flex items-center gap-2'>
                <div>{data.percent}%</div>
                <div className='w-full h-[15px] rounded-full bg-gray-400 overflow-hidden flex justify-end'>
                    <div style={{ width: `${data.percent}%` }} className='h-full bg-blue-500' />
                </div>
            </div>
        </div>
    )
}
