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
      <h1 className="text-center mt-5">View Your Favorites</h1>
      <section className="row">
        {!favorites.length && <h4 className="ms-4 mt-3 fw-light">You haven't added any Favorites.</h4>}

        {favorites.map(favorite => (
          <article key={favorite.recipe_id} className="col-4 d-flex flex-column align-items-center p-3">
            <h4>{favorite.Recipe.name}</h4>
            <NavLink className="btn btn-primary" to={`/recipe/${favorite.recipe_id}`} state={{
              recipe:favorite.Recipe,
              isFavorite: true
            }}>View Recipe</NavLink>
          </article>
        ))}
      </section>
    </>
  )
}

export default UserFavorites;