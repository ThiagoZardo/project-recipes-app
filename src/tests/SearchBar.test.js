import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';
import renderWithRouter from '../renderWithRouter';

import {
  INGREDIENT_SEARCH_RADIO,
  NAME_SEARCH_RADIO,
  FIRST_LETTER_SEARCH_RADIO,
  EXEC_SEARCH_BTN,
} from './helpers/constants';

describe('12. Implemente os elementos da barra de busca', () => {
  it('Existe um radio button com data-testid ingredient-search-radio', () => {
    renderWithRouter(<SearchBar />);
    const ingredientSearchRadio = screen.getByTestId(INGREDIENT_SEARCH_RADIO);
    expect(ingredientSearchRadio).toBeInTheDocument();
  });

  it('Existe um radio button com data-testid name-search-radio', () => {
    renderWithRouter(<SearchBar />);
    const nameSearchRadio = screen.getByTestId(NAME_SEARCH_RADIO);
    expect(nameSearchRadio).toBeInTheDocument();
  });

  it('Existe um radio button com data-testid first-letter-search-radio', () => {
    renderWithRouter(<SearchBar />);
    const firstLetterSearchRadio = screen.getByTestId(FIRST_LETTER_SEARCH_RADIO);
    expect(firstLetterSearchRadio).toBeInTheDocument();
  });

  it('Existe um button com data-testid exec-search-btn', () => {
    renderWithRouter(<SearchBar />);
    const execSearchBtn = screen.getByTestId(EXEC_SEARCH_BTN);
    expect(execSearchBtn).toBeInTheDocument();
  });
});
