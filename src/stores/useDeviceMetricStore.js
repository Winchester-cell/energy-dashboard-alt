import { create } from 'zustand';

export const useDeviceMetricStore = create((set) => ({

    devicesMetrics: [],

    setDevicesMetrics: (status) => set({ devicesMetrics: status }),

}))