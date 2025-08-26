import React from 'react'
import ModalBase from '../ModalBase'
import FormItems from '../../Form/FormItems'
import SubmitInput from '../../Inputs/SubmitInput'
import { useForm } from 'react-hook-form'
import { addDeviceFormFields } from '@/content/formsContents'


export default function AddDeviceModal({ isOpen, setIsOpen }) {

    const { register, control, handleSubmit } = useForm()
    const profileSubmit = (data) => {
        
    }

    return (
        <ModalBase isOpen={isOpen} setIsOpen={setIsOpen} >
            <form onSubmit={handleSubmit(profileSubmit)} className='w-[70dvw] h-[500px] bg-[var(--colCard)] rounded-xl px-10 flex flex-col py-5 gap-5'>
                <h2 className='w-full text-center text-lg font-bold'>افزودن دستگاه</h2>
                {
                    addDeviceFormFields.map((field, index) => {
                        return <FormItems control={control} register={register} key={index} {...field} />
                    })
                }
                <div className='w-full flex justify-center mt-10'>
                    <SubmitInput bg='bg-[var(--colBg)]' buttonText={'ثبت دستگاه'} />
                </div>
            </form>
        </ModalBase>
    )
}
