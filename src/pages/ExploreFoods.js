import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoods() {
  return (
    <div>
      <header>
        <h3 data-testid="page-title">Explore Foods</h3>
        <Header />
      </header>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
