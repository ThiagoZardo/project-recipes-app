import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderPage from '../styles/Header';
import HeaderSearch from './HeaderSearch';

function Header(props) {
  const history = useHistory();
  const { heading } = props;
  return (
    <HeaderPage className="headerExplore">
      <input
        type="image"
        src="/images/profileIcon.svg"
        alt="Profile"
        className="profile"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
      />
      <h3 data-testid="page-title">{heading}</h3>
      {
        heading === 'Foods' && (
          <HeaderSearch heading={ heading } />
        )
      }
      {
        heading === 'Drinks' && (
          <HeaderSearch heading={ heading } />
        )
      }
    </HeaderPage>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Header;
