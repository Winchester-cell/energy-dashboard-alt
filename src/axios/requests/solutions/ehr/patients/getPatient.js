const { default: apiProxy } = require("@/axios/instacne/proxy")

export const getPatient = async (id) => {
    try {
        const res = await apiProxy.get(`/solutions/ehr/patients/${id}`)
        return res.data
    } catch (err) {
        return {isOk:false , result:'Error!'}
    }
}