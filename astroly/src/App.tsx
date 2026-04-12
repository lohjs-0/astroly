import React from "react";

import Navbar from "./components/Navbar";
import HeroNew from "./components/HeroNew";
import PlanetExplorer from "./components/PlanetExplorer";
import Statistics from "./components/Statistics";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-[#050014]">

      <Navbar />

      <main>

        <section id="hero">
          <HeroNew />
        </section>

        <section id="planets">
          <PlanetExplorer />
        </section>

        <section id="stats">
          <Statistics />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="footer">
          <Footer />
        </section>

      </main>

    </div>
  );
}