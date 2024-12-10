import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ParticleBackground from './components/effects/ParticleBackground';
import { NavigationProvider } from './contexts/NavigationContext';

function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-black text-white relative">
        <ParticleBackground />
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </NavigationProvider>
  );
}

export default App;