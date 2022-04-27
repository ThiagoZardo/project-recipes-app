import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';

function ExploreNationalities() {
  return (
    <div>
      <header>
        <Header heading="Explore Nationalities" />
        <HeaderSearch />
      </header>
      <Footer />
    </div>
  );
}

export default ExploreNationalities;
