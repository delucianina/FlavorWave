import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Favorite } from '../interfaces';

function UserFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    axios.get('/api/favorites/user')
      .then(res => {
        setFavorites([...res.data.favorites]);
      })
  }, []);

  return (
    <>
      <h1 className="text-center view-fav-bg">View Your Favorites</h1>
      <div className="container py-5">
        <section className="results-output">
          {!favorites.length && <h4 className="ms-4 mt-3 fw-light">You haven't added any Favorites.</h4>}

          {favorites.map(favorite => (
            <article key={favorite.recipe_id} className="d-flex flex-column p-4 result-outline">
              <h3>{favorite.Recipe.name}</h3>
              <p className="flex-fill">{favorite.Recipe.ingredients}</p>
              <details>
                <summary>Instructions</summary>
                {favorite.Recipe.instructions}
              </details>
              <div className="d-flex justify-content-center mt-4">
                <NavLink className="btn-fav" to={`/recipe/${favorite.recipe_id}`} state={{
                  recipe: favorite.Recipe,
                  isFavorite: true
                }}>View Recipe</NavLink>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}

export default UserFavorites;