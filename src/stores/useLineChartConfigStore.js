// stores/chartConfigStore.js
import { create } from 'zustand'

export const useLineChartConfigStore = create((set) => ({
  config: {
    color: '#2196f3',
    data: [],
    title: '',
  },
  setColor: (color) => set((state) => ({
    config: { ...state.config, color }
  })),
  setData: (data) => set((state) => ({
    config: { ...state.config, data }
  })),
  setTitle: (title) => set((state) => ({
    config: { ...state.config, title }
  })),
  reset: () => set({
    config: { color: '#2196f3', data: [], title: '' }
  }),
}))
