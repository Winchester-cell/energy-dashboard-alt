'use client'
import React, { useState } from 'react'
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";


export default function PasswordInput({ registerKey, register, place }) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <div className='rounded-full bg-[var(--colBg)] w-full py-5 px-10 flex items-center justify-between'>
            <input {...register(registerKey)} placeholder={place} type={isPasswordVisible ? 'text' : 'password'} className='block' />
            <div onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='cursor-pointer'>
                {isPasswordVisible ? <RiEyeOffFill /> : <RiEyeFill />}
            </div>
        </div>
    )
}
