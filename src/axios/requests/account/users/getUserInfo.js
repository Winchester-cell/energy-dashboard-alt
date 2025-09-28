import apiProxy from "@/axios/instacne/proxy"

export const getUserInfo = async (id) => {
    try {
        const res = await apiProxy.get(`/users/${id}/`)
        return res.data
    } catch (err) {
        return { isOk: false, result: 'Error!' }
    }
}