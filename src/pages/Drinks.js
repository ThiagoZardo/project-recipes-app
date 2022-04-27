import React from 'react';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';

function Drinks() {
  return (
    <div>
      <header>
        <h3 data-testid="page-title">Drinks</h3>
        <Header />
        <HeaderSearch heading="Drinks" />
      </header>
    </div>
  );
}

export default Drinks;
