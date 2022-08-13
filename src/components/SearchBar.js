import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchFoods, getDrinks } from '../helpers';
import { searchDrink, searchFood } from '../redux/actions';

const SearchBar = (props) => {
  const { heading } = props;
  const [endPoint, setEndPoint] = useState({});
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const searchValueStore = useSelector((state) => state.search.searchValue);
  const history = useHistory();
  const dispatch = useDispatch();

  const VerifyPage = async (endpoint) => {
    if (heading === 'Foods') {
      const data = await fetchFoods(endpoint);
      setFood(data.meals);
      dispatch(searchFood(data.meals));
    } else {
      const data = await getDrinks(endpoint);
      setDrink(data.drinks);
      dispatch(searchDrink(data.drinks));
    }
  };

  const checkItems = () => {
    if (!food || !drink) {
      dispatch(searchFood([]));
      dispatch(searchDrink([]));
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (food.length === 1) {
      const id = food[0].idMeal;
      return history.push(`/foods/${id}`);
    }
    if (drink.length === 1) {
      const id = drink[0].idDrink;
      return history.push(`/drinks/${id}`);
    }
  };

  useEffect(() => {
    checkItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [food, drink]);

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
    <form>
      <div>
        <label
          htmlFor="ingredient-search"
        >
          <input
            type="radio"
            name="select"
            id="ingredient-search"
            data-testid="ingredient-search-radio"
            onChange={ ({ target }) => setEndPoint(target.id) }
          />
          <img src="/images/ingredients.svg" alt="ingredients" />
          Ingredient
        </label>

        <label
          htmlFor="name-search"
        >
          <input
            type="radio"
            name="select"
            id="name-search"
            data-testid="name-search-radio"
            onChange={ ({ target }) => setEndPoint(target.id) }
          />
          <img src="/images/book.svg" alt="name" />
          Name
        </label>

        <label
          htmlFor="letter-search"
        >
          <input
            type="radio"
            name="select"
            id="letter-search"
            data-testid="first-letter-search-radio"
            onChange={ ({ target }) => setEndPoint(target.id) }
          />
          <img src="/images/bookletter.svg" alt="ingredients" />
          First letter
        </label>
      </div>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ buttonRequestApi }
      >
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SearchBar;
