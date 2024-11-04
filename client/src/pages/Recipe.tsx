import { NavLink, useLocation } from "react-router-dom";


function Recipe() {
    const location = useLocation();

    return (
        <div className="container py-5">
            <section className="p-5">
                <article className="d-flex flex-column p-4 result-outline">
                    <h3>{location.state.recipe.name}</h3>
                    <p className="flex-fill">Ingredients: {location.state.recipe.ingredients}</p>
                    <details>
                        <summary>Instructions:</summary>
                        {location.state.recipe.instructions}
                    </details>
                    <div className="d-flex justify-content-center mt-4">
                        <NavLink className="btn-fav" to={location.state.isFavorite ? '/favorites' : '/recipes'}>Go Back</NavLink>
                    </div>
                </article>
            </section>

        </div>
    )
}

export default Recipe;