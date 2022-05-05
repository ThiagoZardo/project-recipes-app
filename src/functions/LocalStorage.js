export function setLocalStorageInProgress(type, check, itemId) {
  const idCock = type === 'drinks' ? itemId : '';
  const idMeal = type === 'foods' ? itemId : '';
  const ingredientfood = type === 'foods' ? check : [];
  const ingredientdrink = type === 'drinks' ? check : [];
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const inProgressObj = {
    cocktails: {
      ...inProgress.cocktails,
      [idCock]: ingredientdrink,
    },
    meals: {
      ...inProgress.meals,
      [idMeal]: ingredientfood,
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressObj));
}

export function setLocalStorageDoneRecipes(food, drink, itemId, type) {
  const { idDrink } = drink;
  const img = !idDrink ? food.strMealThumb : drink.strDrinkThumb;
  const title = !idDrink ? food.strMeal : drink.strDrink;
  const alcoholic = idDrink ? drink.strAlcoholic : '';
  const ctegory = !idDrink ? food.strCategory : drink.strCategory;
  const nation = !idDrink ? food.strArea : '';
  const tags = !idDrink ? food.strTags.split(',') : [];
  const data = new Date();
  const year = data.getFullYear();
  const month = (data.getMonth() + 1).toString();
  const month2 = month.length === 1 ? `0${month}` : month;
  const day = data.getDate().toString();
  const day2 = day.length === 1 ? `0${day}` : day;
  const strDate = `${day2}/${month2}/${year}`;
  const doneObj = {
    id: itemId,
    type,
    nationality: nation,
    category: ctegory,
    alcoholicOrNot: alcoholic,
    name: title,
    image: img,
    doneDate: strDate,
    tags,
  };
  const getStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  localStorage.setItem('doneRecipes', JSON.stringify([...getStorage, doneObj]));
}
