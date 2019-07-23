import React from 'react';
import styled from 'styled-components';
import FontAwesome from '../FontAwesome/FontAwesome';

const Styled = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0.7em 0;

  a + a {
    margin-left: 2em;
  }
`;

const Social = () => (
  <Styled className='social'>
    <a
      href='https://www.google.com/maps/place/Palos+Carwash+%26+Detail+Center/@41.6719211,-87.7772826,15z/data=!4m5!3m4!1s0x0:0xabad589325977500!8m2!3d41.6719211!4d-87.7772826'
      target='_blank'
      rel='noopener noreferrer'
    >
      <FontAwesome font='fas fa-map-marker-alt' />
    </a>
    <a
      href='https://www.facebook.com/pages/Palos-Carwash/119533120343'
      target='_blank'
      rel='noopener noreferrer'
    >
      <FontAwesome font='fab fa-facebook-f' />
    </a>
    <a
      href='https://twitter.com/washpalos'
      target='_blank'
      rel='noopener noreferrer'
    >
      <FontAwesome font='fab fa-twitter' />
    </a>
  </Styled>
);

export default Social;
