import React from 'react';
import { useHistory } from 'react-router-dom';
import FooterPage from '../styles/FooterPage';

function Footer() {
  const history = useHistory();

  return (
    <FooterPage data-testid="footer">
      <input
        type="image"
        src="/images/drinkIcon.svg"
        alt="Drinks"
        className="iconDrink"
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/drinks') }
      />
      <input
        type="image"
        src="/images/exploreIcon.svg"
        alt="Explore"
        className="iconExplore"
        data-testid="explore-bottom-btn"
        onClick={ () => history.push('/explore') }
      />
      <input
        type="image"
        src="/images/mealIcon.svg"
        alt="Food"
        className="iconFood"
        data-testid="food-bottom-btn"
        onClick={ () => history.push('/foods') }
      />
    </FooterPage>
  );
}

export default Footer;
