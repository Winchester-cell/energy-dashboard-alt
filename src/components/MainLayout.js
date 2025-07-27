'use client'
import useSideBarStore from "@/stores/useSideBarStore";
import SideBarToggleButton from "./Modules/SideBar/SideBarToggleButton";
import Header from "./Modules/Header/Header";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import getUser from "@/axios/requests/auth/getUser";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import SideBar from "./Modules/SideBar/SideBar";

export default function MainLayout({ children }) {

    const { isSideBarOpen, isSideBarCollapsed } = useSideBarStore()
    const { setIsLoggedIn, setUser } = useAuthStore()
    const path = usePathname()

    const { data } = useQuery({
        queryKey: ['user'],
        queryFn: getUser
    })

    useEffect(() => {
        setIsLoggedIn(!!data)
        setUser(data)
    }, [data])

    const closeClass = `w-full`
    const openMenuClass = `w-screen lg:w-[calc(100%-240px)] lg:ms-[240px]`
    const collapseClass = `w-screen lg:w-[calc(100%-100px)] lg:ms-[100px]`

    const layoutClass = !isSideBarOpen
        ? closeClass
        : isSideBarCollapsed
            ? collapseClass
            : openMenuClass;


    if (path === '/login') {
        return <>{children}</>
    }

    return (
        <div className={layoutClass}>
            <div className="w-full flex items-center px-3 pt-5 gap-3">
                <SideBarToggleButton />
                <Header />
            </div>
            <SideBar />
            {children}
        </div>

    );
}
