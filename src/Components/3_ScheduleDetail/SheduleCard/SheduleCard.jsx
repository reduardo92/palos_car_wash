import React, { useContext } from 'react';
import Title from '../../../Ui/Title/Title';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import FontAwesome from '../../../Ui/FontAwesome/FontAwesome';
import WashVideo from '../WashVideo/WashVideo';
// import imgTtest from '../../../assets/img/gallery/insde_washTwo.jpg';
import bubbles from '../../../assets/img/icons/bubbles.png';
import Context from '../../../Context/Context';

const Styled = styled.section`
  /* max-width: 450px; */
  /* text-align: left; */
  display: grid;
  grid-gap: 2em;
  max-width: 55em;
  margin: 0 auto;
  position: relative;

  .bubbles {
    display: none;
    position: absolute;
    width: 300px;
    bottom: -51px;
    opacity: 0.4;
    z-index: -1;
  }

  .section-title {
    text-align: left;

    &_line {
      width: 100%;
      margin: 0;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    padding: 2em;
    outline: 2px solid var(--clr-red);
    outline-offset: -1em;
    box-shadow: 0 5px 0.5em rgba(0, 0, 0, 0.3);
  }

  .card-body {
    padding: 1em;
    font-size: 0.8rem;
    font-weight: var(--fw-bold);
    font-style: var(--fs-italic);
  }

  .card--img {
    /* max-width: 400px; */
  }

  .clock,
  .phone,
  .address {
    display: flex;
    margin-bottom: 1em;
    align-items: center;

    p {
      margin: 0;
    }

    .icon {
      margin-right: 0.8em;
    }
  }

  .btn {
    transform-origin: top right;
    font-size: 0.7rem;
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      border: solid 1.1px;
      box-shadow: none;
      transform: translateY(-5px) translateX(2px);
    }
  }

  .btn-red {
    background-color: var(--clr-red);
    border: none;
    padding: 0.375rem 1.4rem;
    margin-top: 0.5em;

    &:hover,
    &:focus,
    &:active {
      color: var(--clr-red);
      border-color: var(--clr-red);
    }
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(10, 1fr);
    grid-auto-rows: auto;

    .card--img {
      grid-row: 1/ 2;
      grid-column: 1 / 7;
    }

    .card {
      grid-row: 1 / 3;
      grid-column: 5 / 11;
      margin-top: 4em;
      margin-left: 3em;
    }
    .card-body {
      /* font-size: 1rem; */
    }

    .bubbles {
      display: block;
    }
  }

  @media screen and (min-width: 1000px) {
    .card {
      margin-top: 9em;
      margin-left: 6em;
    }
  }

  @media screen and (min-width: 1200px) {
    .card-body {
      font-size: 1rem;
    }

    .btn {
      font-size: 0.8rem;
    }
  }
`;

const SheduleCard = () => {
  const { setModalShow } = useContext(Context);

  return (
    <Styled className='section--card' id='details'>
      <WashVideo />
      <div className='card '>
        <Title title='Schedule A Detail' subtitle='expert detailing' />
        <div className='card-body'>
          <p>Hours of operation:</p>
          <div className='clock'>
            <FontAwesome font='far fa-clock' noHover clr />
            <div>
              <p>Mon - Saturday - 7:30am - 7:00pm</p>
              <p>Sunday - 9:00am - 4:00pm</p>
            </div>
          </div>
          <div className='phone'>
            <FontAwesome font='fas fa-phone-alt' noHover clr />
            <p>708-385-8300</p>
          </div>
          <div className='address'>
            <FontAwesome font='fas fa-map-marker-alt' clr />
            <p>12101 South Ridgeland Ave. Palos Heights, IL 60463</p>
          </div>
          <Button
            variant='red'
            onClick={() => {
              setModalShow({ show: true, for: 'formDetail' });
            }}
          >
            MAKE APPOINTMENT
          </Button>
        </div>
      </div>
      <img className='bubbles' src={bubbles} alt='b' />
    </Styled>
  );
};

export default SheduleCard;
