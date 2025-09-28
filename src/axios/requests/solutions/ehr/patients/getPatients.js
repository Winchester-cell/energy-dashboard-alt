const { default: apiProxy } = require("@/axios/instacne/proxy")

export const getPatients = async () => {
    try {
        const res = await apiProxy.get(`/solutions/ehr/patients/`)
        if (res.status === 200) {
            return res.data.results
        }
    } catch (err) {
        return {isOk:false , result:'Error!'}
    }
}