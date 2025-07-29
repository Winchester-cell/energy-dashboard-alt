import { datasets } from '@/data/db'
import { useLineChartConfigStore } from '@/stores/useChartConfigStore'
import React, { useState } from 'react'

export default function DropDown() {

    const { setData, setTitle } = useLineChartConfigStore()
    const [dropdownShowing, setDropdownShowing] = useState(false)

    const selectHandler = (dataID) => {
        const targetData = datasets.find(d => dataID === d.id)
        setTitle(targetData.title)
        setData(targetData.data)
        setDropdownShowing(false)
    }

    return (
        <div className='relative'>
            <button onClick={() => setDropdownShowing(!dropdownShowing)} className='bg-[var(--colBg)] w-fit px-5 py-2 rounded-full shadow-md'>
                انتخاب موضوع
            </button>
            <ul className={`${dropdownShowing ? `visible opacity-100` : `invisible opacity-0`} transition-all ease-in duration-500 top-12 right-0 absolute z-50 bg-[var(--colBg)] flex flex-col gap-2 items-center w-fit px-5 py-2 rounded-xl shadow-md`}>
                {
                    datasets.map((d, index) => (
                        <li className={`${index === datasets.length - 1 ? `` : `border-b`} cursor-pointer btnHoverNoBroder pb-2 border-[var(--colTextB)]`} key={d.id} onClick={() => selectHandler(d.id)} >{d.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}
