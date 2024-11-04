import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Recipe } from '../interfaces';

function UserRecipes() {
  const [shops, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios.get('/api/recipes')
      .then(res => {
        setRecipes([...res.data.recipes]);
      })
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">View Your Recipes</h1>
      <div className="container">
        <section className="row">
          {!shops.length && <h4 className="ms-4 mt-3 fw-light">You haven't created any recipes.</h4>}

          {shops.map(recipe => (
            <article key={recipe.id} className="col-4 d-flex flex-column align-items-center p-3">
              <h3>{recipe.name}</h3>
              <p>Ingredients: {recipe.ingredients}</p>
              <p className="flex-fill">Instructions: {recipe.instructions}</p>
              <div className="d-flex justify-content-center">
                <NavLink className="btn btn-primary" to={`/shop/${recipe.id}`}>View Recipe</NavLink>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}

export default UserRecipes;