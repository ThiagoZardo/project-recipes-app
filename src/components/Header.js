import React from 'react';
import { useHistory } from 'react-router-dom';

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
    </div>
  );
}

export default Header;
