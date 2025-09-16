import React from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../../Inputs/TextInput'
import postDashboard from '@/axios/requests/dashboards/postDashboard'
import { useToast } from '@/context/ToastContext'
import useAddDashboard from '@/hooks/queryHooks/dashboard/useDashboardUpdate'

export default function AddDashboardModal({ isOpen, setIsOpen }) {

    const { register, handleSubmit , reset } = useForm()
    const { showToast } = useToast()
    const dashboardMutation = useAddDashboard()

    const submitHandler = async (data) => {
        const newDashboard = { name: data.name, is_default: false, widgets: [] }
        const createDashboardResult = await dashboardMutation.mutateAsync(newDashboard)        
        if (createDashboardResult.isOk) {
            reset()
            showToast(createDashboardResult.result)
            setIsOpen(false)
        }else{
            showToast(createDashboardResult.result , 'error')
        }
    }

    return (
        <div className={`${isOpen ? 'opacity-100 z-[999999]' : 'opacity-0 -z-[999999]'} transition-all duration-500 flex fixed items-center justify-center w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-md`}>

            <button onClick={() => setIsOpen(false)} className="text-4xl fixed top-5 start-10">✖</button>

            <div className={`w-full flex flex-col gap-10 items-center justify-center transition-all duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className='rounded-xl bg-[var(--colCard)] w-[500px] h-fit'>
                    <h2 className='w-full text-center mt-5'>ایجاد داشبورد جدید </h2>
                    <form onSubmit={handleSubmit(submitHandler)} className='p-5'>
                        <TextInput register={register} registerKey={'name'} place={'نام داشبورد'} />
                        <div className='w-full text-center mt-5'>
                            <button type='submit' className='bg-[var(--colBg)] px-5 py-2 rounded-full border-2 border-[var(--colTextA)]'>ایجاد داشبورد</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}
