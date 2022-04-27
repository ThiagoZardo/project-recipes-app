import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinks() {
  return (
    <div>
      <header>
        <h3 data-testid="page-title">Explore Drinks</h3>
        <Header />
      </header>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
