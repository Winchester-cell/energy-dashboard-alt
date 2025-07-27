'use client'
import React from "react";
import i18n from "@/i18n";
import SettingsSection from "@/components/Templates/SideBar/SettingsSection";
import NavigationSection from "@/components/Templates/SideBar/NavigationSection";
import ProfileSection from "@/components/Templates/SideBar/ProfileSection";
import useSideBarStore from "@/stores/useSideBarStore";
import SideBarCollapseButton from "./SideBarCollapseButton";
import LogOutButton from "@/components/Templates/SideBar/LogOutButton";
import SimpleBar from "simplebar-react";


export default function SideBar() {

  const { isSideBarCollapsed, isSideBarOpen, toggleSideBar } = useSideBarStore()
  const translateClass = i18n.language === 'en' ? `-translate-x-full` : `translate-x-full`


  return (
    <>
      <div id="sidebar" className={`h-[100dvh] ${isSideBarCollapsed ? `w-[100px]` : ` w-[240px]`} bg-[var(--colCard)] overflow-y-auto shadow-lg transition-all duration-300 ease-in-out fixed z-[999999] top-0 start-0 ${isSideBarOpen ? 'translate-x-0' : translateClass}`}>
        <SimpleBar style={{ maxHeight: '100vh' }} >


          <div className={`flex w-full ${isSideBarCollapsed ? `justify-center` : `justify-end`}`}>
            <SideBarCollapseButton />
          </div>

          {/* Profile Section */}

          <div className="w-full ">
            <ProfileSection />
          </div>


          {/* Navigation Section */}

          <div className="w-full">
            <NavigationSection />
          </div>

          {/* Settings Section */}
          <div className="w-full mt-7">
            <SettingsSection />
          </div>

          <div className="w-full px-5 mt-5">
            <div className="w-full h-[0.5px] bg-[var(--colTextB)] mb-5" />
            <LogOutButton />
          </div>

        </SimpleBar>
      </div>

      {/* mobile Overlay */}

      <div onClick={toggleSideBar} className={`block lg:hidden w-screen h-screen backdrop-blur-md fixed top-0 left-0 z-[900] bg-black bg-opacity-50 transition-all duration-700 ease-in-out ${isSideBarOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>

    </>
  );
}
