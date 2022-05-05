export const fetchMeals = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchFoods = async (paramFilter) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${paramFilter}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchDrinks = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getDrinks = async (paramFilter) => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${paramFilter}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchFoodCategory = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    return data.meals;
  } catch (error) {
    return error;
  }
};

export const getSurpriseFoods = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchDrinkCategory = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    return error;
  }
};

export const fetchFoodByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    return error;
  }
};

export const fetchDrinkByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
    );
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    return error;
  }
};

export const getSurpriseDrinks = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getIngredientsFoods = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchFoodById = async (id) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const meal = await response.json();
    return meal;
  } catch (error) {
    return error;
  }
};

export const getIngredientsDrinks = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchFilterIngredientsFoods = async (paramFilterFood) => {
  try {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${paramFilterFood}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchFilterIngredientsDrinks = async (paramFilterDrink) => {
  try {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${paramFilterDrink}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchDrinkById = async (id) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const meal = await response.json();
    return meal;
  } catch (error) {
    return error;
  }
};
