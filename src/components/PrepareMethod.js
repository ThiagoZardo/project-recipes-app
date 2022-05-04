import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { filterIngredients, filterMeasures } from '../functions/filterRecipe';

function PrepareMethod() {
  const detailFood = useSelector((state) => state.details.foodsDetails);
  const detailDrink = useSelector((state) => state.details.drinksDetails);
  const [videoUrl, setvideoUrl] = useState('');
  const { idDrink } = detailDrink;
  const ifDetail = !idDrink ? detailFood : detailDrink;
  const recipeIngredients = filterIngredients(ifDetail);
  const recipeMeasures = filterMeasures(ifDetail);

  useEffect(() => {
    if (Object.values(detailFood).length) {
      const YTUrl = detailFood.strYoutube.replace('watch?v=', 'embed/');
      setvideoUrl(YTUrl);
    }
  }, [detailFood]);

  return (
    <>
      <section>
        <p>Ingredientes</p>
        { recipeIngredients.map((ingredient, index) => (
          <p
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            <span>{ ingredient }</span>
            {' - '}
            <span>{ recipeMeasures[index] }</span>
          </p>
        ))}
      </section>
      <article>
        <p>Instruções</p>
        <p
          data-testid="instructions"
        >
          {!idDrink ? detailFood.strInstructions : detailDrink.strInstructions}
        </p>
        {
          !idDrink
          && <iframe
            width="420"
            height="315"
            src={ videoUrl }
            title="Vídeo da Receita"
            data-testid="video"
          />
        }
      </article>
    </>
  );
}

export default PrepareMethod;
