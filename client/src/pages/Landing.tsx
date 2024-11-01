// import { NavLink } from 'react-router-dom';

function Landing() {

    //placeholder recipes for now, will be replaced with actual recipes later on when implemented
    const todaysSpecial= 'Pumpkin Pie';
    const randomRecipes = ['Shrimp fried rice','Chicken alfredo','lasanga'];



    return (
        <main>

            //this will be centered in the middle top of the page 
            <section>
                <h2>Today's Special</h2>
                <p>{todaysSpecial}</p>
            </section>

            //this is just in the middle
            <section>
                <h2>Random Recipes</h2>
                <ul>
                    {randomRecipes.map((recipe, index) => (
                        <li key={index}>{recipe}</li>
                    ))}
                </ul>
            </section>


        </main>
    )
}