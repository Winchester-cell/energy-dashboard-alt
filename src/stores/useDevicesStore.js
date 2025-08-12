import { create } from 'zustand';

export const useDevicesStore = create((set) => ({

    currentDevice: null,

    setCurrentDevice: (status) => set({ currentDevice: status }),

}))