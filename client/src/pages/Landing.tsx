import { NavLink } from 'react-router-dom';
import { useStore } from '../store';

function Landing() {

    //placeholder recipes for now, will be replaced with actual recipes later on when implemented
    const todaysSpecial= 'Pumpkin Pie';
    const randomRecipes = ['Shrimp fried rice','Chicken alfredo','lasanga'];

    const store = useStore();

    if (!store) {
      throw new Error("Store is not available");
    }
  
    const { state } = store;



    return (
        <main>


            <NavLink to={state.user ? '/shops' : '/register'} className="btn btn-primary btn-lg px-5">
                {state.user ? 'View Your Shops!' : 'Start Now!'}
            </NavLink>


            {/* //this will be centered in the middle top of the page  */}
            <section>
                <h2>Today's Special</h2>
                <p>{todaysSpecial}</p>
            </section>

            {/* //this is just in the middle */}
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

export default Landing;