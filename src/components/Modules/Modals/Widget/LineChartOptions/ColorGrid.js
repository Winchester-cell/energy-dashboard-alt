import { useLineChartConfigStore } from '@/stores/useChartConfigStore'
import React, { useState } from 'react'

export default function ColorGrid() {


    const { setColor } = useLineChartConfigStore()
    const [dropdownShowing, setDropdownShowing] = useState(false)

    const colors = [
        '#008ffb', '#00e396', '#7f1d1d', '#fb923c', '#facc15', '#6b21a8'
    ]

    const colorSelectHandler = (color) => {
        setColor(color)
        setDropdownShowing(false)
    }

    return (
        <div className='relative'>
            <button onClick={() => setDropdownShowing(!dropdownShowing)} className='bg-[var(--colBg)] w-fit px-5 py-2 rounded-full shadow-md'>
                انتخاب رنگ
            </button>
            <div className={`${dropdownShowing ? `visible opacity-100` : `invisible opacity-0`} grid grid-cols-3 transition-all ease-in duration-500 top-12 right-0 absolute z-50 bg-[var(--colBg)] gap-2 items-center w-fit px-5 py-2 rounded-xl shadow-md`}>
                {colors.map(color => (
                    <div key={color} onClick={() => colorSelectHandler(color)} style={{ backgroundColor: color }} className='w-5 h-5 rounded-full cursor-pointer'></div>
                ))}
            </div>
        </div>

    )
}
