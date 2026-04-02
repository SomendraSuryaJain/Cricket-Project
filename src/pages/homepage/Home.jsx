import React from 'react'
import HeroSection from '../../components/homesection/HeroSection.jsx'
import AboutUs from '../../components/homesection/AboutUs.jsx';
import NewsLayout from '../../components/homesection/NewsLayout.jsx';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <NewsLayout />
    </div>
  );
};

export default Home;