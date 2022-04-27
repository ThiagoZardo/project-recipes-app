import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import { fetchFoods, getDrinks } from '../helpers';

const SearchBar = (props) => {
  const { heading } = props;
  const [endPoint, setEndPoint] = useState({});
  const searchValueStore = useSelector((state) => state.search.searchValue);
  const [item, setItem] = useState([]);
  // const [redirect, setRedirect] = useState(false);
  const VerifyPage = async (endpoint) => {
    if (heading === 'Foods') await fetchFoods(endpoint);
    await getDrinks(endpoint);
  };

  // const checkItems = () => {
  //   const { meals, drinks } = item;
  //   console.log(meals);
  //   if (meals.length === 1) {
  //     const id = meals.idMeal;
  //     console.log(id);
  //     setRedirect(!redirect);
  //     return redirect && <Redirect to={ `/foods/${id}` } />;
  //   }
  //   if (drinks.length === 1) {
  //     const id = drinks[0].idDrink;
  //     setRedirect(!redirect);
  //     return redirect && <Redirect to={ `/drinks/${id}` } />;
  //   }
  // };
  const checkItems = (arg) => {
    console.log(arg);
  };

  const buttonRequestApi = () => {
    if (endPoint === 'ingredient') {
      setItem(VerifyPage(`filter.php?i=${searchValueStore}`));
    }
    if (endPoint === 'name') {
      setItem(VerifyPage(`search.php?s=${searchValueStore}`));
      checkItems(item);
    }
    if (endPoint === 'firstLetter') {
      if (searchValueStore.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      setItem(VerifyPage(`search.php?f=${searchValueStore}`));
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
