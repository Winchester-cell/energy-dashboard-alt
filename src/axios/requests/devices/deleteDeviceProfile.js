import apiProxy from "@/axios/instacne/proxy"

export const deleteDeviceProfile = async (id) => {
    try {
        const res = await apiProxy.delete('/devices/profiles/', { data: { id } })
        if (res.status === 200) {
            return 'پروفایل  حذف شد'
        }
    } catch (err) {
        return 'Somthing went wrong'
    }
}