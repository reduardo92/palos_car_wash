import React, { useContext } from 'react';
import Context from '../../../Context/Context';
import styled from 'styled-components';
import carWash from '../../../assets/img/services/carWash.png';
import carWashModal from '../../../assets/img/services/washes_website.png';
import details from '../../../assets/img/services/details_square.png';
import detailsModal from '../../../assets/img/services/details_web.png';
import express from '../../../assets/img/services/express.png';
import expressModal from '../../../assets/img/services/express_web.png';
import unlimited from '../../../assets/img/services/unlimited.png';
import unlimitedModal from '../../../assets/img/services/detailsCenter.png';

const CardContainer = styled.div`
  display: grid;

  .card-container_img {
    transition: transform 0.35s ease-in-out;
    margin: 0 auto;
    /* width: 350px; */
    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(auto-fill, minmax(311px, 1fr));
    grid-row-gap: 2rem;
    align-items: end;
  }

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 30px;
  }
`;

const serviceCard = [
  { id: 'carWash', img: carWash, modalImg: carWashModal },
  { id: 'details', img: details, modalImg: detailsModal },
  { id: 'express', img: express, modalImg: expressModal },
  { id: 'unlimited', img: unlimited, modalImg: unlimitedModal }
];

const ServiceCards = props => {
  const { setModalShow, setModalImg } = useContext(Context);

  return (
    <CardContainer className='card-container'>
      {serviceCard.map(({ id, img, modalImg }) => (
        <img
          key={id}
          className='card-container_img'
          onClick={() => {
            setModalShow({ show: true, for: 'img' });
            setModalImg(modalImg);
          }}
          src={img}
          alt={img}
        />
      ))}
    </CardContainer>
  );
};

export default ServiceCards;
