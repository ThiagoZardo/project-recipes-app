import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchMeals, getNationalityFoods, fetchFilterNationality } from '../helpers';
import '../css/ExploreNationalities.css';
import { Card, FoodAndDrink } from '../styles/FoodAndDrinkPage';
import { ExploreNation, ExplorerHeaderNation } from '../styles/ExploreCSS';

function ExploreNationalities() {
  const maxArray = 12;
  const [dataNationalityFoods, setDataNationalityFoods] = useState([]);
  const [changeSelect, setChangeSelect] = useState('');
  const [dataMealsState, setDataMealsState] = useState([]);
  const [dataFilterNationality, setDataFilterNationality] = useState([]);
  const history = useHistory();
  const All = { strArea: 'All' };

  useEffect(() => {
    const fetchDataNationality = async () => {
      const data = await getNationalityFoods();
      setDataNationalityFoods(data.meals.concat(All));
      console.log(dataNationalityFoods);

      if (changeSelect.length === 0 || changeSelect === 'All') {
        const dataMeals = await fetchMeals();
        setDataMealsState(dataMeals.meals);
      }

      if (changeSelect.length > 0) {
        const dataFilter = await fetchFilterNationality(changeSelect);
        setDataFilterNationality(dataFilter.meals);
      }
    };
    fetchDataNationality();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeSelect]);

  const changeSelectNationality = ({ target }) => {
    setChangeSelect(target.value);
  };

  const redirectByDetails = (clickId) => {
    history.push(`/foods/${clickId}`);
  };

  return (
    <>
      <ExplorerHeaderNation>
        <Header heading="Explore Nationalities" />
      </ExplorerHeaderNation>
      <ExploreNation>
        <select
          data-testid="explore-by-nationality-dropdown"
          name="cards"
          id="cards"
          onChange={ changeSelectNationality }
        >
          {
            dataNationalityFoods.map((selected) => (
              <option
                key={ selected.strArea }
                data-testid={ `${selected.strArea}-option` }
              >
                {selected.strArea}
              </option>
            ))
          }
        </select>
      </ExploreNation>
      <FoodAndDrink>
        {
          changeSelect.length > 0 && changeSelect !== 'All' ? (
            dataFilterNationality.slice(0, maxArray)
              .map((cardNationality, index) => (
                <Card key={ index }>
                  <button
                    type="button"
                    data-testid={ `${index}-recipe-card` }
                    onClick={ () => redirectByDetails(cardNationality.idMeal) }
                  >
                    <img
                      className="image_food"
                      src={ cardNationality.strMealThumb }
                      alt={ `${cardNationality.strMeal}` }
                      data-testid={ `${index}-card-img` }
                    />
                    <div>
                      <h4
                        data-testid={ `${index}-card-name` }
                      >
                        { cardNationality.strMeal }
                      </h4>
                    </div>
                  </button>
                </Card>
              ))
          )
            : (
              dataMealsState.slice(0, maxArray)
                .map((card, index) => (
                  <Card key={ index }>
                    <button
                      type="button"
                      data-testid={ `${index}-recipe-card` }
                      onClick={ () => redirectByDetails(card.idMeal) }
                    >
                      <img
                        className="image_food"
                        src={ card.strMealThumb }
                        alt={ `${card.strArea}` }
                        data-testid={ `${index}-card-img` }
                      />
                      <div>
                        <h4
                          data-testid={ `${index}-card-name` }
                        >
                          { card.strMeal }
                        </h4>
                      </div>
                    </button>
                  </Card>
                ))
            )
        }
      </FoodAndDrink>
      <Footer />
    </>
  );
}

export default ExploreNationalities;
