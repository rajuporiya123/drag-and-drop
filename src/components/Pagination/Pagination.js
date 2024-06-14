import React from "react";

const Pagination = ({ currentPage, totalPage, onPageChange }) => {
  const pageArray = [];

  for (let index = 1; index <= totalPage; index++) {
    pageArray.push(index);
  }

  return (
    <div>
      <ul>
        {pageArray?.map((number) => (
          <div className={currentPage == number ? "active" : "page-item"}>
            <button onClick={() => onPageChange(number)}>
              <li>{number}</li>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
