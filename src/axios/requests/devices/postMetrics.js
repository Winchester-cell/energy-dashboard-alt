import apiProxy from "@/axios/instacne/proxy"

export const postMetric = async (metric) => {
    try {
        const res = await apiProxy.post('/devices/metrics/' , metric)
        if(res.status === 201) {
            return 'متریک ثبت شد'
        }
    } catch (err) {
        return 'Somthing went wrong'
    }
}