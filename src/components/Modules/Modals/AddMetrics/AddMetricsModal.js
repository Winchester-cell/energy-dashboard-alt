import { addMetricsFormFields } from '@/content/formsContents'
import React from 'react'
import FormItems from '../../Form/FormItems'
import SubmitInput from '../../Inputs/SubmitInput'
import { useForm } from 'react-hook-form'
import ModalBase from '../ModalBase'

export default function AddMetricsModal({ isOpen, setIsOpen }) {

    const { register, control, handleSubmit } = useForm()
    const profileSubmit = async (data) => {
        console.log(data);
    }

    return (
        <ModalBase isOpen={isOpen} setIsOpen={setIsOpen} >
            <form onSubmit={handleSubmit(profileSubmit)} className='w-[70dvw] h-[500px] bg-[var(--colCard)] rounded-xl px-10 flex flex-col py-5 gap-5'>
                <h2 className='w-full text-center text-lg font-bold'>افزودن پروفایل</h2>
                {
                    addMetricsFormFields.map((field, index) => {
                        return <FormItems control={control} register={register} key={index} {...field} />
                    })
                }
                <div className='w-full flex justify-center mt-10'>
                    <SubmitInput bg='bg-[var(--colBg)]' buttonText={'ثبت متریک'} />
                </div>
            </form>
        </ModalBase>
    )
}
