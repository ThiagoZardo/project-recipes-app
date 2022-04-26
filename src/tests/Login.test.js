import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

describe('2. Verifica se existe email, password e login', () => {
  it('Verifica se existe email', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
  });
  it('Verifica se existe campo do password', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('password-input');
    expect(inputEmail).toBeInTheDocument();
  });
  it('Verifica se existe o botão', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('login-submit-btn');
    expect(inputEmail).toBeInTheDocument();
  });
});
