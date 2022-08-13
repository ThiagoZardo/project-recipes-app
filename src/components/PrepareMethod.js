import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { filterIngredients, filterMeasures } from '../functions/filterRecipe';
import { Ingredients, Instructions } from '../styles/DetailsAll';

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
      <Ingredients>
        <h2>Ingredientes</h2>
        <div>
          { recipeIngredients.map((ingredient, index) => (
            <p
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              <span>{ `- ${ingredient}` }</span>
              {' - '}
              <span>{ recipeMeasures[index] }</span>
            </p>
          ))}
        </div>
      </Ingredients>
      <Instructions>
        <h2>Instruções</h2>
        <div>
          <p
            data-testid="instructions"
          >
            {!idDrink ? detailFood.strInstructions : detailDrink.strInstructions}
          </p>
        </div>
        {
          !idDrink
          && (
            <>
              <h2>Vídeo</h2>
              <iframe
                width="420"
                height="315"
                src={ videoUrl }
                title="Vídeo da Receita"
                data-testid="video"
              />
            </>
          )
        }
      </Instructions>
    </>
  );
}

export default PrepareMethod;
