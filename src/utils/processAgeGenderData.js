export const processAgeCountData = (data) => {

    const listedValues = data?.map(item => item.value)
    const listedLabels = data?.map(item => item.name)
    if (!listedValues || !listedLabels) {
        return null
    }
    return {
        series: [{ data: listedValues }],
        categories: listedLabels
    }

}