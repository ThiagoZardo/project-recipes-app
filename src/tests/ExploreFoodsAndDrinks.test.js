import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import { getSurpriseFoods, getSurpriseDrinks } from '../helpers';
import oneMeal from '../../cypress/mocks/oneMeal';
import oneDrink from '../../cypress/mocks/oneDrink';

import {
  EXPLORE_INGREDIENTS,
  EXPLORE_NATIONALITY,
  EXPLORE_SURPRISE,
} from './helpers/constants';

function mockFetch(data) {
  return function fetch() {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(data),
      });
    });
  };
}

describe('70. Implemente os elementos da tela de explorar bebidas ou comidas', () => {
  it('Verifiva se tem os data-testids corretos para a tela de explorar comidas', () => {
    renderWithRouter(<ExploreFoods />);
    const exploreIngredients = screen.getByTestId(EXPLORE_INGREDIENTS);
    const exploreNationality = screen.getByTestId(EXPLORE_NATIONALITY);
    const exploreSurprise = screen.getByTestId(EXPLORE_SURPRISE);
    expect(exploreIngredients).toBeInTheDocument();
    expect(exploreNationality).toBeInTheDocument();
    expect(exploreSurprise).toBeInTheDocument();
  });
});

describe('71. Verifique se contem 3 botões com os textos esperados', () => {
  it(`Tem os botões "By Ingredient", "By Nationality" e "Suprise me!" 
    para a tela de explor comidas`, () => {
    renderWithRouter(<ExploreFoods />);
    expect(screen.getAllByRole('button', { name: 'By Ingredient' }));
    expect(screen.getAllByRole('button', { name: 'By Nationality' }));
    expect(screen.getAllByRole('button', { name: 'Surprise me!' }));
  });

  it(`Tem os botões "By Ingredient", e "Suprise me!" 
    para a tela de explor bebidas`, () => {
    renderWithRouter(<ExploreDrinks />);
    expect(screen.getAllByRole('button', { name: 'By Ingredient' }));
    expect(screen.getAllByRole('button', { name: 'Surprise me!' }));
  });
});

describe(`72. Redirecione a pessoa usuária ao clicar em "By Ingredient",
  para a tela de explorar por ingredientes,`, () => {
  it(`Ao clicar no botão "By Ingredient" da tela de *explorar comidas* 
  a rota muda para a página de explorar comidas por ingrediente;`, () => {
    const { history } = renderWithRouter(<ExploreFoods />);
    const btnByIngredientsFoods = screen.getByTestId(EXPLORE_INGREDIENTS);
    userEvent.click(btnByIngredientsFoods);
    const { pathname } = history.location;
    expect(pathname).toBe('/explore/foods/ingredients');
  });

  it(`Ao clicar no botão "By Ingredient" da tela de *explorar bebidas* 
  a rota muda para a página de explorar bebidas por ingrediente.`, () => {
    const { history } = renderWithRouter(<ExploreDrinks />);
    const btnByIngredientsDrink = screen.getByTestId(EXPLORE_INGREDIENTS);
    userEvent.click(btnByIngredientsDrink);
    const { pathname } = history.location;
    expect(pathname).toBe('/explore/drinks/ingredients');
  });
});

describe(`73. Ao clicar no botão "By Ingredient" da tela de *explorar bebidas* 
a rota muda para a página de explorar bebidas por ingrediente.`, () => {
  it('A rota deve mudar para tela de explorar por nacionalidades', () => {
    const { history } = renderWithRouter(<ExploreFoods />);
    const btnByNationality = screen.getByTestId(EXPLORE_NATIONALITY);
    userEvent.click(btnByNationality);
    const { pathname } = history.location;
    expect(pathname).toBe('/explore/foods/nationalities');
  });
});

describe(`74. Redirecione a pessoa usuária ao clicar em "Surprise me!", 
  a rota deve mudar para a tela de detalhes de uma receita, 
  que deve ser escolhida de forma aleatória através da API`, () => {
  it(`Ao clicar no botão "Surprise me!" da tela de explorar comidas 
    a rota muda para a página de detalhes de uma comida aleatória`, async () => {
    const { history } = renderWithRouter(<ExploreFoods />);
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(oneMeal));
    const dataGetFoods = await getSurpriseFoods();
    const idFoodRandom = dataGetFoods.meals[0].idMeal;
    const exploreSurprise = screen.getByTestId(EXPLORE_SURPRISE);
    userEvent.click(exploreSurprise);
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/random.php');
    history.push('/foods/52771');
    const { pathname } = history.location;
    expect(pathname).toBe(`/foods/${idFoodRandom}`);
  });

  it(`Ao clicar no botão "Surprise me!" da tela de explorar bebidas 
    a rota muda para a página de detalhes de uma bebida aleatória`, async () => {
    const { history } = renderWithRouter(<ExploreDrinks />);
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch(oneDrink));
    const dataGetDrinks = await getSurpriseDrinks();
    const idDrinkRandom = dataGetDrinks.drinks[0].idDrink;
    const exploreSurprise = screen.getByTestId(EXPLORE_SURPRISE);
    userEvent.click(exploreSurprise);
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    history.push('/foods/178319');
    const { pathname } = history.location;
    expect(pathname).toBe(`/foods/${idDrinkRandom}`);
  });
});
