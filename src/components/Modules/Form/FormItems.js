import React from 'react'
import TextInput from '../Inputs/TextInput'
import PasswordInput from '../Inputs/PasswordInput'
import SelectInput from '../Inputs/SelectInput'
import { Controller } from 'react-hook-form'

export default function FormItems({ inputType, fieldName, register, registerKey , optionKey , control }) {

    if (inputType === 'normalText') {
        return <TextInput register={register} registerKey={registerKey} place={fieldName} />
    }

    if (inputType === 'password') {
        return <PasswordInput register={register} registerKey={registerKey} place={fieldName} />
    }

    if (inputType === 'multiSelect') {
        return <Controller name={registerKey} control={control} render={({field})=>(<SelectInput optionKey={optionKey} value={field.value} onChange={field.onChange} />)} />  
    }

    return null
}
