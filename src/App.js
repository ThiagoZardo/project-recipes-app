import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DetailsDrink from './pages/DetailsDrink';
import DetailsFood from './pages/DetailsFood';
import Done from './pages/Done';
import DrinkProgress from './pages/DrinkProgress';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoods from './pages/ExploreFoods';
import ExploreIngredients from './pages/ExploreIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import Favorite from './pages/Favorite';
import FoodProgress from './pages/FoodProgress';
import Foods from './pages/Foods';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:idMeal" component={ DetailsFood } />
        <Route exact path="/drinks/:idDrink" component={ DetailsDrink } />
        <Route
          exact
          path="/foods/{id-da-receita}/in-progress"
          component={ FoodProgress }
        />
        <Route
          exact
          path="/drinks/{id-da-receita}/in-progress"
          component={ DrinkProgress }
        />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/explore/foods/ingredients" component={ ExploreIngredients } />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreNationalities }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ Done } />
        <Route exact path="/favorite-recipes" component={ Favorite } />
      </Switch>
    </div>
  );
}

export default App;
