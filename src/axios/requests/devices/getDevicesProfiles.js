import apiProxy from "@/axios/instacne/proxy"

export const getDevicesProfiles = async () => {
    try {
        const res = await apiProxy.get('/devices/profiles')
        return res.data
    } catch (err) {
        return 'Error'
    }
}