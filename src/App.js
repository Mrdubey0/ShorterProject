import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContents';
import ShortenerSection from './components/ShortenerSection';
import FeaturesSection from './components/FeaturesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <ShortenerSection />
      <FeaturesSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
