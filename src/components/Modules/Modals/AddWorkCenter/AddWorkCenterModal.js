import React from 'react'
import ModalBase from '../ModalBase'
import { useForm } from 'react-hook-form'
import FormItems from '../../Form/FormItems'
import SubmitInput from '../../Inputs/SubmitInput'
import { addWorkCenterFormFields } from '@/content/formsContents'
import { getValidProfileID } from '@/utils/formaters/getValidProfileID'
import useAddWorkCenter from '@/hooks/queryHooks/solutions/useAddWorkCenter'
import { useToast } from '@/context/ToastContext'

export default function AddWorkCenterModal({ isOpen, setIsOpen }) {

    const { register, control, handleSubmit } = useForm()
    const addWorkCenterMutation = useAddWorkCenter()
    const { showToast } = useToast()
    const profileSubmit = async (data) => {
        const newWorkCenter = {
            ...data,
            shedding_priority: 2147483647,
            monitoring_devices: getValidProfileID(data.monitoring_devices)
        }
        const result = await addWorkCenterMutation.mutateAsync(newWorkCenter)
        if (result.isOk) {
            showToast(result.result)
        } else {
            showToast(result.result, 'error')
        }
    }

    return (
        <ModalBase isOpen={isOpen} setIsOpen={setIsOpen} >
            <form onSubmit={handleSubmit(profileSubmit)} className='w-[70dvw] h-fit bg-[var(--colCard)] rounded-xl px-10 flex flex-col py-5 gap-5'>
                <h2 className='w-full text-center text-lg font-bold'>افزودن دستگاه</h2>
                {
                    addWorkCenterFormFields.map((field, index) => {
                        return <FormItems control={control} register={register} key={index} {...field} />
                    })
                }
                <div className='w-full flex justify-center'>
                    <SubmitInput bg='bg-[var(--colBg)]' buttonText={'ثبت مرکز'} />
                </div>
            </form>
        </ModalBase>
    )
}
