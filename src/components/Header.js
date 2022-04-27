import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header() {
  const history = useHistory();

  return (
    <div>
      <input
        type="image"
        src="images/profileIcon.svg"
        alt="Profile"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
      />
      <SearchBar />
    </div>
  );
}

export default Header;
