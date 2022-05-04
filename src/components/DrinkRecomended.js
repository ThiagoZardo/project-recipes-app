import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

function DrinkRecomended() {
  const drinkState = useSelector((state) => state.search.drinksSearch);
  const maxRecomended = 6;
  return (
    <Swiper
      modules={ Navigation }
      spaceBetween={ 50 }
      slidesPerView={ 2 }
      Navigation
    >
      <section>
        {
          drinkState.slice(0, maxRecomended).map((drink, index) => (
            <SwiperSlide
              key={ drink.idDrink }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={ drink.strDrinkThumb }
                alt="drink"
                width="360"
                height="128"
              />
              <h3 data-testid={ `${index}-recomendation-title` }>{drink.strDrink}</h3>
              <h5>{drink.strAlcoholic}</h5>
            </SwiperSlide>
          ))
        }
      </section>
    </Swiper>
  );
}

export default DrinkRecomended;
