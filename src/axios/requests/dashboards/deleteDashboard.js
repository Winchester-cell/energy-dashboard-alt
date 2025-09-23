import apiProxy from "@/axios/instacne/proxy"

export const deleteDashboard = async (id) => {
    try {
        const res = await apiProxy.delete('/dashboards', { data: { id } })
        if (res.status === 200) {
            return 'داشبورد  حذف شد'
        }
    } catch (err) {
        return 'Somthing went wrong'
    }
}