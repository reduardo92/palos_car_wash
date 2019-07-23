import React from 'react';
import styled from 'styled-components';
import Title from '../../Ui/Title/Title';
import palosLocation from '../../assets/img/gallery/Google-Maps2.jpg';
import FontAwesome from '../../Ui/FontAwesome/FontAwesome';

const Styled = styled.section`
  .section--contact--content {
    font-size: 0.85rem;
    font-weight: var(--fw-bold);
    font-style: var(--fs-italic);
    text-align: center;
  }

  .section--contact--content__info {
    width: max-content;
    margin: 0 auto;
  }

  .clock,
  .phone,
  .address {
    position: relative;
    margin-bottom: 1.1em;

    p {
      margin: 0;
    }
  }

  /* icon markers */
  .icon {
    position: absolute;
    top: 0;
    left: 0;
  }
  .fa-map-marker-alt {
    left: -37px;
  }

  .fa-phone-alt {
    left: -37px;
    top: -5px;
  }

  .fa-clock {
    left: -37px;
  }

  /* Title line */
  .section-title {
    text-align: center;
    align-self: stretch;

    &_line {
      /* width: 100%; */
    }

    &_subtitle {
      font-size: 0.9rem;
    }
  }

  .section--contact--gps {
    max-width: 450px;
    margin: 0 auto;
    a {
      cursor: pointer;
    }
    img {
      transition: transform 0.35s ease-in-out;

      &:hover,
      &:focus {
        transform: scale(1.05);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;

    .section--contact--content {
      font-size: 1rem;
    }

    .section--contact--gps {
      order: -1;
    }
  }
`;

const Contact = () => (
  <Styled className='section section--contact' id='contact'>
    <div className='section--contact--content'>
      <Title title='Contact Us' subtitle='GET IN TOUCH VISIT US ' />
      <div className='section--contact--content__info'>
        <div className='address'>
          <FontAwesome font='fas fa-map-marker-alt' noHover clr />
          <div className='text'>
            <p>12101 South Ridgeland Ave</p>
            <p>
              <small>(Corner of Ridgeland & Rt. 83)</small>
            </p>
            <p>Palos Heights, IL 60463</p>
          </div>
        </div>
        <div className='phone'>
          <FontAwesome font='fas fa-phone-alt' noHover clr />
          <p>708-385-8300</p>
        </div>

        <div className='clock'>
          <FontAwesome font='far fa-clock' noHover clr />
          <div>
            <p>Monday - Saturday</p>
            <p>7:30am - 7:00pm</p>
            <p>Sunday</p>
            <p> 9:00am - 4:00pm</p>
          </div>
        </div>
      </div>
      <p className='sales'>
        Questions? Comments? Email the{' '}
        <a href='mailto:mikestryczek@palosautospa.com'>Sales Department</a>
      </p>
    </div>
    {/* google Icon */}
    <div className='section--contact--gps'>
      <a
        href='https://www.google.com/maps/place/Palos+Carwash+%26+Detail+Center/@41.6719211,-87.7772826,15z/data=!4m5!3m4!1s0x0:0xabad589325977500!8m2!3d41.6719211!4d-87.7772826?hl=en'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={palosLocation} alt='gps img' />
      </a>
    </div>
  </Styled>
);

export default Contact;
