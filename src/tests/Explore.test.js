import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Explore from '../pages/Explore';

import {
  EXPLORE_FOODS,
  EXPLORE_DRINKS,
} from './helpers/constants';

describe(`67. Implemente os elementos da tela de explorar, 
explore e food`, () => {
  it('Tem os data-testids explore-foods e explore-drinks.', () => {
    renderWithRouter(<Explore />);
    const exploreFoods = screen.getByTestId(EXPLORE_FOODS);
    const exploreDrinks = screen.getByTestId(EXPLORE_DRINKS);
    expect(exploreFoods).toBeInTheDocument();
    expect(exploreDrinks).toBeInTheDocument();
  });
});

describe(`68. Verifica se existe 2 botões com os textos esperados, 
explore e food`, () => {
  it('Os botões comtém os textos Explore Foods e Explore Drinks.', () => {
    renderWithRouter(<Explore />);
    expect(screen.getByRole('button', { name: 'Explore Foods' }));
    expect(screen.getByRole('button', { name: 'Explore Drinks' }));
  });
});

describe('69. Redirecione a pessoa usuária ao clicar em um dos botões, ', () => {
  it(`Ao clicar no botão "Explore Foods" a rota muda para a 
    página de explorar comidas`, () => {
    const { history } = renderWithRouter(<Explore />);
    const btnFoods = screen.getByRole('button', { name: 'Explore Foods' });
    userEvent.click(btnFoods);
    const { pathname } = history.location;
    expect(pathname).toBe('/explore/foods');
  });

  it(`Ao clicar no botão "Explore Drinks" a rota muda para a 
    página de explorar bebidas`, () => {
    const { history } = renderWithRouter(<Explore />);
    const btnDrinks = screen.getByRole('button', { name: 'Explore Drinks' });
    userEvent.click(btnDrinks);
    const { pathname } = history.location;
    expect(pathname).toBe('/explore/drinks');
  });
});
