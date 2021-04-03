import React, { useState } from "react";
import style from "./Paginator.module.scss";

const Paginator = ({
  totalCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalCount / pageSize),
    pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize),
    [portionNumber, setPortionNumber] = useState(1),
    leftPortionPageNumber = (portionNumber - 1) * portionSize + 1,
    rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.paginator}>
      {portionNumber > 1 && (
        <button
          className={style.button_left}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
            onPageChanged(leftPortionPageNumber - 1);
          }}
        ></button>
      )}
      <div className={style.inner}>
        {pages
          .filter(
            (page) =>
              page >= leftPortionPageNumber && page <= rightPortionPageNumber
          )
          .map((page) => {
            return (
              <span
                key={page}
                className={currentPage === page ? style.selectPage : null}
                onClick={(event) => {
                  onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          })}
      </div>
      {portionCount > portionNumber && (
        <button
          className={style.button_right}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
            onPageChanged(rightPortionPageNumber + 1);
          }}
        ></button>
      )}
    </div>
  );
};

export default Paginator;
