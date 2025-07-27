'use client'
import { useEffect, useState } from 'react';

export default function usePagination(itemPerPage, list) {

  const [currentPage, setCurrentPage] = useState(1);
  const [pagedList, setPagedList] = useState([]);
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const newTotalPage = Math.ceil(list?.length / itemPerPage) || 1

    setTotalPages(newTotalPage)

    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
    
  }, [list, totalPages]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    setPagedList(list?.slice(startIndex, endIndex));
  }, [currentPage, list]);

  return { totalPages, pagedList, currentPage, setCurrentPage };
}
