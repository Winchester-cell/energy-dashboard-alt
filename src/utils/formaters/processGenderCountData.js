export const processGenderCountData = (data) => {

    const listedValues = data?.map(item => item.value)
    const listedLabels = data?.map(item => item.name)
    if (!listedValues || !listedLabels) {
        return null
    }
    return { data: listedValues, labels: listedLabels }

}