import React from 'react'
import FactoryTree from './FactoryTree'

export default function OrgChartModal({ isOrgModalOpen, setIsOrgModalOpen }) {
    return (
        <div className={`${isOrgModalOpen ? 'opacity-100 z-[999999]' : 'opacity-0 -z-[999999]'} transition-all duration-500 flex fixed items-center justify-center w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-md`}>

            <button onClick={() => setIsOrgModalOpen(false)} className="text-4xl fixed top-5 start-10">✖</button>

            <div className={`w-full flex flex-col gap-10 items-center justify-center transition-all duration-500 ${isOrgModalOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div dir='ltr' className='rounded-xl bg-[var(--colCard)] w-[900px] h-[600px] p-5 '>
                    <FactoryTree />
                </div>

            </div>

        </div>
    )
}
