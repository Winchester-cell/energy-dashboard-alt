import React from 'react'
import LineChartConfigModal from './LineChartOptions/LineChartConfigModal'
import BarChartConfig from './BarChartOptions/BarChartConfig'
import TableSetting from './CardOptions/TableSetting'

export default function WidgetOptionRender({ widgetTypeConfig, setIsButtonClicked }) {
    return (
        <>
            {
                widgetTypeConfig === 'line_chart' &&
                <LineChartConfigModal setIsButtonClicked={setIsButtonClicked} />
            }
            {
                widgetTypeConfig === 'bar_chart' &&
                <BarChartConfig setIsButtonClicked={setIsButtonClicked} />
            }
            {
                widgetTypeConfig === 'card' &&
                <TableSetting setIsButtonClicked={setIsButtonClicked} />
            }
        </>

    )
}
