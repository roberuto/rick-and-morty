import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { usePagination } from "./Pagination.hooks";

export type PaginationProps = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
};

const FIRST_PAGE = 1;

export const Pagination = ({ info }: PaginationProps) => {
  const history = useHistory();
  const location = useLocation();

  console.log(history);
  console.log(location);

  const { onPageChange, getPage } = usePagination();

  const handlePageChange = (url: string | null) => {
    if (!url) return;
    onPageChange(url);
  };

  const handlePrev = () => {
    handlePageChange(info.prev);
  };

  const handleNext = () => {
    handlePageChange(info.next);
  };

  return (
    <div>
      <p>Page: {getPage(window.location.href) || FIRST_PAGE}</p>
      <p>Pages: {info.pages}</p>
      <p>Total: {info.count}</p>
      <div>
        <button disabled={!info.prev} onClick={handlePrev}>
          PREV
        </button>
        <span> | </span>
        <button disabled={!info.next} onClick={handleNext}>
          NEXT
        </button>
      </div>
    </div>
  );
};
