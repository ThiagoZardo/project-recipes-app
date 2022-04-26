import React from 'react';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';

function Foods() {
  return (
    <div>
      <header>
        <h3 data-testid="page-title">Foods</h3>
        <Header />
        <HeaderSearch />
      </header>
    </div>
  );
}

export default Foods;
