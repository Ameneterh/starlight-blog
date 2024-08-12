import React from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== Math.ceil(totalPosts / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="w-full px-2 mx-auto">
      <ul className="flex flex-wrap gap-y-3 justify-center">
        <li
          className={`border border-slate-500 hover:bg-slate-400 cursor-pointer rounded-l-full flex items-center justify-center px-1`}
        >
          <a onClick={prevPage} to="!#">
            <MdNavigateBefore className="" />
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`border border-slate-500 hover:bg-slate-400 cursor-pointer ${
              currentPage === number
                ? "font-bold text-white bg-slate-800 dark:bg-slate-600"
                : ""
            }`}
          >
            <a
              onClick={() => paginate(number)}
              to="!#"
              className="px-3 rounded-sm "
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={`border border-slate-500 hover:bg-slate-400 cursor-pointer rounded-r-full flex items-center justify-center px-1`}
        >
          <a onClick={nextPage} to="!#">
            <MdNavigateNext className="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
