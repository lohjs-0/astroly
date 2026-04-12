import React from 'react';
import Astronaut from './Astronaut';
import Rocket from './Rocket';

const planets = [
  { name: 'Mercury', color: '#a0aec0', size: '6px', speed: 21 },
  { name: 'Venus', color: '#f6e05e', size: '10px', speed: 35 },
  { name: 'Earth', color: '#4299e1', size: '11px', speed: 60 },
  { name: 'Mars', color: '#f56565', size: '8px', speed: 112 },
  { name: 'Jupiter', color: '#f6ad55', size: '22px', speed: 300 },
  { name: 'Saturn', color: '#ecc94b', size: '18px', speed: 550 },
  { name: 'Uranus', color: '#63b3ed', size: '15px', speed: 800 },
  { name: 'Neptune', color: '#4299e1', size: '14px', speed: 1100 },
];

const SolarSystem = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-full overflow-hidden">
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          animation: rotate linear infinite;
        }
        .planet {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          border-radius: 50%;
          background-color: currentColor;
        }
        .saturn-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%) rotateX(75deg);
          border-radius: 50%;
          border: 1.5px solid #e9e511;
          width: 150%;
          height: 150%;
        }
      `}</style>

      <div className="relative w-10 h-10 sm:w-16 sm:h-16 bg-yellow-400 rounded-full shadow-[0_0_50px_#fbbF24,0_0_100px_#f59e0b]" />

      {planets.map((planet, index) => {
        const orbitSize = 50 + (index + 1) * 35;
        const desktopOrbitSize = 80 + (index + 1) * 55;

        return (
          <div
            key={planet.name}
            className="orbit"
            style={{
              width: `min(${orbitSize}px, ${desktopOrbitSize}px)`,
              height: `min(${orbitSize}px, ${desktopOrbitSize}px)`,
              animationDuration: `${planet.speed}s`,
            }}
          >
            <div
              className="planet"
              style={{ width: planet.size, height: planet.size, color: planet.color }}
            >
              {planet.name === 'Saturn' && <div className="saturn-ring" />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function HeroNew() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#020b1a] to-[#0a1a3a] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <SolarSystem />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Texto */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 sm:mb-6">
              Discover the
              <span className="text-gray-400"> Infinite Universe </span>
              Above Us
            </h1>

            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg">
              Travel through planets, stars and distant galaxies in an immersive cosmic experience.
            </p>

            <button
              onClick={() => scrollTo('planets')}
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              Enter the Cosmos
            </button>

            <div className="mt-10 sm:mt-16">
              <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">
                Popular Explore:
              </h3>

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {['Jupiter', 'Mercury', 'Venus'].map((planet) => (
                  <div
                    key={planet}
                    onClick={() => scrollTo('planets')}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:border-amber-500/50 active:border-amber-500/50 transition cursor-pointer group"
                  >
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      {planet}
                    </h4>
                    <span className="text-gray-400 text-xs sm:text-sm group-hover:text-amber-500 transition">
                      Learn more →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Astronauta + Foguete */}
          <div className="relative h-64 sm:h-80 lg:h-[500px] flex items-center justify-center mt-4 lg:mt-0">
            <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-amber-600/30 to-orange-800/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Astronaut className="w-48 sm:w-64 lg:w-80 h-auto" />
            </div>

            <div
              className="absolute top-4 right-4 sm:top-10 sm:right-10 animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <Rocket className="w-14 sm:w-20 lg:w-24 h-auto" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}