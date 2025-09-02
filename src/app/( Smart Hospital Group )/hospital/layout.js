import React from 'react'

export default function HospitalLayout({ children }) {
    return (
        <div>
            {/* <div className='w-screen h-screen fixed top-0 left-0 -z-40'>
                <div className='relative h-full w-full'>
                    <img className='absolute top-0 w-full h-full object-cover z-10' src="/images/hosBG.png"/>
                    <div className='absolute top-0 w-full h-full z-20 bg-[#00000081]'></div>
                </div>
            </div> */}
            {children}
        </div>
    )
}
