import React from 'react';
import Social from '../../Ui/Social/Social';
import styled from 'styled-components';
import bannerWashes from '../../assets/img/logo/unlimited_washes_banner.png';

const FooterStyle = styled.footer`
  width: 100%;
  text-align: center;
  color: var(--second-color);
  background: var(--home-LG);

  .logo {
    display: block;
    width: 125px;
    margin: 0 auto;
  }

  .social {
    svg {
      margin: 0.2em 0.5em;
      font-size: 1.6em;
      transition: var(--transition-4s);

      &:hover,
      &:focus,
      &:active {
        color: var(--grey-color);
      }
    }
  }

  p {
    margin: 0;
  }
  .footer--banner {
    background: var(--clr--red-gradient);
  }

  .footer--bottom {
    background-color: var(--clr-footer-bottom);
    color: var(--clr-text-dark);
    font-size: 0.7rem;
    padding: 2em 0 1em;

    .copy-right,
    .coded-by {
    }
  }
`;

const Footer = () => (
  <FooterStyle>
    <div className='footer--banner'>
      <img src={bannerWashes} alt='banner' />
    </div>
    <div className='footer--bottom'>
      <Social />
      <p className='copy-right'>
        Copyright 2019 by Palos Carwash & Detail Center | All rights reserved
      </p>
      <p className='coded-by'>Coded and Design by Eduardo Rivas</p>
    </div>
  </FooterStyle>
);

export default Footer;
