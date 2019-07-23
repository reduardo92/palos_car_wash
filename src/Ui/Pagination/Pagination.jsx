import React, { useContext } from 'react';
import Context from '../../Context/Context';
import styled from 'styled-components';

const Styled = styled.nav`
  .link {
    background-color: #616a6b;
    border-radius: 100%;
    height: 15px;
    width: 15px;
    transition: background-color 0.35s ease-in-out;

    &:hover,
    &:focus,
    &.active {
      background-color: var(--clr-white);
    }
  }

  /* .pagination  */

  .page-item + .page-item {
    margin-left: 0.8em;
  }
`;

const Pagination = () => {
  const { postsPerPage, totalReviews, paginate, currentPage } = useContext(
    Context
  );

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Styled className='pagination-nav'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item`}>
            <div
              onClick={() => paginate(number)}
              className={`link ${number === currentPage ? 'active' : ''}`}
            />
          </li>
        ))}
      </ul>
    </Styled>
  );
};

export default Pagination;
