import React, { useState } from 'react';

interface Planet {
  id: number;
  name: string;
  type: string;
  distance: string;
  diameter: string;
  temperature: string;
  description: string;
  color: string;
  icon: string;
}

const planets: Planet[] = [
  {
    id: 1,
    name: 'Mercury',
    type: 'Rocky Planet',
    distance: '58 Mi km',
    diameter: '4879',
    temperature: '430°C / -180°C',
    description:
      'The smallest planet and the closest to the Sun. It has no atmosphere to retain heat, which makes its nights freezing and its days extremely hot.',
    color: 'from-gray-400 to-gray-600',
    icon: '',
  },
  {
    id: 2,
    name: 'Venus',
    type: 'Rocky Planet',
    distance: '108.2 Mi km',
    diameter: '12104',
    temperature: '464°C',
    description:
      "Often called Earth's twin because of its size, but its dense atmosphere creates an extreme greenhouse effect, making it the hottest planet.",
    color: 'from-yellow-400 to-orange-500',
    icon: '',
  },
  {
    id: 3,
    name: 'Earth',
    type: 'Rocky Planet',
    distance: '150 Mi km',
    diameter: '12742',
    temperature: '15°C',
    description:
      'Our home planet and the only known world with life and liquid water. Its atmosphere is rich in nitrogen and oxygen.',
    color: 'from-blue-400 to-green-500',
    icon: '',
  },
  {
    id: 4,
    name: 'Mars',
    type: 'Rocky Planet',
    distance: '228 Mi km',
    diameter: '6779',
    temperature: '-65°C',
    description:
      'Known as the Red Planet. It hosts Olympus Mons, the largest volcano in the solar system, and evidence suggests water once flowed on its surface.',
    color: 'from-red-500 to-orange-600',
    icon: '',
  },
  {
    id: 5,
    name: 'Jupiter',
    type: 'Gas Giant',
    distance: '778.5 Mi km',
    diameter: '139820',
    temperature: '-110°C',
    description:
      'The largest planet in the solar system. It is famous for the Great Red Spot, a massive storm that has been raging for centuries.',
    color: 'from-orange-400 to-red-600',
    icon: '',
  },
  {
    id: 6,
    name: 'Saturn',
    type: 'Gas Giant',
    distance: '1.4 Bi km',
    diameter: '116460',
    temperature: '-140°C',
    description:
      'Famous for its stunning rings and beautiful moons. Saturn is the least dense planet in the solar system.',
    color: 'from-yellow-300 to-amber-500',
    icon: '',
  },
  {
    id: 7,
    name: 'Uranus',
    type: 'Ice Giant',
    distance: '2.9 Bi km',
    diameter: '51118',
    temperature: '-195°C',
    description:
      'An Ice Giant composed mostly of water, methane, and ammonia ices surrounding a small rocky core.',
    color: 'from-blue-400 to-blue-500',
    icon: '',
  },
  {
    id: 8,
    name: 'Neptune',
    type: 'Gas Giant',
    distance: '4.5 Bi km',
    diameter: '49244',
    temperature: '-195°C',
    description:
      'The most distant and one of the windiest planets. Winds here can exceed 2,000 km/h, and it has a deeper blue color than Uranus.',
    color: 'from-blue-400 to-yellow-500',
    icon: '',
  },
];

export default function PlanetExplorer() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(planets[0]);

  return (
    <section
      id="planets"
      className="min-h-screen bg-gradient-to-b from-[#050014] via-[#0a0020] to-[#050014] py-16 sm:py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-glow-pulse">
            Explore the Planets
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
            Discover the unique characteristics of each planet in our solar system.
          </p>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-5 sm:mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">

          {/* Planet Grid */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-4">
              {planets.map((planet) => (
                <button
                  key={planet.id}
                  onClick={() => setSelectedPlanet(planet)}
                  className={`p-2 sm:p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    selectedPlanet?.id === planet.id
                      ? 'border-purple-400 bg-purple-900/40 shadow-lg shadow-purple-500/50'
                      : 'border-purple-400/30 bg-purple-900/10 hover:border-purple-400/60'
                  }`}
                >
                  <div className="text-xl sm:text-3xl mb-1 sm:mb-2">{planet.icon}</div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm leading-tight">{planet.name}</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs hidden sm:block">{planet.type}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          {selectedPlanet && (
            <div className="lg:col-span-2">
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${selectedPlanet.color} rounded-2xl opacity-20 blur-3xl`}
                />
                <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-400/30 rounded-2xl p-5 sm:p-8 backdrop-blur-md">

                  <div className="text-6xl sm:text-8xl mb-4 sm:mb-6 text-center">{selectedPlanet.icon}</div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                    {selectedPlanet.name}
                  </h3>
                  <p className="text-purple-300 text-base sm:text-lg mb-4 sm:mb-6">
                    {selectedPlanet.type}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                    {selectedPlanet.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="bg-purple-900/40 rounded-lg p-3 sm:p-4 border border-purple-400/20">
                      <p className="text-gray-400 text-xs sm:text-sm">Distance from the Sun</p>
                      <p className="text-white font-bold text-base sm:text-lg mt-1">{selectedPlanet.distance}</p>
                    </div>
                    <div className="bg-purple-900/40 rounded-lg p-3 sm:p-4 border border-purple-400/20">
                      <p className="text-gray-400 text-xs sm:text-sm">Diameter</p>
                      <p className="text-white font-bold text-base sm:text-lg mt-1">{selectedPlanet.diameter} km</p>
                    </div>
                    <div className="bg-purple-900/40 rounded-lg p-3 sm:p-4 border border-purple-400/20">
                      <p className="text-gray-400 text-xs sm:text-sm">Temperature</p>
                      <p className="text-white font-bold text-base sm:text-lg mt-1">{selectedPlanet.temperature}</p>
                    </div>
                  </div>

                  {/* Size bar */}
                  <div className="mt-6 sm:mt-8">
                    <p className="text-gray-400 text-sm mb-3">Relative Size</p>
                    <div className="h-2 bg-purple-900/40 rounded-full overflow-hidden border border-purple-400/20">
                      <div
                        className={`h-full bg-gradient-to-r ${selectedPlanet.color} rounded-full transition-all duration-500`}
                        style={{
                          width: `${Math.min((Number(selectedPlanet.diameter) / 139820) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}