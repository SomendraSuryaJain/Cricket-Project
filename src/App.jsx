import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/homepage/Home';
import About from './pages/aboutpage/About';
import OurAchievements from './pages/achievementpage/OurAchievements';
import NewRegistration from './pages/newregistration/NewRegistration';
import OurCoach from './pages/coachpage/OurCoach';
import FeesStructure from './pages/feesstructurepage/FeesStructure';
import Gallery from './pages/galllerypage/Gallery';
import ContactUs from './pages/contactuspage/ContactUs';
import Disclaimer from './pages/disclaimerpage/Disclaimer';
import Footer from './components/footer/Footer';
// import Login from './pages/loginpage/Login'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/achievements' element={<OurAchievements />} />
        <Route path='/registration' element={<NewRegistration />} />
        <Route path='/coach' element={<OurCoach />} />
        <Route path='/feesStructure' element={<FeesStructure />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        {/* <Route path='/login' element={<Login />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;