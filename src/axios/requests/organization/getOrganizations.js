import api from "../../instacne/proxy"

const getOrganizations = async () => {
    try {
        const res = await api.get('/organizations')
        return res.data
    } catch (err) {
        return 'somthing went long'
    }

}

export default getOrganizations