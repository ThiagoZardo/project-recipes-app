import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

describe('2. Verifica se existe email, password e login', () => {
  it('Verifica se existe email', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
  });
  it('Verifica se existe campo do password', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
  });
  it('Verifica se existe o botão', () => {
    render(<Login />);
    const btnSubmit = screen.getByTestId('login-submit-btn');
    expect(btnSubmit).toBeInTheDocument();
  });
});

describe('3. A pessoa deve conseguir digitar o seu email', () => {
  it('É possivel digitar o email', () => {
    render(<Login />);
    const email = 'email@email.com';
    const inputEmail = screen.getByTestId('email-input');
    userEvent.type(inputEmail, email);
    expect(inputEmail).toHaveValue(email);
  });
});

describe('4. A pessoa deve conseguir digitar a sua senha', () => {
  it('É possivel digitar a senha', () => {
    render(<Login />);
    const password = '123456';
    const inputPassword = screen.getByTestId('password-input');
    userEvent.type(inputPassword, password);
    expect(inputPassword).toHaveValue(password);
  });
});

describe('5. O botão só ativa quando o form for válido', () => {
  it('O botão deve estar desativado se o email for inválido', () => {
    render(<Login />);
    const password = '123456';
    const email = 'email@email.com';
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnSubmit = screen.getByTestId('login-submit-btn');
    expect(btnSubmit).toBeDisabled();
    userEvent.type(inputPassword, password);
    userEvent.type(inputEmail, email);
    expect(btnSubmit).toBeEnabled();
  });
});
