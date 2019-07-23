import React from 'react';
import Title from '../../../Ui/Title/Title';
import styled from 'styled-components';
import aboutImg from '../../../assets//img/gallery/outsideLook.jpg';

const Styled = styled.section`
  position: relative;
  display: grid;
  grid-gap: 2em;
  max-width: 55em;
  margin: 0 auto;

  .section-title {
    text-align: left;

    &_title {
      /* color: var(--clr-white); */
    }

    &_line {
      /* background-color: var(--clr-blue); */
      width: 100%;
      margin: 0;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: #616a6b;
    padding: 2em;
    outline: 2px solid var(--clr-blue);
    outline-offset: -1em;
    box-shadow: 0 5px 0.5em rgba(0, 0, 0, 0.3);
  }

  .card-body {
    padding: 0.5em;
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--clr-text-light);
  }

  .card--img {
    box-shadow: 0 5px 0.5em rgba(0, 0, 0, 0.3);
    margin-bottom: 3em;
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(10, 1fr);
    grid-auto-rows: auto;

    .card--img {
      grid-row: 1/ 5;
      grid-column: 5 / 11;
      z-index: 1;
      margin-top: 17.5em;
    }

    .card {
      grid-row: 1 / 4;
      grid-column: 1 / 8;
    }
  }

  @media screen and (min-width: 1000px) {
    .card--img {
      grid-column: 6 / 11;
      margin-top: 14.5em;
    }

    .card {
      grid-column: 1 / 7;
      padding: 3em;
    }
  }
`;

const AboutCard = () => (
  <Styled className='section--card'>
    <div className='card--img'>
      <img src={aboutImg} alt='palos place' />
    </div>
    <div className='card '>
      <Title
        title='About Us'
        subtitle='operated BY car lovers for car lovers'
        titleclr
        lineclr
        subclr
      />
      <div className='card-body'>
        <p className='card-text'>
          Palos Auto Spa was created by car lovers for car lovers. Thier passion
          was to develop the gentlest, safest, most thorough car wash system
          ever. Only the best equipment and solutions are used to effectively
          and safely maintain your vehicles appearance. Our Carwas system
          utilizes gentle lubricants and soaps; overhead buffing stations, soft
          flex foam wraps and high pressure water.Our commitment is to provide a
          cleaner, more environmentally friendly carwash at an economical cost
          to you, our customer.
        </p>
      </div>
    </div>
  </Styled>
);

export default AboutCard;
