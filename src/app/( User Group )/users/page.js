'use client'
import usePagination from '@/hooks/usePagination'
import BottomPart from '@/components/Templates/DevicesRoadsUsers/BottomPart'
import ListContainer from '@/components/Templates/DevicesRoadsUsers/ListContainer'
import usersPageContent from '@/content/usersPageContent'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Users() {

    const [users, setUsers] = useState()
    const paginationProps = usePagination(10, users)
    const content = usersPageContent

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get('/api/users/')
            console.log(res.data.results);
            setUsers(res.data.results)
        }
        getUsers()
    }, [])



    return (
        <>
            <ListContainer content={content} pagedList={paginationProps.pagedList} />
            <BottomPart {...paginationProps} />
        </>
    )
}

