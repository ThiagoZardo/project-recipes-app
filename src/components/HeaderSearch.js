import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { inputBar } from '../redux/actions';
import SearchBar from './SearchBar';

function HeaderSearch(props) {
  const { heading } = props;
  const [disabled, setDisabled] = useState(false);
  const [search, setSeach] = useState('');
  const dispatch = useDispatch();
  dispatch(inputBar(search));

  return (
    <>
      <input
        type="image"
        src="images/searchIcon.svg"
        alt="Search"
        className="searchIcone"
        data-testid="search-top-btn"
        onClick={ () => setDisabled(!disabled) }
      />
      {
        disabled
    && (
      <div>
        <input
          data-testid="search-input"
          id="search"
          name="search"
          placeholder="Search Recipe"
          value={ search }
          onChange={ (e) => setSeach(e.target.value) }
        />
        <SearchBar heading={ heading } />
      </div>
    )
      }
    </>
  );
}

HeaderSearch.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default HeaderSearch;
