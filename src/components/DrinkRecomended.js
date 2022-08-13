import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import Recomended from '../styles/Recomended';

function DrinkRecomended() {
  const drinkState = useSelector((state) => state.search.drinksSearch);
  const maxRecomended = 6;
  return (
    <Recomended>
      <Swiper
        modules={ Navigation }
        spaceBetween={ 50 }
        slidesPerView={ 2 }
        Navigation
        className="Swiper"
      >
        {
          drinkState.slice(0, maxRecomended).map((drink, index) => (
            <SwiperSlide
              key={ drink.idDrink }
              data-testid={ `${index}-recomendation-card` }
              className="CardSwiper"
            >
              <h5>Recommended</h5>
              <img
                src={ drink.strDrinkThumb }
                alt="drink"
                width="360"
                height="128"
              />
              <h5>{drink.strAlcoholic}</h5>
              <h3 data-testid={ `${index}-recomendation-title` }>{drink.strDrink}</h3>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Recomended>
  );
}

export default DrinkRecomended;
