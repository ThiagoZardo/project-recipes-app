import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFoods } from '../helpers';

const SearchBar = (props) => {
  const { heading } = props;
  console.log(heading);
  const [endPoint, setEndPoint] = useState({});
  const searchValueStore = useSelector((state) => state.search.searchValue);

  const VerifyPage = async (endpoint) => {
    console.log(heading);
    if (heading === 'Foods') await fetchFoods(endpoint);
    // await fetchDrinks(endpoint);
  };

  const buttonRequestApi = () => {
    if (endPoint === 'ingredient') VerifyPage(`filter.php?i=${searchValueStore}`);
    if (endPoint === 'name') VerifyPage(`search.php?s=${searchValueStore}`);
    if (endPoint === 'firstLetter') {
      if (searchValueStore.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      VerifyPage(`search.php?f=${searchValueStore}`);
    }
  };

  return (
    <section>
      <form>
        <label
          htmlFor="ingredient-search"
        >
          Ingredient:
          <input
            type="radio"
            name="select"
            id="ingredient"
            data-testid="ingredient-search-radio"
            onChange={ ({ target }) => setEndPoint(target.id) }
          />
        </label>

        <label
          htmlFor="name-search"
        >
          Name:
          <input
            type="radio"
            name="select"
            id="name"
            data-testid="name-search-radio"
            onChange={ ({ target }) => setEndPoint(target.id) }
          />
        </label>

        <label
          htmlFor="letter-search"
        >
          First letter:
          <input
            type="radio"
            name="select"
            id="firstLetter"
            data-testid="first-letter-search-radio"
            onChange={ ({ target }) => setEndPoint(target.id) }
          />
        </label>

        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ buttonRequestApi }
        >
          Search
        </button>
      </form>
    </section>
  );
};

SearchBar.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SearchBar;
