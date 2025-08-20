import React from 'react'

export default function ModalBase({ isOpen, setIsOpen, children }) {
    return (
        <div className={`${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} z-[999999] transition-all duration-500 flex fixed items-center justify-center w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-md`}>

            <button onClick={() => setIsOpen(false)} className="text-4xl fixed top-5 start-10">✖</button>

            <div className={`w-full flex flex-col gap-10 items-center justify-center transition-all duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                {children}

            </div>

        </div>
    )
}
