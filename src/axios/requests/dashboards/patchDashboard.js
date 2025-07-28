const { default: apiProxy } = require("@/axios/instacne/proxy")

const patchDashboard = async (dashboardID, widgets) => {
    try {
        const res = await apiProxy.patch(`/dashboards/${dashboardID}`, { widgets })
        if (res.status === 200) {
            return 'داشبورد ذخیره شد'
        } else {
            return 'ارور'
        }
    } catch (err) {
        return 'خطایی رخ داد'
    }
}

export default patchDashboard