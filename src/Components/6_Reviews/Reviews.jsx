import React, { useContext } from 'react';
import Context from '../../Context/Context';
import styled from 'styled-components';
import ReviewCards from './ReviewCards/ReviewCards';
import Button from 'react-bootstrap/Button';
import palosImg from '../../assets/img/gallery/outsideLookNewTwo.jpg';
import carLogo from '../../assets/img/logo/carOwner.png';
import Title from '../../Ui/Title/Title';
import Pagination from '../../Ui/Pagination/Pagination';

const Styled = styled.section`
  position: relative;
  color: var(--clr-text-light);
  font-size: 0.85rem;
  padding: 1em;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: url(${palosImg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  z-index: 0;
  /* flex */

  &::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .section--reviews {
    &--logo {
      position: absolute;
      width: 150px;
      top: -95px;
    }
  }

  /* Title line */
  .section-title {
    &_line {
      margin: 0;
      width: 90%;
    }
  }

  /* pagination */
  .pagination-nav {
    .pagination {
      justify-content: center;
      margin-bottom: 2em;
    }
  }

  /* button  */
  .btn {
    transform-origin: top right;
    font-size: 0.8rem;
    align-self: center;
    padding: 0.5rem 3.4rem;
    margin: 0 auto 2em;
    display: block;
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
    background-color: transparent;
    border: none;
    border: solid 1px var(--clr-red);

    &:hover,
    &:focus,
    &:active {
      color: var(--clr-white);
      border-color: transparent;
      background-color: var(--clr-red);
    }
  }

  @media screen and (min-width: 1200px) {
    .max-container {
      display: grid;
      max-width: 1200px;
      margin: 0 auto;
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: auto;
      grid-template-areas:
        'title title . . btn'
        'review review review review review'
        '. . pagi . .';
    }

    .section-title {
      grid-area: title;
    }

    .section--reviews--cards {
      grid-area: review;
      justify-self: center;
    }

    .pagination-nav {
      grid-area: pagi;
    }

    .btn {
      grid-area: btn;
      margin-bottom: 0;
    }
  }
`;

const Reviews = () => {
  const { setModalShow } = useContext(Context);

  return (
    <Styled className='section section--reviews' id='reviews'>
      <div className='max-container'>
        <div className='section--reviews--logo'>
          <img src={carLogo} alt='palos logo car' />
        </div>
        <Title
          title='Our Reviews'
          subtitle='satisfied customers'
          titleclr
          subclr
        />
        <ReviewCards />
        <Pagination />
        <Button
          variant='red'
          onClick={() => {
            setModalShow({ show: true, for: 'formQuestionaire' });
          }}
        >
          {' '}
          LEAVE A REAVIEW
        </Button>
      </div>
    </Styled>
  );
};

export default Reviews;
