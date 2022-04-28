import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import Login from '../pages/Login';
import renderWithRouter from '../renderWithRouter';
import {
  BTN_LOGIN_SUBMIT, EMAIL_INPUT_TEST_ID,
  PASSWORD_INPUT_TEST_ID, USER_ADDRESS_EMAIL,
} from './helpers/constants';

describe('2. Verifica se existe email, password e login', () => {
  it('Verifica se existe email', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    expect(inputEmail).toBeInTheDocument();
  });
  it('Verifica se existe campo do password', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    expect(inputPassword).toBeInTheDocument();
  });
  it('Verifica se existe o botão', () => {
    render(<Login />);
    const btnSubmit = screen.getByTestId(BTN_LOGIN_SUBMIT);
    expect(btnSubmit).toBeInTheDocument();
  });
});

describe('3. A pessoa deve conseguir digitar o seu email', () => {
  it('É possivel digitar o email', () => {
    render(<Login />);
    const email = EMAIL_INPUT_TEST_ID;
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    userEvent.type(inputEmail, email);
    expect(inputEmail).toHaveValue(email);
  });
});

describe('4. A pessoa deve conseguir digitar a sua senha', () => {
  it('É possivel digitar a senha', () => {
    render(<Login />);
    const password = '123456';
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    userEvent.type(inputPassword, password);
    expect(inputPassword).toHaveValue(password);
  });
});

describe('5. O botão só ativa quando o form for válido', () => {
  it('O botão deve estar desativado se o email for inválido', () => {
    render(<Login />);
    const password = '1234567';
    const email = 'emailUser.com';
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const btnSubmit = screen.getByTestId(BTN_LOGIN_SUBMIT);
    userEvent.type(inputPassword, password);
    userEvent.type(inputEmail, email);
    expect(btnSubmit).toBeDisabled();
  });
  it('O botão deve estar desativado se a senha for inválida', () => {
    render(<Login />);
    const password = '123456';
    const email = 'email@user.com';
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const btnSubmit = screen.getByTestId(BTN_LOGIN_SUBMIT);
    userEvent.type(inputPassword, password);
    userEvent.type(inputEmail, email);
    expect(btnSubmit).toBeDisabled();
  });
  it('O botão deve estar ativado se email e senha forem válidos', () => {
    render(<Login />);
    const password = '1234567';
    const email = 'email@user.com';
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const btnSubmit = screen.getByTestId(BTN_LOGIN_SUBMIT);
    userEvent.type(inputPassword, password);
    userEvent.type(inputEmail, email);
    expect(btnSubmit).toBeEnabled();
  });
});

describe('6. Verifica se há 2 tokens no localStorage.', () => {
  it('mealsToken e cocktailsToken devem estar no localStorage', () => {
    renderWithRouter(<App />);
    const password = '1234567';
    const email = USER_ADDRESS_EMAIL;
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const btnSubmit = screen.getByTestId(BTN_LOGIN_SUBMIT);
    userEvent.type(inputPassword, password);
    userEvent.type(inputEmail, email);
    userEvent.click(btnSubmit);
    const keyMealsToken = '1';
    const keyCocktailsToken = '1';
    const mealsToken = localStorage.getItem('mealsToken');
    expect(mealsToken).toBe(keyMealsToken);
    expect(keyCocktailsToken).toBe(keyCocktailsToken);
  });
});

describe('7. Verifica se o e-mail esta no localStorage.', () => {
  it('a chave user deve estar salva em localStorage', () => {
    renderWithRouter(<App />);
    const password = '1234567';
    const email = USER_ADDRESS_EMAIL;
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const btnSubmit = screen.getByTestId(BTN_LOGIN_SUBMIT);

    userEvent.type(inputPassword, password);
    userEvent.type(inputEmail, email);
    userEvent.click(btnSubmit);
    const userLogin = localStorage.getItem(email);
    expect(userLogin).toBe(userLogin);
  });
});

describe('8. Verifica se a rota esta correta', () => {
  it('A rota muda para a tela principal de receitas de comidas', () => {
    const { history } = renderWithRouter(<App />);
    const password = '1234567';
    const email = USER_ADDRESS_EMAIL;
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const btnSubmit = screen.getByTestId(BTN_LOGIN_SUBMIT);
    userEvent.type(inputPassword, password);
    userEvent.type(inputEmail, email);
    userEvent.click(btnSubmit);
    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
