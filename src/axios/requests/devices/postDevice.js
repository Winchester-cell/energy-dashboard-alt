import apiProxy from "@/axios/instacne/proxy"

export const postDevice = async (device) => {
    try {
        const res = await apiProxy.post('/devices', device)
        if (res.status === 201) {
            return { isOk: true, result: 'دستگاه ثبت شد' }
        }
        return { isOk: false, result: 'ثبت با خطا مواجه شد' }
    }
    catch (err) {
        return { isOk: false, result: 'خطای ناشناخته' }
    }
}