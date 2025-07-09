'use client'

import useSideBarStore from "@/stores/useSideBarStore";
import SideBarToggleButton from "./Modules/SideBar/SideBarToggleButton";
import Header from "./Modules/Header/Header";

export default function MainLayout({ children }) {
    const { isSideBarOpen, isSideBarCollapsed } = useSideBarStore()

    const closeClass = `w-full` 
    const openMenuClass = `w-screen lg:w-[calc(100%-240px)] lg:ms-[240px]` 
    const collapseClass = `w-screen lg:w-[calc(100%-100px)] lg:ms-[100px]` 

    const layoutClass = !isSideBarOpen
        ? closeClass
        : isSideBarCollapsed
        ? collapseClass
        : openMenuClass;

    return (
        <div className={`flex`}>
            <div className={layoutClass}>
                <div className="w-full flex items-center px-3 pt-5 gap-3">
                    <SideBarToggleButton />
                    <Header />
                </div>
                {children}
            </div>
        </div>
    );
}
