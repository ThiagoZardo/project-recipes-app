import React from 'react';

function Login() {
  return (
    <section>
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
          />

          <input
            type="password"
            data-testid="password-input"
          />

          <button
            type="button"
            data-testid="login-submit-btn"
          >
            Enter
          </button>
        </form>
      </div>

    </section>
  );
}

export default Login;
