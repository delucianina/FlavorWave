import { useEffect } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useStore } from './store';

import Header from './components/Header';
// import Profile from './components/Profile';
// import Favorites from './components/Favorites';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import AuthForm from './pages/AuthForm';
import NotFound from './pages/NotFound';
import UserRecipes from './pages/UserRecipes';
import UserFavorites from './pages/UserFavorites';
import RecipeForm from './pages/RecipeForm';
import Recipe from './pages/Recipe';
import SearchResults from './pages/SearchResults';
// import Contact from './pages/Contact';
// import FavoriteForm from './pages/FavoriteForm';


function App() {
  const store = useStore();

  if (!store) {
    throw new Error("Store is not available");
  }
  
  const { state } = store;
  const location = useLocation();

  // Create an object of page titles to use for the browser tab
  const titles: {[key: string]: string} = {
    '/': 'FlavorWave - Home',
    '/register': 'FlavorWave - Register',
    '/login': 'FlavorWave - Log In',
    '/recipes': 'FlavorWave - View Recipes',
    '/recipes/create': 'FlavorWave - Create Recipe',
    '/recipes/search': 'FlavorWave - Search Recipe',
    '/results': 'FlavorWave - Search Results',
    '/favorites': 'FlavorWave - Search Recipe',
    '/favorites/create': 'FlavorWave - Search Recipe',
    '/contact': 'FlavorWave - Contact Us'
  };

  const getTitle = (path: string): string => {
    // console.log(path);
    if (path.startsWith('/recipe/')) {
      const route = path.split('/recipe/')[1];
      if (!isNaN(Number(route))) {
        return `FlavorWave - Recipe ${route}`;
      } else {
        return `FlavorWave - ${route[0].toUpperCase()}${route.slice(1)} Recipe`
      }
    }
    return titles[path] || 'Page Not Found';
  };

  useEffect(() => {
    // Grab the corresponding title based on the current route - what comes after localhost:5173
    const title = getTitle(location.pathname);

    // Set the browser tab title when the location of the browser changes
    document.title = title || 'Page Not Found';
  }, [location]);

  return (

    <>
      {state.loading && (
        <>
          <div className="loading d-flex justify-content-center align-items-center">
            <h2>Stirring ...</h2>
          </div>
        </>
      )}

      <Header />
      

      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/contact" element={<Contact />} /> */}

          {/* 
            These are conditional routes that will only load based on the state.user property being truthy or falsey 
            I'm using a ternary expression - CONDITION ? IF TRUTHY : IF NOT TRUTHY
          */}
          {state.user ? (
            <>
              <Route path="/" element={<Landing />}/>
              <Route path="/results" element={<SearchResults />} />
              <Route path="/recipes" element={<UserRecipes />} />
              <Route path="/recipes/create" element={<RecipeForm />} />
              <Route path="/recipe/:id" element={<Recipe />} />
              <Route path="/favorites" element={<UserFavorites />} />
              


              {/* <Route path="/favorites/create" element={<FavoriteForm />} /> */}
            </>
          ) : (
            <>
              <Route path="/register" element={<AuthForm isLogin={false} />} />
              <Route path="/login" element={<AuthForm isLogin={true} />} />
            </>
          )}

          {/* Fallback route that shows a not found page if they visit a path that does not have a route above and/or they visit a user route and the state user property is null */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      
    </>
  )
}

export default App
















// import { useState } from 'react'

/*Components*/
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Profile from './components/Profile';
// import Favorites from './components/Favorites';

/* Pages */
// import Landing from './pages/Landing.tsx';
// import UserProfile from './pages/UserProfile.tsx';


// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//         <Header />
//         <Landing />
//         <Footer />
//     </>
//   )
// }

// export default App;

// hello 