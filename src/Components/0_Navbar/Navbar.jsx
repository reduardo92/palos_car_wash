import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import TopHeader from './TopHeader/TopHeader';
import car from '../../assets/img/logo/carOwner.png';
import paloLogo from '../../assets/img/logo/palosLogo.png';

const LogoContainer = styled.div`
  /* display: inline; */
  position: relative;
  width: auto;
  /* padding: 1em; */
  padding: 2.2em 0;

  .logos-container__car,
  .logos-container__palos {
    position: absolute;
    width: 130px;
  }

  .logos-container__car {
    top: -1px;
    left: 0;
  }
  .logos-container__palos {
    top: 30px;
    left: 110px;
  }
`;

const Style = styled.header`
  position: ${props => props.hideScroll};
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;

  .nav-container {
    background-color: var(--clr-text-light);
    background: linear-gradient(135deg, #ffffff 0%, #ffffff 2%, #f1f1f1 100%);
    box-shadow: 0px 1px 10px rgba(153, 153, 153, 0.4);
    border-radius: 2px;
  }

  .navbar {
    max-width: 1500px;
    margin: 0 auto;
  }

  .navbar-toggler {
    position: relative;
    border: none;

    &:focus {
      outline: none;

    div {
      transition: transform 0.5s ease-in-out, color 0.5s ease-in-out,
        opacity 0.1s 0.1s linear;
      width: 28px;
      height: 3px;
      margin: 5px 0;
      background-color: var(--clr-text-dark);
    }
  }

  .navbar-toggler.collapsed {
    div {
      background: var(--clr--red-gradient);

      &:nth-of-type(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      &:nth-of-type(2) {
        opacity: 0;
      }
      &:nth-of-type(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }

  .navbar-collapse .navbar-nav .nav-link {
    /* color: red; */
    position: relative;
    padding: 1em 0;
    font-weight: var(--fw-bold);
    color: var(--clr-text-dark);
    transition: color 0.2s ease-in-out;

    &:hover,
    &:focus,
    &.active {
      color: #e13035;
    }
  }

  @media screen and (min-width: 1024px) {
    .navbar-nav {
      margin-left: auto;

      font-size: 1.3rem;

      .nav-link + .nav-link {
        margin-left: 1em;
      }
    }

    .navbar-collapse .navbar-nav .nav-link {
      padding: 0;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--clr-title);
        height: 2px;
        width: 100%;
        transition: transform 0.4s ease-in-out;
        transform-origin: right;
        transform: scale(0);
      }

      &:hover::after {
        transform-origin: left;
        transform: scale(1);
      }

      &:hover,
      &:focus,
      &.active {
        color: #e13035;
      }

      &.active {
        &::after {
          transform-origin: left;
          transform: scale(1);
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .navbar-nav {
      margin-left: auto;

      font-size: 1.4rem;

      .nav-link + .nav-link {
        margin-left: 2em;
      }
    }
  }
`;

const NavbarCustom = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();
  const tophead = useRef();

  useEffect(
    () =>
      window.addEventListener('scroll', () => {
        if (window.scrollY > tophead.current.offsetHeight) {
          document.body.style.paddingTop = `${tophead.current.offsetHeight}px`;
          setScrolled(true);
        } else {
          document.body.style.paddingTop = 0;
          setScrolled(false);
        }
      }),
    []
  );

  return (
    <>
      <TopHeader ref={tophead} />
      <Style ref={navRef} hideScroll={scrolled ? 'fixed' : 'relative'}>
        <div className='nav-container'>
          <Navbar expand='lg'>
            <LogoContainer className='logos-container'>
              <div className='logos-container__car'>
                <img src={car} alt='' />
              </div>
              <div className='logos-container__palos'>
                <img src={paloLogo} alt='' />
              </div>
            </LogoContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
              <div />
              <div />
              <div />
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav>
                <Link
                  activeClass='active'
                  className='nav-link'
                  to='home'
                  // offset={-50}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
                <Link
                  activeClass='active'
                  className='nav-link'
                  to='services'
                  offset={-200}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Services
                </Link>
                <Link
                  activeClass='active'
                  className='nav-link'
                  to='details'
                  offset={-200}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Details
                </Link>
                <Link
                  activeClass='active'
                  className='nav-link'
                  to='about'
                  offset={-200}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  activeClass='active'
                  className='nav-link'
                  to='coupon'
                  offset={-200}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Coupon
                </Link>
                <Link
                  activeClass='active'
                  className='nav-link'
                  to='reviews'
                  offset={-200}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Reviews
                </Link>
                <Link
                  activeClass='active'
                  className='nav-link'
                  to='gallery'
                  offset={-200}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Gallery
                </Link>
                <Link
                  activeClass='active'
                  className='nav-link'
                  to='contact'
                  offset={-200}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Style>
    </>
  );
};

export default NavbarCustom;
