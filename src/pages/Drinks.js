import React from 'react';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <div>
      <header>
        <Header heading="Drinks" />
        <HeaderSearch />
      </header>
      <Footer />
    </div>
  );
}

export default Drinks;
