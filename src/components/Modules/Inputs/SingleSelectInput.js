import React from 'react'
import Select from 'react-select';
import { selectBoxStyle } from '@/data/stylesData';
import makeAnimated from 'react-select/animated';
import useOptionSelector from '@/hooks/useOptionSelector';

const animatedComponents = makeAnimated();

export default function SingleSelectInput({ optionKey, value, onChange, place }) {

    const { options } = useOptionSelector(optionKey)

    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={options ? options : []}
            isMulti={false}
            placeholder={place}
            styles={selectBoxStyle}
            value={value}
            onChange={onChange}
        />
    )
}
