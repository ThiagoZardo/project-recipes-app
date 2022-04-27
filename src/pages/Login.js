import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
  const keyMealsToken = '1';
  const keyCocktailsToken = '1';
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const validateButton = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const minPassword = 6;
    if ((emailRegex.test(user)) && (password.length >= minPassword)) {
      return false;
    }
    return true;
  };

  const userLogin = () => {
    localStorage.setItem('mealsToken', keyMealsToken);
    localStorage.setItem('cocktailsToken', keyCocktailsToken);
    localStorage.setItem('user', JSON.stringify(`email: ${user}`));
    setLoginSuccess(true);
  };

  return (
    <section>
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            onChange={ ({ target }) => setUser(target.value) }
          />

          <input
            type="password"
            data-testid="password-input"
            onChange={ ({ target }) => setPassword(target.value) }
          />

          <button
            type="button"
            data-testid="login-submit-btn"
            onClick={ userLogin }
            disabled={ validateButton() }
          >
            Enter
          </button>
          { loginSuccess && <Redirect to="/foods" /> }
        </form>
      </div>

    </section>
  );
}

export default Login;
