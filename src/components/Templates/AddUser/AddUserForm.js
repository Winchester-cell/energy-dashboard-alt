'use client'
import registerUser from '@/axios/requests/auth/registerUser'
import getOrganizations from '@/axios/requests/organization/getOrganizations'
import FormItems from '@/components/Modules/Form/FormItems'
import addUserFormContent from '@/content/addUserFormContent'
import { useToast } from '@/context/ToastContext'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

export default function AddUserForm() {

  const methods = useForm();
  const { showToast } = useToast()

  const formSubmit = async (data) => {
    const organizations = await getOrganizations()
    const isOrganizationExist = organizations.some(item => data.organization === item._id)
    if (!isOrganizationExist) {
      showToast('سازمان وارد شده معتبر نمیباشد ', 'error')
    }else{
      const result = registerUser(data)
      alert(result)
      
    }
  }

  return (
    <div className='p-5 text-[var(--colTextA)] lg:flex items-center justify-center lg:mt-10'>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(formSubmit)} className='bg-[var(--colCard)] w-full lg:w-[50%] text-center rounded-xl shadow-lg p-5'>
          <h2 className='font-semibold mb-10'> ثبت کاربر جدید</h2>
          <div className='grid grid-cols-2 gap-5'>
            <>
              {
                addUserFormContent.fields.map((field, index) => {
                  return <FormItems key={index} {...field} register={methods.register} />
                })
              }
              <button className='bg-[var(--colBg)] rounded-full font-semibold'>ثبت کاربر</button>
            </>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}


