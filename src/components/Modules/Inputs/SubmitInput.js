'use client'
import React from 'react'

export default function SubmitInput({buttonText , bg='bg-[var(--colCard)]'}) {
    return (
        <button
            type='submit'
            className={`rounded-full ${bg} w-[350px] py-5 px-10 flex items-center justify-center font-semibold`}>
            {buttonText}
        </button>
    )
}
