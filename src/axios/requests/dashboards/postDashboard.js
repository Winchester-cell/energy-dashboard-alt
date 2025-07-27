import apiProxy from "@/axios/instacne/proxy"

const postDashboard = async (dashboard) => {
    try {
        const res = await apiProxy.post('/dashboards', dashboard)
        if (res.status === 201) {
            return { isOk: true, result: 'داشبورد با موفقیت ایجاد شد' }
        } else {
            return { isOk: false, result: 'خطایی رخ داد' }
        }
    } catch (err) {
        return { isOk: false, result: 'خطایی رخ داد' }
    }
}

export default postDashboard