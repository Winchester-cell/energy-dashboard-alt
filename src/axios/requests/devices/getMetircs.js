import apiProxy from "@/axios/instacne/proxy"

export const getMetrics = async () => {
    try {
        const res = await apiProxy.get('/devices/metrics')
        return res.data
    } catch (err) {
        return 'Error'
    }
}