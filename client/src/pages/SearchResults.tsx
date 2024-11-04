import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import { Recipe } from '../interfaces';

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();

  const addFavorite = async (recipe: Recipe) => {
    await axios.post('/api/favorites', recipe);

    navigate('/favorites');
  }

  return (
    <>
      <h1 className="text-center mt-5">View Your Recipes</h1>
      <div className="container py-5">
        <section className="results-output">
          {!location.state.results.length && <h4 className="ms-4 mt-3 fw-light">No results found...</h4>}

          {location.state.results.map((recipe: Recipe, index: number) => (
            <article key={index} className="d-flex flex-column p-4 border border-light-subtle">
              <h3>{recipe.title}</h3>
              <p className="flex-fill">Ingredients: {recipe.ingredients}</p>
              <details>
                <summary>Instructions</summary>
                {recipe.instructions}
              </details>
              <div className="d-flex justify-content-center mt-4">
                <button onClick={() => addFavorite(recipe)} className="btn btn-primary">Add to Favorites</button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}

export default SearchResults;