'use client'

import useSideBarStore from "@/stores/useSideBarStore";
import SideBarToggleButton from "./Modules/SideBar/SideBarToggleButton";
import Header from "./Modules/Header/Header";

export default function MainLayout({ children }) {

    const { isSideBarOpen } = useSideBarStore()

    const closeMenuClass = `w-full`
    const openMenuClass = `w-screen lg:w-[calc(100%-240px)] lg:ms-[240px]`

    return (
        <div className={`flex`}>
            <div className={isSideBarOpen ? openMenuClass : closeMenuClass}>
                <div className="w-full flex items-center px-3 pt-5 gap-3">
                    <SideBarToggleButton />
                    <Header />
                </div>
                {children}
            </div>
        </div>
    );
}
