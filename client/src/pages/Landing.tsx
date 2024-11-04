// import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Landing() {

    //placeholder recipes for now, will be replaced with actual recipes later on when implemented
    const todaysSpecial = 'Pumpkin Pie';
    const randomRecipes = ['Shrimp fried rice', 'Chicken alfredo', 'lasanga'];

    // State to manage the selected recipe
    const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

    //Event handler for button click
    const handleRecipeClick = (recipe: string) => {
        setSelectedRecipe(recipe);
        alert(`You selected: ${recipe}`);
    }



    return (
        <main>

            {/* this will be centered in the middle top of the page */}
            <section>
                <h2>Today's Special</h2>
                <p>{todaysSpecial}</p>
                <button onClick={() => handleRecipeClick(todaysSpecial)}>Select Today's Special</button>
            </section>

            {/* this is just in the middle */}
            <section>
                <h2>Random Recipes</h2>
                <ul>
                    {randomRecipes.map((recipe, index) => (
                        <li key={index}>
                            {recipe}
                            <button onClick={() => handleRecipeClick(recipe)}>Select</button>
                        </li>
                    ))}
                </ul>
            </section>

            {selectedRecipe && (
                <section>
                    <h2>Selected Recipe</h2>
                    <p>{selectedRecipe}</p>
                </section>
            )}
        </main>
    );
}

export default Landing;