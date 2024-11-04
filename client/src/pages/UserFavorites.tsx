import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Favorite } from '../interfaces';

function UserFavorites() {
  const [shops, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    axios.get('/api/favorites')
      .then(res => {
        setFavorites([...res.data.favorites]);
      })
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">View Your Favorites</h1>
      <section className="row">
        {!shops.length && <h4 className="ms-4 mt-3 fw-light">You haven't added any Favorites.</h4>}

        {shops.map(favorite => (
          <article key={favorite.recipe_id} className="col-4 d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center">
              <NavLink className="btn btn-primary" to={`/shop/${favorite.recipe_id}`}>View Favorite</NavLink>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

export default UserFavorites;