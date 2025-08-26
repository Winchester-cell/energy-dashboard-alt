import { useDeviceMetricStore } from '@/stores/useDeviceMetricStore'
import { formatForDeviceMetricOptions } from '@/utils/formaters/formatForDeviceMetricOptions'
import React, { useEffect, useState } from 'react'

export default function useOptionSelector(optionKey) {

    const [options, setOptions] = useState([])

    const { devicesMetrics } = useDeviceMetricStore()

    useEffect(() => {

        if (optionKey === 'metrics') {
            setOptions(formatForDeviceMetricOptions(devicesMetrics))
        }

        if(optionKey === 'profile'){
            
        }

    }, [devicesMetrics])

    return {options}
}
