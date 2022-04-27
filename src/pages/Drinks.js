import React from 'react';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <div>
      <header>
        <h3 data-testid="page-title">Drinks</h3>
        <Header />
        <HeaderSearch />
      </header>
      <Footer />
    </div>
  );
}

export default Drinks;
