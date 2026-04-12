import React from 'react';
import Hero from './src/components/Hero';
import PlanetExplorer from './src/components/PlanetExplorer';
import Statistics from './src/components/Statistics';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <div className="w-full bg-[#050014]">
      {/* Hero Section */}
      <Hero />

      {/* Planet Explorer Section */}
      <section id="planets">
        <PlanetExplorer />
      </section>

      {/* Statistics Section */}
      <section id="stats">
        <Statistics />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
