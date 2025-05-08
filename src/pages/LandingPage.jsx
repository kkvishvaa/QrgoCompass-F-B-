// LandingPage.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css'; // Adjust path if needed

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import Timeline from '../components/Timeline';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureGrid />
      <Timeline />
      <Benefits />
      <Footer />
    </div>
  );
};

export default LandingPage;
