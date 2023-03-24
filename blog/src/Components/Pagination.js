import React from 'react';

const Pagination = ({articlePerPage, totalArticles, currentPage, paginate}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalArticles / articlePerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination__container">
      <ul className="pagination__all">
        {pages.map((page, index) => {
          return (
            <>
              <li
                key={index}
                className={
                  page === currentPage ? 'pagination__all__list active' : ''
                }
              >
                {page}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
