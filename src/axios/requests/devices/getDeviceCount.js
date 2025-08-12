import apiProxy from "@/axios/instacne/proxy"

export const getDeviceCount = async (id) => {
    try {
        const res = await apiProxy.get(`/devices/count/${id}`)
        return res.data
    } catch (err) {
        return 'Error'
    }
}