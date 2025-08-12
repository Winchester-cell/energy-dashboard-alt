import apiProxy from "@/axios/instacne/proxy"
import qs from 'qs'

export const getDonutChart = async (id) => {
    try {
        const res = await apiProxy.get('/reports', {
            params: {
                organization_id: 1,
                device_ids: id,
                metric_keys: ['count_in', 'count_out'],
                interval: 'hour',
                agg_func: 'sum',
                start: '2025-08-12T00:00:00Z',
                end: '2025-08-12T23:59:59Z'
            },
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        })

        return res.data

    } catch (err) {
        return 'failed'
    }
}