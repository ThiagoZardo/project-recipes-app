import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getNationalityFoods } from '../helpers';

function ExploreNationalities() {
  const maxArray = 12;
  const [dataNationalityFoods, setDataNationalityFoods] = useState([]);

  useEffect(() => {
    const fetchDataNationality = async () => {
      const data = await getNationalityFoods();
      console.log(data.meals);
      setDataNationalityFoods(data.meals);
    };
    fetchDataNationality();
  }, []);

  return (
    <div>
      <header>
        <Header heading="Explore Nationalities" />
      </header>
      <div>
        <select
          data-testid="explore-by-nationality-dropdown"
          name="cards"
          id="cards"
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
        {
          dataNationalityFoods.slice(0, maxArray)
            .map((card, index) => (
              <button
                type="button"
                key={ index }
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  alt={ `${card.strArea}` }
                  data-testid={ `${index}-card-img` }
                />
                <h4
                  data-testid={ `${index}-card-name` }
                >
                  { card.strArea }
                </h4>
              </button>
            ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default ExploreNationalities;
