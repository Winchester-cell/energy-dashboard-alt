import apiProxy from "@/axios/instacne/proxy"

const fetchDashboards = async () => {
    try {
        const res = await apiProxy.get('/dashboards')
        return res.data
    } catch (err) {
        return 'خطایی رخ داد'
    }
}

export default fetchDashboards