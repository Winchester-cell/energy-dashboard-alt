import React from 'react'
import ModalBase from '../ModalBase'
import { addDevicesProfileFormFields } from '@/content/formsContents'
import FormItems from '../../Form/FormItems'
import { useForm } from 'react-hook-form'
import SubmitInput from '../../Inputs/SubmitInput'
import { data } from 'autoprefixer'

export default function AddDevicesProfilesModal({ isOpen, setIsOpen }) {

    const { register , control , handleSubmit } = useForm()
    const profileSubmit = async (data) => {
        console.log(data); 
    }

    return (
        <ModalBase isOpen={isOpen} setIsOpen={setIsOpen} >
            <form onSubmit={handleSubmit(profileSubmit)} className='w-[70dvw] h-[500px] bg-[var(--colCard)] rounded-xl px-10 flex flex-col py-5 gap-5'>
                <h2 className='w-full text-center text-lg font-bold'>افزودن پروفایل</h2>
                {
                    addDevicesProfileFormFields.map((field, index) => {
                        return <FormItems control={control} register={register} key={index} {...field} />
                    })
                }
                <div className='w-full flex justify-center mt-10'>
                    <SubmitInput bg='bg-[var(--colBg)]' buttonText={'ثبت پروفایل'} />
                </div>
            </form>
        </ModalBase>
    )
}
