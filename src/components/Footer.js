import React from 'react';
import { useHistory } from 'react-router-dom';
import '../footer.css';

function Footer() {
  const history = useHistory();

  return (
    <footer data-testid="footer" className="footer">
      <input
        type="image"
        src="images/drinkIcon.svg"
        alt="Drinks"
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/drinks') }
      />
      <input
        type="image"
        src="images/exploreIcon.svg"
        alt="Explore"
        data-testid="explore-bottom-btn"
        onClick={ () => history.push('/explore') }
      />
      <input
        type="image"
        src="images/mealIcon.svg"
        alt="Food"
        data-testid="food-bottom-btn"
        onClick={ () => history.push('/foods') }
      />
    </footer>
  );
}

export default Footer;
