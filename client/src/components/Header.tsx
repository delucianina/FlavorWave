// import { NavLink, useNavigate } from 'react-router-dom';
// import axios from 'axios'

function Header() {
    return (
        // <nav>
        //     <div className='navbar'>

        //         <h1 className='custom-font chili-red logo'>FlavorWave</h1>
        //         <h6>Search Recipes</h6>
        //         <h6>Favorites</h6>
        //         <h6>About</h6>
        //         <h6>Contact</h6>

        //     </div>
        // </nav>

        // BOOTSTRAP ----------------------
            <nav className="navbar-bg navbar navbar-expand-lg bg-body-tertiary navbar-bg">
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
                </div>
            </nav>
    )
}

export default Header;