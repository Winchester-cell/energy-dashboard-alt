'use client'
import useFilteredList from '@/hooks/useFilteredList'
import useList from '@/hooks/useList'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export default function FilterTextInput({ registerKey, register, place, filterList }) {

    const [isFocused, setIsFocused] = useState(false)
    const { list } = useList(filterList)
    const { filteredList, inputValue, setInputValue } = useFilteredList(list)

    const { setValue } = useFormContext()

    const clickHandler = (item) => {
        setInputValue(typeof (item) == 'object' ? item.name : item)
        setValue(registerKey, typeof (item) == 'object' ? item.name : item)
    }

    return (
        <div className='rounded-full bg-[var(--colBg)] w-full py-5 px-10 relative'>

            <input
                {...register(registerKey)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={place}
                type="text"
                className="block"
            />
            {
                isFocused && (
                    <div className='w-full px-2 border top-16 z-[9999] absolute shadow-md bg-[var(--colCard)] rounded-xl'>
                        <ul className='max-h-48 overflow-y-auto bg-[var(--colCard)] mt-1 text-[var(--colTextA)]'>
                            {
                                filteredList.map((item, index) => {
                                    return <li onClick={() => clickHandler(item)} className='cursor-pointer py-5' key={index}>{typeof (item) == 'object' ? item.name : item}</li>
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
