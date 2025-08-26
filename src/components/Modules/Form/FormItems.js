import React from 'react'
import TextInput from '../Inputs/TextInput'
import PasswordInput from '../Inputs/PasswordInput'
import SelectInput from '../Inputs/SelectInput'
import { Controller } from 'react-hook-form'
import SingleSelectInput from '../Inputs/SingleSelectInput'

export default function FormItems({ inputType, fieldName, register, registerKey , optionKey , control }) {

    if (inputType === 'normalText') {
        return <TextInput register={register} registerKey={registerKey} place={fieldName} />
    }

    if (inputType === 'password') {
        return <PasswordInput register={register} registerKey={registerKey} place={fieldName} />
    }

    if (inputType === 'multiSelect') {
        return <Controller name={registerKey} control={control} render={({field})=>(<SelectInput place={fieldName} optionKey={optionKey} value={field.value} onChange={field.onChange} />)} />  
    }
    if (inputType === 'select') {
        return <Controller name={registerKey} control={control} render={({field})=>(<SingleSelectInput place={fieldName} optionKey={optionKey} value={field.value} onChange={field.onChange} />)} />  
    }

    return null
}
