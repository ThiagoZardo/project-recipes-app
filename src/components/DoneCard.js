import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';
import { setLocalStorage } from '../functions/checkLocalStorage';
import { DoneRecipes } from '../styles/RecipeDone';

function DoneCard() {
  const [copied, setCopied] = useState([]);
  const [getDone, setGetDone] = useState([]);
  const backupDone = JSON.parse(localStorage.getItem('doneRecipes'));
  const history = useHistory();

  useEffect(() => {
    setGetDone(backupDone);
  }, []);

  const shareImage = ({ target }) => {
    setCopied([...copied, target.id]);
    const recipeUrl = `http://localhost:3000/${(target.value)}/${target.id}`;
    copy(recipeUrl);
  };

  const handleClick = ({ target }) => {
    if (target.value === 'foods') {
      const filterFood = backupDone.filter((done) => done.type === 'food');
      setGetDone(filterFood);
    }
    if (target.value === 'drinks') {
      const filterDrinks = backupDone.filter((done) => done.type === 'drink');
      setGetDone(filterDrinks);
    }
    if (target.value === 'all') {
      setGetDone(backupDone);
    }
    setLocalStorage();
  };
  return (
    <DoneRecipes>
      <div className="DoneCategorias">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ handleClick }
          value="all"
        >
          <img src="/images/All.svg" alt="All" />
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ handleClick }
          value="foods"
        >
          <img src="/images/Beef.svg" alt="Food" />
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ handleClick }
          value="drinks"
        >
          <img src="/images/Ordinary Drink.svg" alt="Drink" />
          Drinks
        </button>
      </div>
      <div className="cards">
        {
          getDone.map((done, index) => (
            <div
              type="button"
              key={ done.id }
            >
              <input
                type="image"
                src={ done.image }
                alt={ done.name }
                data-testid={ `${index}-horizontal-image` }
                className="image"
                onClick={
                  () => history.push(`/${done.type.concat('s')}/${done.id}`)
                }
              />
              <div className="catshare">
                {
                  done.alcoholicOrNot.length > 0
                    ? (
                      <p
                        data-testid={ `${index}-horizontal-top-text` }
                        className="categoria"
                      >
                        {done.alcoholicOrNot}
                      </p>
                    )
                    : (
                      <p
                        data-testid={ `${index}-horizontal-top-text` }
                        className="categoria"
                      >
                        {done.nationality}
                        {' '}
                        -
                        {' '}
                        {done.category}
                      </p>
                    )
                }
                <input
                  type="image"
                  src="/images/shareIcon.svg"
                  alt="shareIcon"
                  value={ done.type.replace('food', 'foods') }
                  id={ done.id }
                  data-testid={ `${index}-horizontal-share-btn` }
                  onClick={ shareImage }
                />
              </div>
              {
                copied.includes(done.id) && <p>Link copied!</p>
              }
              <button
                type="button"
                onClick={
                  () => history.push(`/${done.type.concat('s')}/${done.id}`)
                }
              >
                <h3
                  data-testid={ `${index}-horizontal-name` }
                  id="name"
                >
                  {done.name}
                </h3>
              </button>
              <p
                data-testid={ `${index}-horizontal-done-date` }
                className="Date"
              >
                {`Done in: ${done.doneDate}`}

              </p>
              <aside>
                {
                  done.tags.map((tag) => (
                    <p
                      key={ tag }
                      data-testid={ `0-${tag}-horizontal-tag` }
                      className="tag"
                    >
                      {tag}
                    </p>
                  ))
                }
              </aside>
            </div>
          ))
        }
      </div>
    </DoneRecipes>
  );
}

export default DoneCard;
