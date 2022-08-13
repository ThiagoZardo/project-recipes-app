import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Explores, { ExploreHeader } from '../styles/ExploreCSS';

function Explore() {
  const history = useHistory();
  return (
    <>
      <Explores>
        <ExploreHeader>
          <Header heading="Explore" />
        </ExploreHeader>
        <button
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>

        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
        <img src="/images/explorefood.svg" alt="dinner" />
      </Explores>
      <Footer />
    </>
  );
}

export default Explore;
