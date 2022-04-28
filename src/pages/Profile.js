import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const [redirectFR, setRedirectFR] = useState(false);
  const [redirectDR, setRedirectDR] = useState(false);
  const [redirectLogout, setRedirectLogout] = useState(false);

  let email = '';
  if (localStorage.getItem('user')) {
    const emailObjetc = JSON.parse(localStorage.getItem('user'));
    email = emailObjetc.email;
  }

  const logout = () => {
    setRedirectLogout(true);
    localStorage.clear();
  };

  return (
    <div>
      <header>
        <Header heading="Profile" />
      </header>
      <nav>
        <p
          data-testid="profile-email"
        >
          { email }
        </p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => setRedirectDR(true) }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => setRedirectFR(true) }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => logout() }
        >
          Logout
        </button>
        { redirectFR && <Redirect to="/favorite-recipes" /> }
        { redirectDR && <Redirect to="/done-recipes" /> }
        { redirectLogout && <Redirect to="/" /> }
      </nav>
      <Footer />
    </div>
  );
}

export default Profile;
