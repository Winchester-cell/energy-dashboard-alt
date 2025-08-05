import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";


export default function ControlCenterHeadPart() {
    return (
        <div className='w-full flex gap-5'>
            <div className='flex items-center bg-[var(--colCard)] px-5 py-3 gap-3 rounded-full'>
                <FaSearch />
                <input type="text" placeholder='جستوجو ...' />
            </div>
            <div className='flex items-center bg-[var(--colCard)] px-7 py-3 gap-3 rounded-full'>
                <IoFilter />
                فیلتر
            </div>
        </div>
    )
}
