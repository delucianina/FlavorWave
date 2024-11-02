import { NavLink, useNavigate } from 'react-router-dom';
// import { useStore } from '../store';
import { ReactEventHandler } from 'react';
import axios from 'axios';

function Header() {
    return (
        

        // BOOTSTRAP NAV ----------------------
        <nav className="navbar-bg navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand custom-font chili-red" href="#">FlavorWave</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Search Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Favorites</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* SEARCH BAR */}
                <div className="container-fluid search-bar">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="What are you craving?" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;