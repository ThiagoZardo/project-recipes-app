import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <div>
      <header>
        <Header heading="Explore" />
      </header>
      <div>
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods
        </button>

        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
