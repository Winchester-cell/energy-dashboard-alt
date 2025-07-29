import { nanoid } from "nanoid"

const createLineChartWidget = (widgets, setWidgets, config) => {

    const newWidgets = [...widgets]
    const iValue = nanoid()
    const newWidget = {
        widget_id: iValue,
        title: config.title,
        config: config,
        widget_type: 'line_chart',
        layout: {
            lg: [{ i: iValue, x: 0, y: 0, w: 6, h: 5 }],
            md: [{ i: iValue, x: 0, y: 0, w: 7, h: 6 }],
            sm: [{ i: iValue, x: 0, y: 0, w: 8, h: 7 }],
        },
    }

    const finalWidgets = [newWidget, ...newWidgets]

    setWidgets(finalWidgets)

}


const createBarChart = (widgets, setWidgets, config) => {
    const newWidgets = [...widgets]
    const iValue = nanoid()
    const newWidget = {
        widget_id: iValue,
        title: config.title,
        config: config,
        widget_type: 'bar_chart',
        layout: {
            lg: [{ i: iValue, x: 0, y: 0, w: 6, h: 5 }],
            md: [{ i: iValue, x: 0, y: 0, w: 7, h: 6 }],
            sm: [{ i: iValue, x: 0, y: 0, w: 8, h: 7 }],
        },
    }

    const finalWidgets = [newWidget, ...newWidgets]

    setWidgets(finalWidgets)
}


const createTableWidget = (widgets, setWidgets, config) => {
    const newWidgets = [...widgets]
    const iValue = nanoid()
    const newWidget = {
        widget_id: iValue,
        title: config.title,
        config: config,
        widget_type: 'data_table',
        layout: {
            lg: [{ i: iValue, x: 0, y: 0, w: 6, h: 5 }],
            md: [{ i: iValue, x: 0, y: 0, w: 7, h: 6 }],
            sm: [{ i: iValue, x: 0, y: 0, w: 8, h: 7 }],
        },
    }

    const finalWidgets = [newWidget, ...newWidgets]

    setWidgets(finalWidgets)
}


export { createLineChartWidget, createTableWidget, createBarChart }