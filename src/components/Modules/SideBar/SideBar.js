'use client'
import React from "react";
import i18n from "@/i18n";
import SettingsSection from "@/components/Templates/SideBar/SettingsSection";
import ProfileSection from "@/components/Templates/SideBar/ProfileSection";
import useSideBarStore from "@/stores/useSideBarStore";
import SideBarCollapseButton from "./SideBarCollapseButton";
import LogOutButton from "@/components/Templates/SideBar/LogOutButton";
import SimpleBar from "simplebar-react";
import sideBarLinksContent from "@/content/sideBarLinksContent";
import SideBarField from "./SideBarField";
import { usePathname } from "next/navigation";
import { colorVariantSelector } from "@/data/themeVariants";
import { useThemeTypeStore } from "@/stores/useThemeTypeStore";


export default function SideBar() {

  const { isSideBarCollapsed, isSideBarOpen, toggleSideBar } = useSideBarStore()
  const translateClass = i18n.language === 'en' ? `-translate-x-full` : `translate-x-full`
  const pathname = usePathname()
  const { themeType } = useThemeTypeStore()
  const style = colorVariantSelector(pathname, themeType)

  return (
    <>
      <div id="sidebar" className={`h-[100dvh] ${style.textStyleA} ${style.sidebarStyle} ${isSideBarCollapsed ? `w-[100px]` : ` w-[240px]`}  overflow-y-auto shadow-lg transition-all duration-300 ease-in-out fixed z-[9999999] top-0 start-0 ${isSideBarOpen ? 'translate-x-0' : translateClass}`}>
        <SimpleBar  style={{ maxHeight: '100vh' , overflow:'visible' }} >

          <div className={`flex w-full ${isSideBarCollapsed ? `justify-center` : `justify-end`}`}>
            <SideBarCollapseButton />
          </div>

          {/* Profile Section */}

          <div className="w-full ">
            <ProfileSection />
          </div>

          {/* Fields Section */}

          <div className="w-full flex flex-col gap-3 px-3">
            {
              sideBarLinksContent.fields.map((item, index) => {
                return <SideBarField key={index} {...item} />
              })
            }
          </div>

          {/* Settings Section */}

          <div className="w-full mt-7">
            <SettingsSection />
          </div>

          <div className="w-full px-5 mt-5">
            <div className={`w-full h-[0.5px] ${style.bgStyleA} mb-5`} />
            <LogOutButton />
          </div>

        </SimpleBar>
      </div>

      {/* mobile Overlay */}

      <div onClick={toggleSideBar} className={`block lg:hidden w-screen h-screen backdrop-blur-md fixed top-0 left-0 z-[900] bg-black bg-opacity-50 transition-all duration-700 ease-in-out ${isSideBarOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>

    </>
  );
}
