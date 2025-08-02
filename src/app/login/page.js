'use client'
import React, { useState } from 'react'
import CetecLogo from "@/asset/CetecLogo.svg"
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import TextInput from '@/components/Modules/Inputs/TextInput'
import PasswordInput from '@/components/Modules/Inputs/PasswordInput'
import loginUser from '@/axios/requests/auth/loginUser'
import { redirect } from 'next/navigation'
import { useToast } from '@/context/ToastContext'
import { useAuthStore } from '@/stores/useAuthStore'
import getUser from '@/axios/requests/auth/getUser'
import Loading from '@/components/Modules/Loadings/Loading'

export default function Login() {

  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()
  const { setUser } = useAuthStore()
  const { showToast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const formSubmit = async (data) => {
    setIsLoading(true)
    const user = data
    const loginResult = await loginUser(user)
    if (loginResult.isOk) {
      const user = await getUser()
      setUser(user)
      setIsLoading(false)
      showToast(loginResult.result, "success")
      redirect('/')
    } else {
      showToast(loginResult.result, "error")
    }
  }

  return (
    <div className='w-full h-[100dvh] flex items-center justify-center yekan_font text-[var(--colTextA)]'>

      <div className='bg-[var(--colCard)] flex flex-col items-center p-10 rounded-xl shadow-lg'>

        <CetecLogo className="text-[var(--colTextA)] block" />

        <h2 className='mt-10 md:text-xl'>{t('headerTitle')}</h2>

        <form onSubmit={handleSubmit(formSubmit)} className='mt-10 flex flex-col gap-10'>

          <TextInput place={'نام کاربری ...'} register={register} registerKey={'username'} />

          <PasswordInput place={'کلمه عبور ...'} register={register} registerKey={'password'} />

          <button disabled={isLoading} type='submit' className='flex items-center gap-2 justify-center bg-[var(--colBg)] py-4 rounded-full'>
            {
              isLoading ? (
                <Loading size={20} />
              ) : (
                'ورود'
              )
            }
          </button>

        </form>

      </div>

    </div>
  )
}
