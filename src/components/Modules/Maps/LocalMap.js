import React from 'react'

export default function LocalMap() {
    return (
        <div className='w-full p-1 bg-[var(--colCard)] h-[clamp(320px,20dvw,500px)] rounded-xl shadow-md flex-grow'>
            <div className='w-full h-full bg-[var(--colBg)] rounded-xl relative p-3 grid grid-cols-3 gap-5'>

                <div className='bg-[var(--colCard)] rounded-lg col-span-2'></div>
                <div className='bg-[var(--colCard)] rounded-lg row-span-2'></div>
                <div className='bg-[var(--colCard)] rounded-lg'></div>
                <div className='bg-[var(--colCard)] rounded-lg'></div>
                <div className='bg-[var(--colCard)] rounded-lg col-span-2'></div>
                <div className='bg-[var(--colCard)] rounded-lg'></div>
      
                

                <div className='w-5 h-5 bg-blue-400 rounded-full absolute top-[20%] left-[25%] marker' ></div>
                <div className='w-5 h-5 bg-blue-400 rounded-full absolute top-[20%] left-[50%] marker' ></div>
                <div className='w-5 h-5 bg-blue-400 rounded-full absolute top-[75%] left-[70%] marker' ></div>
                <div className='w-5 h-5 bg-blue-400 rounded-full absolute top-[80%] left-[25%] marker' ></div>
                <div className='w-5 h-5 bg-blue-400 rounded-full absolute top-[40%] left-[80%] marker' ></div>
                <div className='w-5 h-5 bg-blue-400 rounded-full absolute top-[50%] left-[50%] marker' ></div>

            </div>
        </div>
    )
}
