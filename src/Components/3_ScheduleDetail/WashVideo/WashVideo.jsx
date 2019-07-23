import React from 'react';
import video from '../../../assets/img/gallery/washvideo.mp4';
import styled from 'styled-components';

const Styled = styled.div`
  position: relative;
`;

const StyledVideo = styled.video``;

const WashVideo = () => (
  <Styled className='card--img'>
    <StyledVideo src={video} muted loop controls autoPlay />
  </Styled>
);

export default WashVideo;
