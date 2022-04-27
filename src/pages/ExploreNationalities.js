import React from 'react';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';

function ExploreNationalities() {
  return (
    <div>
      <header>
        <h3 data-testid="page-title">Explore Nationalities</h3>
        <Header />
        <HeaderSearch />
      </header>
    </div>
  );
}

export default ExploreNationalities;
