import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import Profile from '../pages/Profile';
import {
  PROFILE_EMAIL,
  PROFILE_DONE_BTN,
  PROFILE_FAVORITE_BTN,
  PROFILE_LOGOUT_BTN,
  USER_ADDRESS_EMAIL,
  EMAIL_INPUT_TEST_ID,
  PASSWORD_INPUT_TEST_ID,
  BTN_LOGIN_SUBMIT,

} from './helpers/constants';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import store from '../redux/store';

describe('82. Verifica se existem os elementos da tela', () => {
  it('Verifica o email', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const userEmail = screen.getByTestId(PROFILE_EMAIL);
    expect(userEmail).toBeDefined();
    const doneRecipeButton = screen.getByTestId(PROFILE_DONE_BTN);
    expect(doneRecipeButton).toBeDefined();
    const favoriteRecipes = screen.getByTestId(PROFILE_FAVORITE_BTN);
    expect(favoriteRecipes).toBeDefined();
    const logoutButton = screen.getByTestId(PROFILE_LOGOUT_BTN);
    expect(logoutButton).toBeDefined();
  });
});

describe('83. Verifica se o email é visível no perfil', () => {
  it('Verifica o Email', () => {
    const { history } = renderWithRouter(<App />);
    const password = '123456';
    const email = USER_ADDRESS_EMAIL;
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const btnSubmit = screen.getByTestId(BTN_LOGIN_SUBMIT);
    userEvent.type(inputPassword, password);
    userEvent.type(inputEmail, email);
    userEvent.click(btnSubmit);
    history.push('/profile');
  });
});

describe('84. Verifica se os botões tem o nome correto', () => {
  it('Verifica se o botão "Done Recipe" existe', () => {
    render(<Profile />);
    const buttonDoneRecipe = screen.getByText('Done Recipes');
    expect(buttonDoneRecipe).toBeDefined();
    const buttonFavoriteRecipes = screen.getByText('Favorite Recipes');
    expect(buttonFavoriteRecipes).toBeDefined();
    const buttonLogout = screen.getByText('Logout');
    expect(buttonLogout).toBeDefined();
  });
});

describe('85. Verifica se o botão Favorite Recipes redireciona corretamente', () => {
  it('Verifica se ao clicar, vai para a página de receitas favoritas', () => {
    const { history } = renderWithRouter(<Provider store={ store }><App /></Provider>);
    history.push('/profile');
    const favoriteRecipes = screen.getByTestId(PROFILE_FAVORITE_BTN);
    userEvent.click(favoriteRecipes);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/favorite-recipes');
  });
});

describe('86. Verifica se o botão Done Recipes redireciona corretamente', () => {
  it('Verifica se ao clicar, vai para a página de receitas prontas', () => {
    const { history } = renderWithRouter(<Provider store={ store }><App /></Provider>);
    history.push('/profile');
    const doneRecipeButton = screen.getByTestId(PROFILE_DONE_BTN);
    userEvent.click(doneRecipeButton);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/done-recipes');
  });
});

describe('87. Verifica se o botão Logout redireciona corretamente', () => {
  it('Verifica se ao clicar, vai para a página de login', () => {
    const { history } = renderWithRouter(<App />);
    const password = '123456';
    const email = USER_ADDRESS_EMAIL;
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const btnSubmit = screen.getByTestId(BTN_LOGIN_SUBMIT);

    userEvent.type(inputPassword, password);
    userEvent.type(inputEmail, email);
    userEvent.click(btnSubmit);
    console.log(localStorage.getItem('user'));
    history.push('/profile');

    console.log(localStorage.getItem('user'));
    const logoutButton = screen.getByTestId(PROFILE_LOGOUT_BTN);
    userEvent.click(logoutButton);
    const { location: { pathname } } = history;

    expect(pathname).toEqual('/');
    console.log(localStorage.getItem('user'));
    expect(localStorage.getItem('user')).toBeNull();
    expect(localStorage.getItem('mealsToken')).toBeNull();
    expect(localStorage.getItem('cocktailsToken')).toBeNull();
  });
});
