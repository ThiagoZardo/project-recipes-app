import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchDrinkByCategory,
  fetchDrinkCategory,
  fetchDrinks,
  fetchFoodByCategory,
  fetchFoodCategory,
  fetchMeals,
} from '../helpers';
import { searchDrink, searchFood } from '../redux/actions';
import CategoryCSS from '../styles/CategoryCSS';

function Category(props) {
  const { heading } = props;
  const categoriesCount = 5;
  const maxResults = 12;
  const [foodCategories, setFoodCategory] = useState([]);
  const [drinkCategories, setDrinkCategory] = useState([]);
  const [filteredItems, setItemFilter] = useState([]);
  const [backupItems, setBackupItems] = useState([]);
  const [backupCategory, setBackupCategory] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      setFoodCategory(await fetchFoodCategory());
      setDrinkCategory(await fetchDrinkCategory());
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (backupCategory.length > 2) {
      setBackupCategory([backupCategory[0]]);
      // setItemFilter(backupCategory)
    }
    if (backupCategory[0] !== backupCategory[1]) {
      dispatch(searchFood(filteredItems));
      dispatch(searchDrink(filteredItems));
    } else {
      dispatch(searchFood(backupItems));
      dispatch(searchDrink(backupItems));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredItems]);

  const fCategories = foodCategories.slice(0, categoriesCount).map(({ strCategory }) => (
    <button
      type="button"
      key={ strCategory }
      value={ strCategory }
      data-testid={ `${strCategory}-category-filter` }
      onClick={ async () => {
        const data = await fetchFoodByCategory(strCategory);
        const backup = await fetchMeals();
        setBackupCategory([strCategory, ...backupCategory]);
        setItemFilter(data.slice(0, maxResults));
        setBackupItems(backup.meals);
      } }
    >
      <img src={ `images/${strCategory}.svg` } alt={ strCategory } />
      {strCategory}
    </button>
  ));

  const dCategories = drinkCategories.slice(0, categoriesCount).map(({ strCategory }) => (
    <button
      key={ strCategory }
      type="button"
      value={ strCategory }
      id={ strCategory }
      data-testid={ `${strCategory}-category-filter` }
      onClick={ async () => {
        const data = await fetchDrinkByCategory(strCategory);
        const backup = await fetchDrinks();
        setBackupCategory([strCategory, ...backupCategory]);
        setItemFilter(data.slice(0, maxResults));
        setBackupItems(backup.drinks);
      } }
    >
      <img src={ `images/${strCategory}.svg` } alt={ strCategory } />
      {strCategory}
    </button>
  ));

  return (
    <CategoryCSS>
      {
        heading !== 'Explore Nationalities' && (
          <button
            type="button"
            data-testid="All-category-filter"
            onClick={ () => {
              dispatch(searchFood(backupItems));
              dispatch(searchDrink(backupItems));
            } }
          >
            <img src="/images/All.svg" alt="All" />
            All
          </button>
        )
      }
      {heading === 'Foods' ? (fCategories) : dCategories}
    </CategoryCSS>
  );
}

Category.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Category;
