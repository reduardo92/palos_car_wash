import React from 'react';
import styled from 'styled-components';
import FontAwesome from '../../../Ui/FontAwesome/FontAwesome';
import Social from '../../../Ui/Social/Social';

const TopHeaderStyle = styled.div`
  background: var(--clr--red-gradient);
  color: var(--clr-text-light);
  font-weight: var(--fw-bold);
  font-style: var(--fs-italic);
  font-size: 0.7rem;

  .top--container {
    padding: 0.5em;
    max-width: 1500px;
    margin: 0 auto;
    /* Grid */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-template-areas:
      'tag  social'
      'phone  time';
  }

  .owned-tag {
    grid-area: tag;
    align-self: center;
  }
  .social {
    grid-area: social;
  }

  .phone {
    grid-area: phone;
    align-self: center;
    &_number {
      margin-left: 1.5em;
      display: inline;
    }
  }

  .time {
    grid-area: time;
    display: flex;
    * + * {
      margin-left: 1em;
    }

    span {
      display: block;
    }
  }

  /* give p zero bottom margin */
  p {
    margin-bottom: 0;
  }

  @media screen and (min-width: 760px) {
    .top--container {
      padding: 0.5em 2.5em;
      grid-template-areas: 'phone time tag social';
    }

    .owned-tag {
      margin-right: 2.5em;
    }

    .time {
      .icon {
        align-self: center;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 0.9rem;
    /* grid */

    .time {
      * + * {
        margin-left: 1em;
        align-self: center;
      }

      span {
        display: inline;
      }
    }
  }
`;

const TopHeader = (props, ref) => (
  <TopHeaderStyle id='home' ref={ref} className='top--header'>
    <div className='top--container'>
      <p className='owned-tag'>FAMILY OWNED AND OPERATED SINCE 2007</p>
      <Social />
      <div className='phone'>
        <FontAwesome font='fas fa-phone-alt' noHover />
        <p className='phone_number'>708-385-8300</p>
      </div>
      <div className='time'>
        <FontAwesome font='far fa-clock' noHover />
        {/* <div className='time_text' /> */}
        <p>
          Mon-Sat: <span>7:30am - 7:00pm</span>
        </p>
        <p>
          Sunday: <span>9:00am - 4:00pm</span>
        </p>
      </div>
    </div>
  </TopHeaderStyle>
);

const TopHeaderFoward = React.forwardRef(TopHeader);

export default TopHeaderFoward;
