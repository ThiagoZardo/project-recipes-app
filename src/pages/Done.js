import React from 'react';
import DoneCard from '../components/DoneCard';
import Header from '../components/Header';
import { setLocalStorage } from '../functions/checkLocalStorage';

function Done() {
  setLocalStorage();
  return (
    <div>
      <Header heading="Done Recipes" />
      <DoneCard />
    </div>
  );
}

export default Done;
