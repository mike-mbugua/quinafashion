import React from "react";
import "./pagination.css";
function Pagination({ postsPerPage, totalPosts, onPageClick }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination__container">
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => onPageClick(number)}>
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
