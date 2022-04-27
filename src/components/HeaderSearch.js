import React, { useState } from 'react';

function HeaderSearch() {
  const [disabled, setDisabled] = useState(false);
  // const handleClick = () => {
  //   setDisabled(!disabled);
  //   // if (disabled) setDisabled(false);
  //   // if (disabled === false) setDisabled(true);
  // };
  return (
    <div>
      <input
        type="image"
        src="images/searchIcon.svg"
        alt="Search"
        data-testid="search-top-btn"
        onClick={ () => setDisabled(!disabled) }
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
