import apiProxy from "@/axios/instacne/proxy"

export const getDevices = async () => {
    try {
        const res = await apiProxy.get('/devices')
        return res.data
    } catch (err) {
        return 'Error'
    }
}