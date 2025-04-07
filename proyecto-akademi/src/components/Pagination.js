import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  const onChangePage = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="ui pagination menu">
      <a
        className={`icon item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => onChangePage(currentPage - 1)}
      >
        <i className="chevron left icon" />
      </a>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <a
          key={page}
          className={`item ${currentPage === page ? "active" : ""}`}
          onClick={() => onChangePage(page)}
        >
          {page}
        </a>
      ))}

      <a
        className={`icon item ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={() => onChangePage(currentPage + 1)}
      >
        <i className="chevron right icon" />
      </a>
    </div>
  );
};

export default Pagination;
