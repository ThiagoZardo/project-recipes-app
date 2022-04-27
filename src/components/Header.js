import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header(props) {
  const history = useHistory();
  const { heading } = props;
  return (
    <div>
      <h3 data-testid="page-title">{heading}</h3>
      <input
        type="image"
        src="images/profileIcon.svg"
        alt="Profile"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
      />
      <SearchBar heading={ heading } />
    </div>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Header;
