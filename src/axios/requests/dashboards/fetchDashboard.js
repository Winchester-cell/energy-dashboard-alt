const { default: apiProxy } = require("@/axios/instacne/proxy")

const fetchDashboard = async (dashboardID) => {
    try {
        const res = await apiProxy.get(`/dashboards/${dashboardID}`)
        if (res.status === 200) {
            return res.data
        }
    } catch (err) {
        if (err.response?.status === 404) {
            return 404
        }
        return 'خطایی رخ داد'
    }
}

export default fetchDashboard