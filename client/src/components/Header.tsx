import { NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { ReactEventHandler } from 'react';
import axios from 'axios';
import SearchRecipes from './SearchRecipes';

function Header() {

    const store = useStore();
    const navigate = useNavigate();

    if (!store) {
        throw new Error('You must be logged in');
    }

    const { state, setState } = store;

    const logoutUser: ReactEventHandler<HTMLAnchorElement> = async (event) => {
        event.preventDefault();

        await axios.get('/auth/logout');

        setState(oldState => ({
            ...oldState,
            user: null
        }));

        navigate('/');
    };
    return (


        // BOOTSTRAP NAV ----------------------
        <nav className="navbar-bg navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand custom-font chili-red logo" href="#">FlavorWave</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    {state.user && <p className="m-0 pe-4 align-middle">Welcome, {state.user.username}</p>}

                    <NavLink className="nav-link" to="/">Home</NavLink>

                    {/* COPILOT SAYS THIS IS SET UP CORRECTLY, BUT WE CAN'T TEST IT YET */}
                    {state.user ? (
                        <>
                            <a onClick={logoutUser} className="nav-link" href="/logout">Log Out</a>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <NavLink className="dropdown-item active" aria-current="page" to="/recipes" end>Recipes</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/favorites" end>Favorites</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/recipes/create">Add Recipe</NavLink>
                                        </li>
                                        {/* <li>
                                            <NavLink className="dropdown-item" to="/favorites/create">Add Favorite</NavLink>
                                        </li> */}
                                        <li>
                                            <a className="dropdown-item" href="#">About</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Contact</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <NavLink className="nav-link" to="/login">Sign In</NavLink>
                            <NavLink className="nav-link" to="/register">Sign Up</NavLink>
                        </>
                    )}
                </div>
                {/* SEARCH BAR */}
                {state.user && <SearchRecipes />}
            </div>
        </nav>
    )
}

export default Header;