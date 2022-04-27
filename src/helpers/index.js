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
