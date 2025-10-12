import React from 'react'
import Select from 'react-select';
import { selectBoxStyle } from '@/data/stylesData';
import makeAnimated from 'react-select/animated';
import useOptionSelector from '@/hooks/useOptionSelector';

const animatedComponents = makeAnimated();

export default function SingleSelectInput({ hasDefaultSelect=false , menuPosition = 'fixed', menuPortalTarget = document.body, staticOption = [], optionKey, value, onChange, place, style = selectBoxStyle }) {

    const { options } = optionKey ? useOptionSelector(optionKey) : { options: null }

    return (
        <Select
            defaultValue={hasDefaultSelect ? staticOption[0] || options[0] : null }
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={options || staticOption}
            isMulti={false}
            placeholder={place}
            styles={style}
            value={value}
            onChange={onChange}
            menuPortalTarget={menuPortalTarget}
            menuPosition={menuPosition}
        />
    )
}
