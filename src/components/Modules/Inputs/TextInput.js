'use client'
import React from 'react'

export default function TextInput({ registerKey, register, place }) {
    return (
        <div className='rounded-full bg-[var(--colBg)] w-full py-5 px-10'>
            <input {...register(registerKey)} placeholder={place} type="text" className='block w-full placeholder:text-[var(--colTextB)]' />
        </div>
    )
}
