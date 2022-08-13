import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { HeaderProfile, Perfil } from '../styles/Perfil';

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
    <>
      <HeaderProfile>
        <Header heading="Profile" />
      </HeaderProfile>
      <Perfil>
        <h2
          data-testid="profile-email"
        >
          { email }
        </h2>
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
      </Perfil>
      <Footer />
    </>
  );
}

export default Profile;
