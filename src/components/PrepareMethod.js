import React from 'react';
import PropTypes from 'prop-types';

function PrepareMethod(props) {
  const {
    recipeIngredients,
    recipeMeasures,
    recipeInstructions,
    recipeVideo,
    willShowVideo,
  } = props;
  // console.log(recipeIngredients);
  // console.log(recipeMeasures);

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
          {recipeInstructions}
        </p>
        {
          willShowVideo && (
            <iframe
              width="420"
              height="315"
              src={ recipeVideo }
              title="Vídeo da Receita"
              data-testid="video"
            />
          )
        }
      </article>
    </>
  );
}

PrepareMethod.propTypes = {
  recipeIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipeMeasures: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipeInstructions: PropTypes.string.isRequired,
  recipeVideo: PropTypes.string.isRequired,
  willShowVideo: PropTypes.bool.isRequired,
};

export default PrepareMethod;
