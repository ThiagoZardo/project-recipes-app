import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import Recomended from '../styles/Recomended';

function FoodRecomended() {
  const foodState = useSelector((state) => state.search.foodsSearch);
  const maxRecomend = 6;
  return (
    <Recomended>
      <Swiper
        modules={ Navigation }
        slidesPerView={ 2 }
        spaceBetween={ 50 }
        Navigation
        className="Swiper"
      >
        {
          foodState.slice(0, maxRecomend).map((food, index) => (
            <SwiperSlide
              key={ food.idFood }
              data-testid={ `${index}-recomendation-card` }
              className="CardSwiper"
            >
              <h5>Recommended</h5>
              <img
                src={ food.strMealThumb }
                alt="Meal"
                width="360"
                height="128"
              />
              <h5>{food.strCategory}</h5>
              <h3 data-testid={ `${index}-recomendation-title` }>{food.strMeal}</h3>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Recomended>
  );
}

export default FoodRecomended;
