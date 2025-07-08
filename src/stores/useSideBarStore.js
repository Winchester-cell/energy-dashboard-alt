import { create } from "zustand";

const useSideBarStore = create((set) => ({

    isSideBarOpen: true , 
    toggleSideBar: () => set( (state) => ({ isSideBarOpen: !state.isSideBarOpen }) )

}))


export default useSideBarStore;