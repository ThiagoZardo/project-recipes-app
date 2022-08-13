import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Main, { LoginPage } from '../styles/Login';

function Login() {
  const keyMealsToken = '1';
  const keyCocktailsToken = '1';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const validateButton = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const minPassword = 6;
    return ((emailRegex.test(email)) && (password.length > minPassword));
  };

  const userLogin = () => {
    const user = { email };
    localStorage.setItem('mealsToken', keyMealsToken);
    localStorage.setItem('cocktailsToken', keyCocktailsToken);
    localStorage.setItem('user', JSON.stringify(user));
    setLoginSuccess(true);
  };

  return (
    <LoginPage>
      <Main>
        <img src="/images/recipe.svg" alt="recipe" />
        <h1>Login</h1>
        <input
          type="email"
          data-testid="email-input"
          autoComplete="username"
          placeholder="Write your email"
          onChange={ ({ target }) => setEmail(target.value) }
        />

        <input
          type="password"
          data-testid="password-input"
          autoComplete="current-password"
          placeholder="Write your password"
          onChange={ ({ target }) => setPassword(target.value) }
        />

        <input
          type="button"
          data-testid="login-submit-btn"
          onClick={ userLogin }
          value="Enter"
          disabled={ !validateButton() }
          className={ validateButton() ? 'buttonAbilitate' : 'button' }
        />
        {/* Enter */}
        {/* </button> */}
        { loginSuccess && <Redirect to="/foods" /> }
      </Main>
    </LoginPage>
  );
}

export default Login;
