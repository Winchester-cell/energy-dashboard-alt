import { useLineChartConfigStore } from '@/stores/useChartConfigStore'
import useDynamicDashboardStore from '@/stores/useDynamicDashboardStore'
import { createBarChart } from '@/utils/widgetsUtils/generateWidgets'
import React from 'react'

export default function BarChartConfig({ setIsButtonClicked }) {

    const { config, reset } = useLineChartConfigStore()
    const { widgets, setWidgets } = useDynamicDashboardStore()

    const addBarChart = () => {
        createBarChart(widgets, setWidgets, config)
        reset()
    }

    return (
        <div className='w-[500px] h-[500px] bg-[var(--colCard)] rounded-xl shadow-lg p-5 flex flex-col gap-5'>
            <button onClick={()=>setIsButtonClicked(false)} className='bg-[var(--colBg)] p-5 rounded-full'>خروج</button>
            <button onClick={addBarChart} className='bg-[var(--colBg)] p-5 rounded-full'>افزودن نمودار</button>
        </div>
    )
}
