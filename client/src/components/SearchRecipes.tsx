import React, { useState } from 'react';

interface Recipe {
    id: number;
    name: string;
    ingredients: string;
    instructions: string;
    user_id?: number;
}

const SearchRecipes: React.FC = () => {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearch = async () => {
    const response = await fetch(`/api/recipes/search?ingredient=${ingredient}`);
    const data: Recipe[] = await response.json();
    setRecipes(data);
  };

  const handleAddFavorite = async (recipe: Recipe) => {
    await fetch('/api/favorites/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    });
  };

  return (
    <div>
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter an ingredient"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <button onClick={() => handleAddFavorite(recipe)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchRecipes;