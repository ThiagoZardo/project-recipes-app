import React from 'react';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';

function Foods() {
  return (
    <div>
      <header>
        <Header heading="Foods" />
        <HeaderSearch />
      </header>
    </div>
  );
}

export default Foods;
