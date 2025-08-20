export const formatForDeviceMetricOptions = (list) => {
    if (Array.isArray(list)) {
        const formattedList = list.map(item => {
            return { value: item.id, label: item.verbose_name }
        })
        return formattedList
    }
    return []
}