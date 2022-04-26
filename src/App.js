import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Foods from './pages/Foods';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Foods } />
        <Route path="/drinks" component="Drinks" />
        <Route path="/foods/{id-da-receita}" component="" />
        <Route path="/drinks/{id-da-receita}" component="" />
        <Route path="/foods/{id-da-receita}/in-progress" component="" />
        <Route path="/drinks/{id-da-receita}/in-progress" component="" />
        <Route path="/explore" component="Explore" />
        <Route path="/explore/foods" component="" />
        <Route path="/explore/drinks" component="" />
        <Route path="/explore/foods/ingredients" component="" />
        <Route path="/explore/drinks/ingredients" component="" />
        <Route path="/explore/foods/nationalities" component="" />
        <Route path="/profile" component="Profile" />
        <Route path="/done-recipes" component="Done" />
        <Route path="/favorite-recipes" component="Favorite" />
      </Switch>
    </div>
  );
}

export default App;
