import React, { useState } from 'react';

function HeaderSearch() {
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    if (disabled) setDisabled(false);
    if (disabled === false) setDisabled(true);
  };
  return (
    <div>
      <input
        type="image"
        src="images/searchIcon.svg"
        alt="Search"
        data-testid="search-top-btn"
        onClick={ handleClick }
      />
      {
        disabled
    && (
      <input
        data-testid="search-input"
        id="search"
        name="search"
      />
    )
      }
    </div>
  );
}

export default HeaderSearch;
