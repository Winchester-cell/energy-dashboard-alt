'use client'
import SideBar from '@/components/Modules/SideBar/SideBar'
import usePagination from '@/hooks/usePagination'
import BottomPart from '@/components/Templates/DevicesRoadsUsers/BottomPart'
import ListContainer from '@/components/Templates/DevicesRoadsUsers/ListContainer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import organizationsPageContent from '@/content/organizationsPageContent'


export default function Organizations() {

    const [users, setUsers] = useState()
    const paginationProps = usePagination(10, users)
    const content = organizationsPageContent


    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get('/api/organizations/')
            setUsers(res.data.results)
        }
        getUsers()
    }, [users])


    return (
        <>
            <SideBar />
            <ListContainer content={content} pagedList={paginationProps.pagedList} />
            <BottomPart {...paginationProps} />
        </>
    )
}

