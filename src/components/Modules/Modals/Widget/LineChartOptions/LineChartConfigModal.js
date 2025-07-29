import { useLineChartConfigStore } from '@/stores/useChartConfigStore'
import React, { useState } from 'react'
import LineChart from '@/components/Modules/Charts/LineChart'
import DropDown from './DropDown'
import ColorGrid from './ColorGrid'
import { createLineChartWidget } from '@/utils/widgetsUtils/generateWidgets'
import useDynamicDashboardStore from '@/stores/useDynamicDashboardStore'

export default function LineChartConfigModal({ setIsButtonClicked }) {

    const { config, reset } = useLineChartConfigStore()
    const { widgets, setWidgets } = useDynamicDashboardStore()

    const addLineChart = () => {
        createLineChartWidget(widgets, setWidgets, config)
        reset()
    }

    return (
        <div className='w-[60%] h-[500px] bg-[var(--colCard)] shadow-lg rounded-xl p-5'>


            <div className='flex items-center justify-between'>

                <div className='flex items-center gap-2'>
                    <DropDown />
                    <ColorGrid />
                </div>

                <div className='flex items-center gap-2'>
                    <button onClick={addLineChart} className='w-fit rounded-full px-5 py-2 bg-[var(--colBg)]'>تایید</button>
                    <button onClick={() => setIsButtonClicked(false)} className='w-5 h-5 flex items-center justify-center p-5 rounded-full bg-[var(--colBg)]'>X</button>
                </div>


            </div>


            {
                config.data &&
                <div className='w-full mt-10 flex justify-center items-center'>
                    <div className='w-full p-5 h-[400px]'>
                        <LineChart {...config} />
                    </div>
                </div>
            }
        </div>
    )
}
