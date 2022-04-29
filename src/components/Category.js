import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  fetchDrinkByCategory,
  fetchDrinkCategory,
  fetchFoodByCategory,
  fetchFoodCategory,
} from '../helpers';

function Category(props) {
  const { heading } = props;
  const categoriesCount = 5;
  const maxResults = 12;
  const [foodCategories, setFoodCategory] = useState([]);
  const [drinkCategories, setDrinkCategory] = useState([]);
  const [filteredItems, setItemFilter] = useState([]);
  const items = filteredItems.slice(0, maxResults);

  useEffect(() => {
    async function fetchData() {
      setFoodCategory(await fetchFoodCategory());
      setDrinkCategory(await fetchDrinkCategory());
    }
    fetchData();
  }, []);

  const fCategories = foodCategories.slice(0, categoriesCount).map(({ strCategory }) => (
    <button
      type="button"
      key={ strCategory }
      value={ strCategory }
      data-testid={ `${strCategory}-category-filter` }
      onClick={ async () => setItemFilter(await fetchFoodByCategory(strCategory)) }
    >
      {strCategory}
    </button>
  ));

  const dCategories = drinkCategories.slice(0, categoriesCount).map(({ strCategory }) => (
    <button
      key={ strCategory }
      type="button"
      id={ strCategory }
      data-testid={ `${strCategory}-category-filter` }
      onClick={ async () => setItemFilter(await fetchDrinkByCategory(strCategory)) }
    >
      {strCategory}
    </button>
  ));
  console.log(items);

  return <div>{heading === 'Foods' ? fCategories : dCategories}</div>;
}

Category.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Category;
