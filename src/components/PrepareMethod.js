import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function PrepareMethod(props) {
  const { recipeIngredients, recipeMeasures, recipeInstructions, recipeVideo } = props;
  return (
    <>
      <section>
        <p>Ingredientes</p>
        <p
          data-testid="index-ingredient-name-and-measure"
        >
          {`- ${recipeIngredients} - ${recipeMeasures}`}
        </p>
      </section>
      <article>
        <p>Instruções</p>
        <p
          data-testid="instructions"
        >
          {recipeInstructions}
        </p>
        <iframe
          width="420"
          height="315"
          src={ recipeVideo }
          title="Vídeo da Receita"
        />
      </article>
    </>
  );
}

export default PrepareMethod;

PrepareMethod.propTypes = {
  recipeIngredients: propTypes.shape().isRequired,
  recipeMeasures: propTypes.shape().isRequired,
  recipeInstructions: propTypes.shape().isRequired,
  recipeVideo: propTypes.shape().isRequired,
};
