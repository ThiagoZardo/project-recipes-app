import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';
import '../styles/done.css';
import { setLocalStorage } from '../functions/checkLocalStorage';

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
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ handleClick }
        value="all"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ handleClick }
        value="foods"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ handleClick }
        value="drinks"
      >
        Drinks
      </button>
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
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {done.nationality}
              {' '}
              -
              {' '}
              {done.category}
            </p>
            {
              done.alcoholicOrNot.length > 0
              && (
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {done.alcoholicOrNot}
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
            <p>{copied.includes(done.id) && 'Link copied!'}</p>
            <button
              type="button"
              onClick={
                () => history.push(`/${done.type.concat('s')}/${done.id}`)
              }
            >
              <h4
                data-testid={ `${index}-horizontal-name` }
                id="name"
              >
                {done.name}
              </h4>
            </button>
            <p data-testid={ `${index}-horizontal-done-date` }>{done.doneDate}</p>
            {
              done.tags.map((tag) => (
                <p
                  key={ tag }
                  data-testid={ `0-${tag}-horizontal-tag` }
                >
                  {tag}
                </p>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default DoneCard;
