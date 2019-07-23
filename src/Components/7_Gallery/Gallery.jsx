import React from 'react';
import styled from 'styled-components';
import Title from '../../Ui/Title/Title';
import GalleryCards from './GalleryCards/GalleryCards';

const Styled = styled.section`
  /* Title line */
  .section-title {
    text-align: center;
    &_line {
      width: 90%;
    }

    &_subtitle {
      font-size: 0.9rem;
    }
  }

  @media screen and (min-width: 760px) {
    .section-title {
      &_line {
        width: 450px;
      }
    }
  }
`;

const Gallery = () => (
  <Styled className='section section--gallery' id='gallery'>
    <Title
      title='Gallery'
      subtitle='SAME GREAT SERVICE, SAME GREAT QUALITY, SAME GREAT PRICES'
    />
    <GalleryCards />
  </Styled>
);

export default Gallery;
