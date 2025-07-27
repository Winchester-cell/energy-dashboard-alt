import React from 'react'
import SideBar from '@/components/Modules/SideBar/SideBar'
import DashboardGrid from '@/components/Templates/Organizations-DashBoard/DashboardGrid'
import DashboardHead from '@/components/Templates/Organizations-DashBoard/DashboardHead'


export default function page() {
  return (
    <>
      <SideBar />
      <DashboardHead />
      <DashboardGrid />
    </>
  )
}
