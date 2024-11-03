// import { useState } from 'react'

/*Components*/
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Favorites from './components/Favorites';

/* Pages */
import Landing from './pages/Landing.tsx';
import UserProfile from './pages/UserProfile.tsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Landing />
        <Footer />
    </>
  )
}

export default App;
