import { create } from 'zustand';

export const useThemeTypeStore = create((set) => ({

    themeType: 'hospital',

    setThemeType: (status) => set({ themeType: status }),

}))