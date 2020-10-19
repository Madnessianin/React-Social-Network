import React, { useState } from 'react'
import style from './Paginator.module.css' 

const Paginator = ({totalCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalCount / pageSize),
        pages = [];
       
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize),
        [portionNumber, setPortionNumber] = useState(1),
        leftPortionPageNumber  = (portionNumber - 1) * portionSize + 1,
        rightPortionPageNumber = portionNumber * portionSize
    
    return (
        <div className = {style.paginator}>
            {portionNumber > 1 && <button onClick = {() => {
                                                setPortionNumber(portionNumber - 1)
                                                onPageChanged(leftPortionPageNumber - 1)}}>prev</button>}
            <div className ={style.inner} >
                {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                return <span className = {currentPage === page && style.selectPage}
                onClick = {(event) => {onPageChanged(page);}}>{page}</span>})}
            </div>
            {portionCount > portionNumber && <button onClick = {() => {
                                                setPortionNumber(portionNumber + 1)
                                                onPageChanged(rightPortionPageNumber + 1)}}>next</button>}
        </div>
    )
} 

export default Paginator