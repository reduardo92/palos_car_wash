import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../../Context/Context';

const Styled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  max-width: 1200px;
  grid-gap: 2em;

  /* review card's */
  .review--card {
    margin: 3em auto;
  }

  /* stars */
  .stars {
    margin-bottom: 1em;
  }
  /* name */
  .name {
    font-weight: var(--fw-bold);
  }

  @media screen and (min-width: 760px) {
    .review--card {
      display: flex;
      flex-direction: column;
    }

    .container--stars--name {
      margin-top: auto;
    }
  }
`;

const ReviewCards = () => {
  const { currentReviews } = useContext(Context);
  return (
    <Styled className='section--reviews--cards'>
      {currentReviews.map(({ id, name, text, stars }) => (
        <div key={id} className='review--card'>
          <p className='text'>
            <q> {text}</q>
          </p>
          <div className='container--stars--name'>
            {stars ? <img className='stars' src={stars} alt='stars' /> : <p />}
            <p className='name'>- {name}</p>
          </div>
        </div>
      ))}
    </Styled>
  );
};

export default ReviewCards;
