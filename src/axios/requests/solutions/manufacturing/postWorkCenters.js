import apiProxy from "@/axios/instacne/proxy"

export const postWorkCenter = async (workCenter) => {
    try {

        const res = await apiProxy.post(`/solutions/manufacturing/work-centers/`, workCenter)
        if (res.status === 201) {
            return { isOk: true, result: 'مرکز کاری با موفقیت ثبت شد' }
        }
        return { isOk: false, result: 'ثبت با خطا مواجه شد' }

    } catch (err) {
        
        return { isOk: false, result: 'خطای سرور' }
    }
}