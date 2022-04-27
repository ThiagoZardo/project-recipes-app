import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  HEADER_PROFILE_TOP_BTN_ID,
  HEADER_SEARCH_TOP_BTN_ID,
  HEADER_SEARCH_INPUT_ID,
  PAGE_TITLE_ID } from './helpers/constants';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import DetailsFood from '../pages/DetailsFood';
import DetailsDrink from '../pages/DetailsDrink';
import FoodProgress from '../pages/FoodProgress';
import DrinkProgress from '../pages/DrinkProgress';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreIngredients from '../pages/ExploreIngredients';
import renderWithRouter from '../renderWithRouter';
import ExploreNationalities from '../pages/ExploreNationalities';
import Profile from '../pages/Profile';
import Done from '../pages/Done';
import Favorite from '../pages/Favorite';

describe(`9 - Implemente os elementos do header na tela principal de receitas, 
respeitando os atributos descritos no protótipo`, () => {
  it('Há um elemento com o data-testid profile-top-btn', () => {
    render(<Foods />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    expect(profileEl).toBeInTheDocument();
  });
  it('Há um elemento com o data-testid page-title', () => {
    render(<Foods />);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    expect(titleEl).toBeInTheDocument();
  });
  it('Há um elemento com o data-testid search-top-btn', () => {
    render(<Foods />);
    const searchTopEl = screen.getByTestId(HEADER_SEARCH_TOP_BTN_ID);
    expect(searchTopEl).toBeInTheDocument();
  });
});
describe(`10 - Implemente um ícone para a tela de perfil, um título e um ícone 
para a busca, caso exista no protótipo`, () => {
  it('Não tem header na tela de login', () => {
    // Adaptação de: https://dev.to/timonweb/how-to-test-if-element-exists-doesn-t-exist-with-jest-and-react-testing-library-3k32
    const { queryByTestId } = render(
      <Login
        heading="Teste"
      />,
    );
    expect(queryByTestId(/heading/i)).toBeNull();
  });
  it(`O header tem os ícones corretos na tela de principal de receitas de 
  comidas`, () => {
    render(<Foods />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    const searchTopEl = screen.getByTestId(HEADER_SEARCH_TOP_BTN_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
    expect(searchTopEl).toBeInTheDocument();
  });
  it(`O header tem os ícones corretos na tela de principal de receitas de 
  bebidas`, () => {
    render(<Drinks />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    const searchTopEl = screen.getByTestId(HEADER_SEARCH_TOP_BTN_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
    expect(searchTopEl).toBeInTheDocument();
  });
  it('Não tem header na tela de detalhes de uma receita de comida', () => {
    const { queryByTestId } = render(
      <DetailsFood
        heading="Teste"
      />,
    );
    expect(queryByTestId(/heading/i)).toBeNull();
  });
  it('Não tem header na tela de detalhes de uma receita de bebida', () => {
    const { queryByTestId } = render(
      <DetailsDrink
        heading="Teste"
      />,
    );
    expect(queryByTestId(/heading/i)).toBeNull();
  });
  it('Não tem header na tela de receita em progresso de comida', () => {
    const { queryByTestId } = render(
      <FoodProgress
        heading="Teste"
      />,
    );
    expect(queryByTestId(/heading/i)).toBeNull();
  });
  it('Não tem header na tela de receita em progresso de bebida', () => {
    const { queryByTestId } = render(
      <DrinkProgress
        heading="Teste"
      />,
    );
    expect(queryByTestId(/heading/i)).toBeNull();
  });
  it('O header tem os ícones corretos na tela de explorar', () => {
    render(<Explore />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de explorar comidas', () => {
    render(<ExploreFoods />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de explorar bebidas', () => {
    render(<ExploreDrinks />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
  it(`O header tem os ícones corretos na tela de explorar comidas por 
  ingrediente`, () => {
    const { history } = renderWithRouter(<ExploreIngredients />);
    history.push('/explore/foods/ingredients');
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
  it(`O header tem os ícones corretos na tela de explorar bebidas por 
  ingrediente`, () => {
    const { history } = renderWithRouter(<ExploreIngredients />);
    history.push('/explore/drinks/ingredients');
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
  it(`O header tem os ícones corretos na tela de explorar comidas por 
  nacionalidade`, () => {
    render(<ExploreNationalities />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de perfil', () => {
    render(<Profile />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de receitas feitas', () => {
    render(<Done />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de receitas favoritas', () => {
    render(<Favorite />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    const titleEl = screen.getByTestId(PAGE_TITLE_ID);
    expect(profileEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });
});
describe(`11 - Redirecione a pessoa usuária para a tela de perfil ao clicar no 
botão de perfil`, () => {
  it('A mudança de tela ocorre corretamente', () => {
    const { history } = renderWithRouter(<Foods />);
    const profileEl = screen.getByTestId(HEADER_PROFILE_TOP_BTN_ID);
    expect(profileEl).toBeInTheDocument();
    userEvent.click(profileEl);
    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });
});
describe(`12 - O botão de busca que, ao ser clicado, a barra de busca deve aparecer.
 O mesmo serve para escondê-la`, () => {
  it('Ao clicar no botão de busca pela primeira vez a barra de busca aparece', () => {
    render(<Foods />);
    const searchTopEl = screen.getByTestId(HEADER_SEARCH_TOP_BTN_ID);
    expect(searchTopEl).toBeInTheDocument();
    userEvent.click(searchTopEl);
    const inputEl = screen.getByTestId(HEADER_SEARCH_INPUT_ID);
    expect(inputEl).toBeInTheDocument();
  });
  it('Ao clicar no botão de busca pela segunda vez a barra de busca desaparece', () => {
    render(<Foods />);
    const searchTopEl = screen.getByTestId(HEADER_SEARCH_TOP_BTN_ID);
    expect(searchTopEl).toBeInTheDocument();
    userEvent.click(searchTopEl);
    const inputEl = screen.getByTestId(HEADER_SEARCH_INPUT_ID);
    expect(inputEl).toBeInTheDocument();
    userEvent.click(searchTopEl);
    expect(inputEl).not.toBeInTheDocument();
  });
});
