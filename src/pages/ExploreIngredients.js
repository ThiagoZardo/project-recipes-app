import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  getIngredientsFoods,
  getIngredientsDrinks,
  fetchFilterIngredientsFoods,
  fetchFilterIngredientsDrinks,
} from '../helpers';
// import { searchFood, searchDrink } from '../redux/actions';
import { ingredientFood, ingredientDrink } from '../redux/actions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CardIngredientes,
  ExplorerHeaderIngredients,
  ExploresIngredients } from '../styles/ExploreCSS';

function ExploreIngredients(props) {
  const mealsArray = 12;
  const [dataIngredientsFood, setDataIngredientsFood] = useState([]);
  const [dataIngredientDrink, setDataIngredientDrink] = useState([]);
  const { location: { pathname } } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const clickIngredientFood = async (clickId) => {
    const response = await fetchFilterIngredientsFoods(clickId);
    console.log(response.meals);
    dispatch(ingredientFood(response.meals));
    history.push('/foods');
  };

  const clickIngredientDrink = async (clickId) => {
    const response = await fetchFilterIngredientsDrinks(clickId);
    dispatch(ingredientDrink(response.drinks));
    console.log(response.drinks);
    history.push('/drinks');
  };

  useEffect(() => {
    const fetchDataFood = async () => {
      const data = await getIngredientsFoods();
      setDataIngredientsFood(data.meals);
      console.log(data.meals);
    };
    const fetchDataDrink = async () => {
      const data = await getIngredientsDrinks();
      setDataIngredientDrink(data.drinks);
      console.log(data.drinks);
    };
    if (pathname === '/explore/foods/ingredients') {
      fetchDataFood();
    }
    if (pathname === '/explore/drinks/ingredients') {
      fetchDataDrink();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ExplorerHeaderIngredients>
        <Header heading="Explore Ingredients" />
      </ExplorerHeaderIngredients>
      <ExploresIngredients>
        {
          pathname === '/explore/foods/ingredients' && (
            dataIngredientsFood.slice(0, mealsArray)
              .map((el, index) => (
                <CardIngredientes key={ el.idIngredient }>
                  <button
                    type="button"
                    onClick={ () => clickIngredientFood(el.strIngredient) }
                    data-testid={ `${index}-ingredient-card` }
                  >
                    <img
                      data-testid={ `${index}-card-img` }
                      alt={ `${el.strIngredient}` }
                      src={ `https://www.themealdb.com/images/ingredients/${el.strIngredient}-Small.png` }
                    />
                    <div>
                      <h4
                        data-testid={ `${index}-card-name` }
                      >
                        { el.strIngredient }
                      </h4>
                    </div>
                  </button>
                </CardIngredientes>
              ))
          )
        }
        {
          pathname === '/explore/drinks/ingredients' && (
            dataIngredientDrink.slice(0, mealsArray)
              .map((el, index) => (
                <CardIngredientes key={ el.strIngredient1 }>
                  <button
                    type="button"
                    data-testid={ `${index}-ingredient-card` }
                    onClick={ () => clickIngredientDrink(el.strIngredient1) }
                  >
                    <img
                      data-testid={ `${index}-card-img` }
                      alt={ `${el.strIngredient1}` }
                      src={ `https://www.thecocktaildb.com/images/ingredients/${el.strIngredient1}-Small.png` }
                    />
                    <h4
                      data-testid={ `${index}-card-name` }
                    >
                      { el.strIngredient1 }
                    </h4>
                  </button>
                </CardIngredientes>
              ))
          )
        }
      </ExploresIngredients>
      <Footer />
    </>

  );
}

ExploreIngredients.propTypes = {
  location: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default ExploreIngredients;
