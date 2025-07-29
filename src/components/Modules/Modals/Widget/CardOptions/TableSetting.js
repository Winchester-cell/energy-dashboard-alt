import { useLineChartConfigStore } from '@/stores/useChartConfigStore'
import useDynamicDashboardStore from '@/stores/useDynamicDashboardStore'
import { createTableWidget } from '@/utils/widgetsUtils/generateWidgets'
import React from 'react'

export default function TableSetting({ setIsButtonClicked }) {

    const { config, reset } = useLineChartConfigStore()
    const { widgets, setWidgets } = useDynamicDashboardStore()

    const tablewidgetHandler = () => {
        createTableWidget(widgets, setWidgets, config)
        reset()
    }

    return (
        <div className='w-[500px] h-[500px] bg-[var(--colCard)] rounded-xl shadow-lg  flex flex-col gap-5 p-5'>
            <button onClick={() => setIsButtonClicked(false)}>خروج</button>
            <button onClick={tablewidgetHandler} className='bg-[var(--colBg)] p-5 rounded-full'>
                نمودار بیشترین مصرف کنندگان
            </button>
            <button className='bg-[var(--colBg)] p-5 rounded-full'>
                کارت مصرف بیشنیه
            </button>
            <button className='bg-[var(--colBg)] p-5 rounded-full'>
                کارت مصرف هفتگی
            </button>
        </div>
    )
}
