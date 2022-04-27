import React from 'react';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';
import Footer from '../components/Footer';

function Foods() {
  return (
    <div>
      <header>
        <Header heading="Foods" />
        <HeaderSearch />
      </header>
      <Footer />
    </div>
  );
}

export default Foods;
