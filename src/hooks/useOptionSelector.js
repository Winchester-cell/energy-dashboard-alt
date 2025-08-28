import { useDeviceMetricStore } from '@/stores/useDeviceMetricStore'
import { formatForDeviceMetricOptions, formatForProfileOptions } from '@/utils/formaters/formatForDeviceMetricOptions'
import { useEffect, useState } from 'react'
import useDevicesProfiles from './queryHooks/devices/useDevicesProfiles'
import useOrganizations from './queryHooks/organization/useOrganization'
import useDevices from './queryHooks/devices/useDevices'

export default function useOptionSelector(optionKey) {

    const [options, setOptions] = useState([])

    const { devicesMetrics } = useDeviceMetricStore()
    const { data: profilesData } = useDevicesProfiles()
    const { data: organizationsData } = useOrganizations()
    const { data: devicesData } = useDevices()

    useEffect(() => {

        if (optionKey === 'metrics') {
            setOptions(formatForDeviceMetricOptions(devicesMetrics))
        }

        if (optionKey === 'profile' && profilesData) {
            setOptions(formatForProfileOptions(profilesData?.results))
        }

        if (optionKey === 'organization' && organizationsData) {
            setOptions(formatForProfileOptions(organizationsData?.results))
        }

        if (optionKey === 'devices' && devicesData) {
            setOptions(formatForProfileOptions(devicesData?.results))
        }

    }, [devicesMetrics, profilesData, organizationsData , devicesData])

    return { options }

}
