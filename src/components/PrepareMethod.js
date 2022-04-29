import React from 'react';
import PropTypes from 'prop-types';

function PrepareMethod(props) {
  const { recipeIngredients, recipeMeasures, recipeInstructions, recipeVideo } = props;
  console.log(recipeIngredients);
  console.log(recipeMeasures);

  return (
    <>
      <section>
        <p>Ingredientes</p>
        <p>
          { recipeIngredients.map((ingredient, index) => (
            <p key={ index }>
              <scan>{ ingredient }</scan>
              {' - '}
              <scan>{ recipeMeasures[index] }</scan>
            </p>
          ))}
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

PrepareMethod.propTypes = {
  recipeIngredients: PropTypes.string.isRequired,
  recipeMeasures: PropTypes.string.isRequired,
  recipeInstructions: PropTypes.string.isRequired,
  recipeVideo: PropTypes.string.isRequired,
};

export default PrepareMethod;
