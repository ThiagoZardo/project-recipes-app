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
