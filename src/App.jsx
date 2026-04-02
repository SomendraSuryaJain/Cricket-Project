import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/homepage/Home';
import About from './pages/aboutpage/About';
import OurAchievements from './pages/achievementpage/OurAchievements';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/achievements' element={<OurAchievements />} />

      </Routes>
    </Router>
  );
};

export default App;