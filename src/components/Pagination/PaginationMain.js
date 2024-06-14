import React from 'react'
import { useState } from "react";
import Pagination from './Pagination';

const PaginationMain = () => {

    let data = [];
  for (let index = 1; index <= 100; index++) {
    data.push(index);
  }

  const [currentPage, setCurrentPage] = useState(1);
  let iniialPage = 10;

  let totalPage = Math.ceil(data?.length / 10);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let lastIndex = currentPage * iniialPage;
  let firstindex = lastIndex - iniialPage;
  let itemData = data.slice(firstindex, lastIndex);


  return (
    <div className="pagination">

        <ul>
        {itemData?.map((item) => {
           return <li>{item}</li>;
        })}
      </ul>
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onPageChange={onPageChange}
        />
    </div>
  )
}

export default PaginationMain