const { default: apiProxy } = require("@/axios/instacne/proxy")

const fetchDashboard = async (dashboardID) => {
    try {
        
        const res = await apiProxy.get(`/dashboards/${dashboardID}`)
        console.log('Ejra mishe' , res.data);
        if(res.status === 200){
            return res.data
        }
    } catch (err) {
        return 'خطایی رخ داد'
    }
}

export default fetchDashboard