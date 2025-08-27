import apiProxy from "@/axios/instacne/proxy"

export const getWorkCenters = async () => {
    try {
        const res = await apiProxy.get('/solutions/manufacturing/work-centers')
        return res.data
    } catch (err) {
        return 'Error'
    }
}