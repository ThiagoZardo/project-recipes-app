const fetchDrinkByCategory = async () => {
  const r = await fetch('www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  const data = await r.json();
  console.log(data);
  return data.drinks;
};

export default fetchDrinkByCategory;
