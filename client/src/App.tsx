// import { useState } from 'react'

import Header from './components/Header';
import Profile from './components/Profile';
import Favorites from './components/Favorites';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Profile />
        <Favorites />
        <Footer />
    </>
  )
}

export default App;
