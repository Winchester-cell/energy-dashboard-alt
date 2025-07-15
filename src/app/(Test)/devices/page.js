'use client'
import SideBar from '@/components/Modules/SideBar/SideBar'
import usePagination from '@/hooks/usePagination'
import BottomPart from '@/components/Templates/DevicesRoadsUsers/BottomPart'
import ListContainer from '@/components/Templates/DevicesRoadsUsers/ListContainer'
import devicesPageContent from '@/content/devicesPageContent'
import devices from '@/data/db'


export default function Devices() {

    const paginationProps = usePagination(10, devices)
    const content = devicesPageContent

    return (
        <>
            <SideBar />
            <ListContainer content={content} pagedList={paginationProps.pagedList} />
            <BottomPart {...paginationProps} />
        </>
    )
}

