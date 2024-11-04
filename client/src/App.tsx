// import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Landing from './pages/Landing';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Favorites" element={<Favorites />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

{/* <>
  <Header />
  <Profile />
  <Favorites />
  <Footer />
</> */}