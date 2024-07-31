// src/LandingPage.js

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesPage from './components/ServicesPage';
import Testimonials from './components/Testimonials';
import WhatAreWe from './components/WhatAreWe';
import Why from './components/Why';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* <Navbar /> */}
      <main className="container mx-auto">
        <Hero />
        <WhatAreWe />
        <ServicesPage />
        <Why/>
        {/* <Testimonials /> */}
       <ContactForm/>
      </main>
     <Footer/>
    </div>
  );
};

export default LandingPage;
