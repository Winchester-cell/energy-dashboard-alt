import apiProxy from "@/axios/instacne/proxy"

export const postDeviceProfile = async (profile) => {
    try {
        const res = await apiProxy.post('/devices/profiles/' , profile)
        if(res.status === 201) {
            return 'پروفایل ثبت شد'
        }
    } catch (err) {
        return 'Somthing went wrong'
    }
}