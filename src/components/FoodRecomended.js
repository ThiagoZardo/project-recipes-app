import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

function FoodRecomended() {
  const foodState = useSelector((state) => state.search.foodsSearch);
  const maxRecomend = 6;
  return (
    <Swiper
      modules={ Navigation }
      slidesPerView={ 2 }
      spaceBetween={ 50 }
      Navigation
    >
      <section>
        {
          foodState.slice(0, maxRecomend).map((food, index) => (
            <SwiperSlide
              key={ food.idFood }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={ food.strMealThumb }
                alt="Meal"
                width="360"
                height="128"
              />
              <h3 data-testid={ `${index}-recomendation-title` }>{food.strMeal}</h3>
              <h5>{food.strCategory}</h5>
            </SwiperSlide>
          ))
        }
      </section>
    </Swiper>
  );
}

export default FoodRecomended;
