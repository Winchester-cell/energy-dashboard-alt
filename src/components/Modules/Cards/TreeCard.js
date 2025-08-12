import React from 'react'
import { FaUserCircle } from "react-icons/fa";

export default function TreeCard() {
  return (
    <div
      className="inline-block w-[200px] h-[200px] bg-[var(--colBg)] rounded-xl shadow  items-center justify-center text-white text-center"
    >
      <div className='w-full flex justify-center p-5'>
        <FaUserCircle className='w-10 h-10' />
      </div>
    </div>
  )
}

