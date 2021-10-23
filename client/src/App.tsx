import React from 'react';
import Main from './pages/Main';
import Recipe from './pages/Recipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { useState, useEffect } from 'react';


function App() {
  interface RecipeData {
    title: string,
    course: string[],
    cuisine: string[],
    servings: number,
    calories: number,
    ingredients: string[],
    instructions: string,
    keywords: string[]
  }

  const [recipes, setRecipes] = useState<RecipeData[]>([])

  useEffect(() => {
    fetch("https://hfb-recipe-sys-api.herokuapp.com/recipes").then(
      response => response.json()
    ).then((data => setRecipes(data))
    ).catch(err => {
      console.log(recipes)
    });
  }, []);
  
  return (   
    <Router>
      <div className="App">
        <Switch>
          <Route path={`/recipes/:id`}>
            <Recipe recipes = {recipes}/>
          </Route>
          <Route path={`/recipes`}>
            <Main recipes = {recipes}/>
            {console.log(recipes)}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/**
 * const recipes = [
    {
        "title": "eggs",
        "ingredients": ["Apples"," Pears "],
        "steps": ["Cook", "Clean"],
        "id" : 0
    },
    {
        "title": "Eggs Benedict",
        "ingredients": ["Oranges","Peaches"],
        "steps": ["Bake", "Clean"],
        "id": 1
    },
    {
        "title": "Chicken Tikka Masala",
        "ingredients": ["Chicken","Tikka Masala"],
        "steps": ["Combine", "Cook"],
        "id": 2
    }
]
 */