import { NavLink, useLocation } from "react-router-dom";


function Recipe() {
    const location = useLocation();

    return(
        <section className="text-center">
            <h2>{location.state.recipe.name}</h2>
            <p>Ingredients: {location.state.recipe.ingredients}</p>
            <p>Instructions: {location.state.recipe.instructions}</p>
            <NavLink to={location.state.isFavorite ? '/favorites' : '/recipes'}>Go Back</NavLink>
        </section>
    )
}

export default Recipe;