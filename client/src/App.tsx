import React from 'react';
import Main from './pages/Main';
import Recipe from './pages/Recipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeData from './types/RecipeData';

import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

function App() {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);

  useEffect(() => {
    fetch("https://hfb-recipe-sys-api.herokuapp.com/recipes").then(
      response => response.json()
    ).then((data => setRecipes(data))
    ).catch(err => {
      console.log("APP TSX FETCH ERROR")
    });
  }, []);


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={`/:id`}>
            <Recipe recipes = {recipes}/>
          </Route>
          <Route path={`/`}>
            <Main recipes = {recipes}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
