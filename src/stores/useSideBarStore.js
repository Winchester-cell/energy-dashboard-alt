import { create } from "zustand";

const useSideBarStore = create((set) => ({

    isSideBarOpen: true,
    toggleSideBar: () => set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
    isSideBarCollapsed: false,
    toggleSideBarCollapse: () => set((state) => ({ isSideBarCollapsed: !state.isSideBarCollapsed })),

}))


export default useSideBarStore;