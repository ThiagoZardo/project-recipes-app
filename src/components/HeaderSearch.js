import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import inputBar from '../redux/actions';

function HeaderSearch() {
  const [disabled, setDisabled] = useState(false);
  const [search, setSeach] = useState('');
  const dispatch = useDispatch();
  dispatch(inputBar(search));

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
        value={ search }
        onChange={ (e) => setSeach(e.target.value) }
      />
    )
      }
    </div>
  );
}

export default HeaderSearch;
