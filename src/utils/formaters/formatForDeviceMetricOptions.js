import { list } from "postcss"

export const formatForDeviceMetricOptions = (list) => {
    if (Array.isArray(list)) {
        const formattedList = list.map(item => {
            return { value: item.id, label: item.verbose_name }
        })
        return formattedList
    }
    return []
}

export const formatForProfileOptions = (list) => {
    if (Array.isArray(list)) {
        const formattedList = list.map(item => {
            return { value: item.id, label: item.name }
        })
        return formattedList
    }
    return []
}