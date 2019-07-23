import React, { useState } from 'react';
import Context from './Context';
import reviews from '../Components/6_Reviews/reviewsArray';

const StateProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState({ show: false, for: '' });
  const [modalImg, setModalImg] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentReviews = reviews.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Context.Provider
      value={{
        modalShow,
        setModalShow,
        modalImg,
        setModalImg,
        currentReviews,
        currentPage,
        postsPerPage,
        totalReviews: reviews.length,
        paginate
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateProvider;
