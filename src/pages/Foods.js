import React from 'react';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';
import Footer from '../components/Footer';

function Foods() {
  return (
    <div>
      <header>
        <h3 data-testid="page-title">Foods</h3>
        <Header />
        <HeaderSearch />
      </header>
      <Footer />
    </div>
  );
}

export default Foods;
