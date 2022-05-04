import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import ExploreIngredients from '../pages/ExploreIngredients';

import {
  INGREDIENT_CARD,
  CARD_IMG,
  CARD_NAME,
} from './helpers/constants';

describe(`75. Implemente os elementos da tela de explorar ingredientes 
respeitando os atributos descritos no protótipo`, () => {
  it('Verifica se existe o data-testd="$/{index}-ingredient-card"', () => {
    renderWithRouter(<ExploreIngredients />);
    const ingredientCard = screen.getByTestId(INGREDIENT_CARD);
    expect(ingredientCard).toBeInTheDocument();
  });

  it('Verifica se existe o data-testd="$/{index}-card-img"', () => {
    renderWithRouter(<ExploreIngredients />);
    const cardImg = screen.getByTestId(CARD_IMG);
    expect(cardImg).toBeInTheDocument();
  });

  it('Verifica se existe o data-testd="$/{index}-card-name"', () => {
    renderWithRouter(<ExploreIngredients />);
    const cardName = screen.getByTestId(CARD_NAME);
    expect(cardName).toBeInTheDocument();
  });
});

// describe(`76. Implemente os elementos da tela de explorar ingredientes
//   respeitando os atributos descritos no protótipo`, () => {
//   it('Verifica se contém o datatest-id"{index}-ingredient-card"', () => {

//   });
// });
