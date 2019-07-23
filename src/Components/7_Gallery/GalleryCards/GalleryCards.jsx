import React, { useContext } from 'react';
import Context from '../../../Context/Context';
import styled from 'styled-components';
import galleryArray from '../galleryArray';

const Styled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 30px;
  align-items: end;

  .img-card {
    object-fit: cover;
    width: 100%;
    height: 200px;
    transition: transform 0.35s ease-in-out;
    box-shadow: 0 5px 0.5em rgba(0, 0, 0, 0.3);

    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

const GalleryCards = () => {
  const { setModalShow, setModalImg } = useContext(Context);

  return (
    <Styled className='section--gallery--cards'>
      {galleryArray.map(({ id, img }) => (
        <img
          key={id}
          onClick={() => {
            setModalShow({ show: true, for: 'img' });
            setModalImg(img);
          }}
          className='img-card'
          src={img}
          alt='images'
        />
      ))}
    </Styled>
  );
};

export default GalleryCards;

// background-color: var(--clr-blue);
// color: bisque;
// font-size: .95rem;
