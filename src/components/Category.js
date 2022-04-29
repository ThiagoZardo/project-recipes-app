import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { fetchDrinkCategory, fetchFoodByCategory, fetchFoodCategory } from '../helpers';
import fetchDrinkByCategory from '../testeJson';

function Category(props) {
  const { heading } = props;
  const categoriesCount = 5;
  const [foodCategories, setFoodCategory] = useState([]);
  const [drinkCategories, setDrinkCategory] = useState([]);
  const [teste, setTeste] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setFoodCategory(await fetchFoodCategory());
      setDrinkCategory(await fetchDrinkCategory());
      setTeste(await fetchDrinkByCategory());
    }
    fetchData();
  }, []);
  console.log(teste);

  const handleClick = async () => {
    console.log(await fetchDrinkByCategory());
  };

  const fCategories = foodCategories.slice(0, categoriesCount)
    .map(({ strCategory }) => (
      <button
        type="button"
        key={ strCategory }
        value={ strCategory }
        data-testid={ `${strCategory}-category-filter` }
        onClick={ (e) => fetchFoodByCategory(e.target.value) }
      >
        {strCategory}
      </button>));
  console.log(fCategories);
  const dCategories = drinkCategories.slice(0, categoriesCount)
    .map(({ strCategory }) => (
      <button
        key={ strCategory }
        type="button"
        id={ strCategory }
        data-testid={ `${strCategory}-category-filter` }
        onClick={ handleClick }
      >
        {strCategory}
      </button>
    ));
  console.log(dCategories);
  return (
    <div>
      {
        (heading === 'Foods' ? fCategories : dCategories)
      }
    </div>
  );
}

Category.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Category;
