import React from 'react'
import TextInput from '../Inputs/TextInput'
import PasswordInput from '../Inputs/PasswordInput'
import FilterTextInputByID from '../Inputs/FilterTextInputByID'
import FilterTextInput from '../Inputs/FilterTextInput'

export default function FormItems({ inputType, fieldName, register, registerKey , filterList }) {

    if (inputType === 'normalText') {
        return <TextInput register={register} registerKey={registerKey} place={fieldName} />
    }

    if (inputType === 'password') {
        return <PasswordInput register={register} registerKey={registerKey} place={fieldName} />
    }

    if (inputType === 'filterText') {
        return <FilterTextInput filterList={filterList} register={register} registerKey={registerKey} place={fieldName} />
    }

    if (inputType === 'filterTextID') {
        return <FilterTextInputByID filterList={filterList} register={register} registerKey={registerKey} place={fieldName} />
    }

    return null
}
