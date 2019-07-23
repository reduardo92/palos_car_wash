import React from 'react';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import heroImg from '../../assets/img/gallery/outside_hero.jpg';

const Styled = styled.section`
  font-family: var(--ff-title);
  font-weight: var(--fw-bold);
  color: var(--clr-white);
  position: relative;
  min-height: 65vh;
  background-image: url(${heroImg});
  background-position: center;
  background-size: cover;
  background-position: unset;
  z-index: 0;
  display: flex;
  align-items: flex-end;

  &::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.85);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .jumbotron {
    background-color: transparent;
  }

  /* content container */
  .content {
    z-index: 1;
    padding: 2em 0;
    margin-top: 1em;
  }

  /* h1 title */
  .title {
    margin: 0.2em;

    span {
      display: block;
    }
  }

  /* buttons */

  .btn {
    transform-origin: top right;
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
    display: inline-block;
    background-color: var(--clr-blue);
    border: none;
    border-radius: 5px 5px 45px 5px;
    padding: 0.375rem 1rem;
    font-size: 1.1rem;
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
    .content {
      font-size: 2rem;
      margin-bottom: 0;
    }

    .btn {
      font-size: 1.18rem;
    }
  }

  @media screen and (min-width: 1024px) {
    min-height: 85vh;

    .content {
      margin-left: 2em;
      padding: 0;
    }
  }

  @media screen and (min-width: 1800px) {
    .jumbotron {
      margin-left: 7.5em;
    }
    .content {
      font-size: 2.5rem;
    }
    .btn {
      font-size: 1.3rem;
    }
  }
`;

const Hero = () => (
  <Styled>
    <Jumbotron>
      <div className='content'>
        <div className='btn-blue'>Starting at just $17</div>
        <h1 className='title'>
          Unlimited <span>Monthly Washes</span>
        </h1>
        <Button href='#services' variant='red'>
          SEE ALL PLANS
        </Button>
      </div>
    </Jumbotron>
  </Styled>
);

export default Hero;
