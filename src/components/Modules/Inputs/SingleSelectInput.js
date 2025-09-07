import React from 'react'
import Select from 'react-select';
import { selectBoxStyle } from '@/data/stylesData';
import makeAnimated from 'react-select/animated';
import useOptionSelector from '@/hooks/useOptionSelector';

const animatedComponents = makeAnimated();

export default function SingleSelectInput({ staticOption = [], optionKey, value, onChange, place, style = selectBoxStyle }) {

    const { options } = optionKey ? useOptionSelector(optionKey) : { options: null }

    return (
        <Select
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={options || staticOption}
            isMulti={false}
            placeholder={place}
            styles={style}
            value={value}
            onChange={onChange}
            menuPortalTarget={document.body}
            menuPosition={'fixed'}
        />
    )
}
