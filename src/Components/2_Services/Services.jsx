import React from 'react';
import Title from '../../Ui/Title/Title';
import styled from 'styled-components';
import ServiceCards from './ServiceCards/ServiceCards';

const Styled = styled.section`
  text-align: center;

  .section--text {
    font-size: 0.9rem;
  }

  .card-container {
  }
`;

const Services = () => (
  <Styled className='section section-services' id='services'>
    <Title title='Services' subtitle='WHAT WE HAVE TO OFFER' />
    <p className='section--text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      maximus neque vitae nunc sagittis commodo. Ut mattis, ligula a bibendum
      imperdiet, orci felis hendrerit velit, ac fringilla orci nibh nec est.
      Nullam pulvinar auctor velit, sed fermentum ante ullamcorper ac. Quisque
      non lorem eu urna condimentum eleifven
    </p>
    <ServiceCards />
  </Styled>
);

export default Services;
