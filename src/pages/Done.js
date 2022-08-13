import React from 'react';
import DoneCard from '../components/DoneCard';
import Header from '../components/Header';
import { setLocalStorage } from '../functions/checkLocalStorage';
import { HeaderDone } from '../styles/RecipeDone';

function Done() {
  setLocalStorage();
  return (
    <>
      <HeaderDone>
        <Header heading="Done Recipes" />
      </HeaderDone>
      <DoneCard />
    </>
  );
}

export default Done;
