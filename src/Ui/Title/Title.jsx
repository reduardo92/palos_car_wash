import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  font-family: var(--ff-title);
  /* text-align: center; */

  .section-title {
    margin-bottom: 4rem;

    /* title */
    &_title {
      font-size: 2rem;
      font-weight: var(--fw-bold);
      margin-bottom: 0.2em;
      color: ${props =>
        props.titleclr ? 'var(--clr-title-sub)' : 'var(--clr-title)'};
      text-transform: capitalize;
    }

    /* div line */
    &_line {
      width: 55%;
      height: 3px;
      margin: 0 auto 0.2em;
      background: ${props =>
        props.lineclr ? 'var(--clr-blue)' : 'var(--clr-red)'};
    }

    /* p sub title */
    &_subtitle {
      font-size: 1rem;
      font-weight: var(--fw-bold);
      font-style: var(--fs-italic);
      text-transform: uppercase;
      letter-spacing: 0.3px;
      color: ${props =>
        props.subclr ? 'var(--clr-text-light)' : 'var(--clr-text-dark)'};
    }
  }
`;

const Title = ({ title, titleclr, lineclr, subtitle, subclr, children }) => (
  <Styled
    className='section-title'
    lineclr={lineclr}
    titleclr={titleclr}
    subclr={subclr}
  >
    <h3 className='section-title_title'>{title}</h3>
    <div className='section-title_line' />
    <p className='section-title_subtitle'>{subtitle}</p>
    {children}
  </Styled>
);

export default Title;
