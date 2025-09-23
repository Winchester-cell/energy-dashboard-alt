import React from 'react'
import ModalBase from '../ModalBase'

export default function ({ isOpen, setIsOpen, onConfirm }) {
    return (
        <ModalBase isOpen={isOpen} setIsOpen={setIsOpen} >

            <div className='w-[400px] rounded-2xl bg-[var(--colCard)] p-5'>
                <p className='w-full text-center text-xl mb-5'>آیا از حذف اطمینان دارید ؟</p>
                <div className='text-white flex items-center justify-center gap-5'>
                    <button onClick={() => onConfirm()} className='bg-green-600 w-[100px] py-2 rounded-lg'>تایید</button>
                    <button onClick={() => setIsOpen(false)} className='bg-red-600 w-[100px] py-2 rounded-lg'>لغو</button>
                </div>
            </div>

        </ModalBase>
    )
}
