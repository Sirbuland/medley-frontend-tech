import React from "react";
import { PaginationProps } from "./pagination.interface";
import { Button, Container } from "./pagination.style";

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const pagesToShow = 4;
    const halfPagesToShow = Math.floor(pagesToShow / 2);

    const startPage = Math.max(1, currentPage - halfPagesToShow);
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => {
      const pageNumber = startPage + index;
      const isActive = pageNumber === currentPage;

      return (
        <Button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          isActive={isActive}
        >
          {pageNumber}
        </Button>
      );
    });
  };

  return (
    <Container>
      <Button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        isActive={false}
      >
        Prev
      </Button>
      {renderPageButtons()}
      <Button
        disabled={currentPage === totalPages || totalPages < 2}
        onClick={() => handlePageChange(currentPage + 1)}
        isActive={false}
      >
        Next
      </Button>
    </Container>
  );
};

export default Pagination;
