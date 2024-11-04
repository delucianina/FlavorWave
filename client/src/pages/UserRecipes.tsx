import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Recipe } from '../interfaces';

function UserRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios.get('/api/recipes')
      .then(res => {
        // console.log(res.data);
        setRecipes([...res.data.recipes]);
      })
  }, []);

  return (
    <>
      <h1 className="text-center view-recipes-bg">View Your Recipes</h1>
      <div className="container py-5">
        <section className="results-output">
          {!recipes.length && <h4 className="ms-4 mt-3 fw-light">You haven't created any recipes.</h4>}

          {recipes.map(recipe => (
            <article key={recipe.id} className="d-flex flex-column p-4 result-outline">
              <h3>{recipe.name}</h3>
              <p className="flex-fill">Ingredients: {recipe.ingredients}</p>
              <details>
                <summary>Instructions</summary>
                {recipe.instructions}
              </details>
              <div className="d-flex justify-content-center mt-4">
                <NavLink to={`/recipe/${recipe.id}`} className="btn-fav" state={{
                  recipe: recipe,
                  isFavorite: false
                }}>View Recipe</NavLink>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}

export default UserRecipes;