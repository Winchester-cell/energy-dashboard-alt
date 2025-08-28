import React from 'react'
import SearchInput from '../Inputs/SearchInput'
import { FaPlus } from "react-icons/fa";


export default function PlatFormsHeadPart({ setIsOpen, btnName }) {
    return (
        <div className='py-5 px-3 flex items-center gap-2'>
            <button onClick={() => setIsOpen(true)} className='bg-[var(--colBg)] flex items-center gap-2 w-[150px] py-2 px-5 rounded-full'><FaPlus/>{btnName}</button>
            <button className='bg-[var(--colBg)] w-[150px] py-2 px-5 rounded-full'>فیلتر</button>
            <SearchInput />
        </div>
    )
}
