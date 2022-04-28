import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import {
  FOOTER_TEST_ID,
  DRINKS_BOTTON_TEST_ID,
  EXPLORE_BOTTON_TEST_ID,
  FOOD_BOTTON_TEST_ID,
} from './helpers/constants';

describe(`19. Verifica se existe o footer com os botões de drinks, 
explore e food`, () => {
  it('Existe o footer e os botões de drinks, explore e food', () => {
    renderWithRouter(<App />);
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const footer = screen.findByTestId(FOOTER_TEST_ID);
    const drinksBotton = screen.findByTestId(DRINKS_BOTTON_TEST_ID);
    const exploreBotton = screen.findByTestId(EXPLORE_BOTTON_TEST_ID);
    const foodBotton = screen.findByTestId(FOOD_BOTTON_TEST_ID);
    expect(footer).toBeDefined();
    expect(drinksBotton).toBeDefined();
    expect(exploreBotton).toBeDefined();
    expect(foodBotton).toBeDefined();
  });
});

describe(`20. Verifica se apresenta os ícones corretos drinkIcon.svg, exploreIcon.svg e 
mealIcon.svg, disponíveis na pasta src/images/).`, () => {
  it('Apresenta os ícones corretos', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const imageDrinks = screen.getByAltText('Drinks');
    const imageExplore = screen.getByAltText('Explore');
    const imageFood = screen.getByAltText('Food');
    expect(imageDrinks).toHaveAttribute('src', 'images/drinkIcon.svg');
    expect(imageExplore).toHaveAttribute('src', 'images/exploreIcon.svg');
    expect(imageFood).toHaveAttribute('src', 'images/mealIcon.svg');
  });
});

describe(`21. Verifica se menu inferior aparece somente nas telas de comida, 
explorar e perfil`, () => {
  it('O menu inferior aparece na tela de comidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const footer = screen.getByTestId(FOOTER_TEST_ID);
    expect(footer).toBeDefined();
  });

  it('O menu inferior aparece somente na tela de bebidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');
    const footer = screen.getByTestId(FOOTER_TEST_ID);
    expect(footer).toBeDefined();
  });

  it('O menu inferior aparece somente na tela de explorar', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore');
    const footer = screen.getByTestId(FOOTER_TEST_ID);
    expect(footer).toBeDefined();
  });

  it('O menu inferior aparece somente na tela explorar por comidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore/foods');
    const footer = screen.getByTestId(FOOTER_TEST_ID);
    expect(footer).toBeDefined();
  });

  it('O menu inferior aparece somente na tela de explorar por bebidas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore/drinks');
    const footer = screen.getByTestId(FOOTER_TEST_ID);
    expect(footer).toBeDefined();
  });

  it('O menu inferior aparece somente na tela explorar comidas por ingredientes', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore/foods/ingredients');
    const footer = screen.getByTestId(FOOTER_TEST_ID);
    expect(footer).toBeDefined();
  });

  it('O menu inferior aparece somente na tela explorar comida por nacionalidade', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore/foods/nationalities');
    const footer = screen.getByTestId(FOOTER_TEST_ID);
    expect(footer).toBeDefined();
  });

  it('O menu inferior aparece somente na tela de perfil', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const footer = screen.getByTestId(FOOTER_TEST_ID);
    expect(footer).toBeDefined();
  });

  it('O menu inferior não aparece na tela de login', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    const footer = screen.queryByTestId(FOOTER_TEST_ID);
    expect(footer).toBeNull();
  });

  it('O menu inferior não aparece na tela de detalhes de uma receita de comida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods/{id-da-receita}');
    const footer = screen.queryByTestId(FOOTER_TEST_ID);
    expect(footer).toBeNull();
  });

  it('O menu inferior não aparece na tela de detalhes de uma receita de bebida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks/{id-da-receita}');
    const footer = screen.queryByTestId(FOOTER_TEST_ID);
    expect(footer).toBeNull();
  });

  it('O menu inferior não aparece na tela de receita em progresso de comida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods/{id-da-receita}/in-progress');
    const footer = screen.queryByTestId(FOOTER_TEST_ID);
    expect(footer).toBeNull();
  });

  it('O menu inferior não aparece na tela de receita em progresso de bebida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks/{id-da-receita}/in-progress');
    const footer = screen.queryByTestId(FOOTER_TEST_ID);
    expect(footer).toBeNull();
  });

  it('O menu inferior não aparece na tela de receitas feitas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/done-recipes');
    const footer = screen.queryByTestId(FOOTER_TEST_ID);
    expect(footer).toBeNull();
  });

  it('O menu inferior não aparece na tela de de receitas favoritas', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorite-recipes');
    const footer = screen.queryByTestId(FOOTER_TEST_ID);
    expect(footer).toBeNull();
  });
});

describe(`22. Verifica se redireciona a pessoa usuária para uma lista de cocktails 
ao clicar no ícone de bebidas`, () => {
  it('Redireciona a pessoa usuária para a rota correta', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const imageDrinks = screen.getByAltText('Drinks');
    userEvent.click(imageDrinks);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/drinks');
  });
});

describe(`23. Verifica se redireciona a pessoa usuária para a tela de explorar 
ao clicar no ícone de exploração`, () => {
  it('Redireciona para a rota correta', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const imageExplore = screen.getByAltText('Explore');
    userEvent.click(imageExplore);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/explore');
  });
});

describe(`24. Verifica se redireciona a pessoa usuária para uma lista de comidas 
ao clicar no ícone de comidas`, () => {
  it('Redireciona para a rota correta', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const imageFood = screen.getByAltText('Food');
    userEvent.click(imageFood);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/foods');
  });
});
