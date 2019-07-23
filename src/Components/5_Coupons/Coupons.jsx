import React, { useContext } from 'react';
import styled from 'styled-components';
import Title from '../../Ui/Title/Title';
import Button from 'react-bootstrap/Button';
import couponImgOne from '../../assets/img/coupon/freeWashCard.png';
import couponImgTwo from '../../assets/img/coupon/giftcard.jpg';
import bubbles from '../../assets/img/icons/bubbles.png';
import Context from '../../Context/Context';

const Styled = styled.section`
  /* section text */

  position: relative;
  margin-bottom: 8em;
  display: grid;
  grid-gap: 1em;

  .section--text {
    margin-bottom: 2em;
    text-align: left;

    .section-title {
      &_line {
        margin: 0;
        width: 90%;
      }
    }

    &__para {
      font-size: 1rem;
    }
  }

  /* section Imgs */

  img {
    transition: transform 0.35s ease-in-out;

    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.01);
    }
  }

  .bubbles {
    display: none;
    position: absolute;
    width: 300px;
    bottom: -51px;
    opacity: 0.6;
    z-index: -1;
  }

  /* byn */
  .btn {
    transform-origin: top right;
    font-size: 0.8rem;
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      border: solid 1.1px;
      box-shadow: none;
      transform: translateY(-5px) translateX(2px);
    }
  }

  .btn-blue {
    background-color: var(--clr-blue);
    border: none;
    padding: 0.375rem 1.4rem;
    margin-top: 0.5em;

    &:hover,
    &:focus,
    &:active {
      color: var(--clr-blue);
      border-color: var(--clr-blue);
    }
  }

  @media screen and (min-width: 760px) {
    grid-gap: 1.5em;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;

    .section--text {
      margin-bottom: 0;
      grid-column: 3/5;
    }

    .section--text__img {
      grid-area: 1 /1 /3 /3;
    }

    .section--text__imgTwo {
      grid-area: 2 /3 /2 /5;
    }

    .bubbles {
      display: block;
    }
  }
`;

const Coupons = () => {
  const { setModalShow, setModalImg } = useContext(Context);

  return (
    <>
      <Styled className='section section--coupon' id='coupon'>
        <div className='section--text'>
          <Title
            title='Our Coupon Offers'
            subtitle='YOU CAN BE THE LUCKY ONE  '
          />
          <p className='section--text__para'>
            Once a month Palos Carwash will be giving away a FREE carwash to one
            lucky winner who fills out our questionnaire online. All you need to
            do is fill out our form and hopefully yours will be chosen to
            receive the wash. Please be sure to complete the form in its
            entirety so that we can contact you via email and send you the wash
            code. Once you receive your code, you then can redeem it at our
            Automatic paystation lane. You will receive something that looks
            like this if you were chosen.
          </p>
          <Button
            onClick={() => {
              setModalShow({ show: true, for: 'formQuestionaire' });
            }}
            variant='blue'
          >
            FILL OUT FORM
          </Button>
        </div>
        <img
          className='section--text__img'
          onClick={() => {
            setModalShow({ show: true, for: 'img' });
            setModalImg(couponImgOne);
          }}
          src={couponImgOne}
          alt='promotion coupon'
        />
        <img
          className='section--text__imgTwo'
          onClick={() => {
            setModalShow({ show: true, for: 'img' });
            setModalImg(couponImgTwo);
          }}
          src={couponImgTwo}
          alt='palos gift card'
        />
        <img className='bubbles' src={bubbles} alt='b' />
      </Styled>
    </>
  );
};

export default Coupons;
