import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// interface Recipe {
//   id: number;
//   name: string;
//   ingredients: string;
//   instructions: string;
//   user_id?: number;
// }

function SearchRecipes() {
  const [ingredient, setIngredient] = useState('');
  const navigate = useNavigate();


  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await axios.get(`/api/recipes/search?ingredient=${ingredient}`);
      setIngredient(''); // resets search bar once you search 
      navigate('/results', {
        state: {
          results: res.data
        }
      });
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="container-fluid search-bar">
      <form onSubmit={handleSearch} className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="What are you craving?"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          aria-label="Search" />
        <button className="btn btn-outline-success">Search</button>
      </form>
    </div>
  );
};

export default SearchRecipes;