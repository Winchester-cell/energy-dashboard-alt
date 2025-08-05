import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../../Inputs/TextInput'
import postDashboard from '@/axios/requests/dashboards/postDashboard'
import { useToast } from '@/context/ToastContext'

export default function AddOrganizationModal({ isOpen, setIsOpen }) {

    const { register, handleSubmit } = useForm()
    const { showToast } = useToast()

    const submitHandler = async (data) => {
        console.log(data);
    }

    return (
        <div className={`${isOpen ? 'opacity-100 z-[999999]' : 'opacity-0 -z-[999999]'} transition-all duration-500 flex fixed items-center justify-center w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-md`}>

            <button onClick={() => setIsOpen(false)} className="text-4xl fixed top-5 start-10">✖</button>

            <div className={`w-full flex flex-col gap-10 items-center justify-center transition-all duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className='rounded-xl bg-[var(--colCard)] w-[500px] h-fit'>
                    <h2 className='w-full text-center mt-5'>سازمان زیرمجموعه جدید</h2>
                    <form onSubmit={handleSubmit(submitHandler)} className='p-5'>
                        <TextInput register={register} registerKey={'name'} place={'نام سازمان'} />
                        <div className='w-full text-center mt-5'>
                            <button type='submit' className='bg-[var(--colBg)] px-5 py-2 rounded-full border-2 border-[var(--colTextA)]'>ایجاد سازمان</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}
