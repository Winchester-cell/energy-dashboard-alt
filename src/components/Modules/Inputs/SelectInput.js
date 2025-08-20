import React from 'react'
import Select from 'react-select';
import { selectBoxStyle } from '@/data/stylesData';
import makeAnimated from 'react-select/animated';
import useOptionSelector from '@/hooks/useOptionSelector';

const animatedComponents = makeAnimated();

export default function SelectInput({ optionKey, value, onChange }) {

    const { options } = useOptionSelector(optionKey)

    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={options ? options : []}
            isMulti
            placeholder={'انتخاب متریک'}
            styles={selectBoxStyle}
            value={value}
            onChange={onChange}
        />
    )
}
