import { create } from "zustand";

const useDynamicDashboardStore = create((set) => ({

    isEditing: false,

    setIsEditing: (status) => set({ isEditing: status }),

    widgets: [],

    setWidgets: (newWidgets) => set({ widgets: newWidgets }),

}))

export default useDynamicDashboardStore