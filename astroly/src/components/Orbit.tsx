import React from 'react';

interface Planet {
  id: number;
  size: number;
  distance: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
  glowColor: string;
}

const planets: Planet[] = [
  {
    id: 1,
    size: 6,
    distance: 120,
    color: 'bg-purple-400',
    duration: 8,
    delay: 0,
    opacity: 0.9,
    glowColor: 'shadow-lg shadow-purple-400/50',
  },
  {
    id: 2,
    size: 4,
    distance: 200,
    color: 'bg-blue-300',
    duration: 15,
    delay: 2,
    opacity: 0.8,
    glowColor: 'shadow-lg shadow-blue-300/40',
  },
  {
    id: 3,
    size: 5,
    distance: 280,
    color: 'bg-pink-400',
    duration: 25,
    delay: 4,
    opacity: 0.85,
    glowColor: 'shadow-lg shadow-pink-400/50',
  },
  {
    id: 4,
    size: 3,
    distance: 350,
    color: 'bg-cyan-300',
    duration: 35,
    delay: 6,
    opacity: 0.75,
    glowColor: 'shadow-lg shadow-cyan-300/40',
  },
];

export default function Orbit() {
  return (
    <div className="relative w-[800px] h-[800px] flex items-center justify-center">
      {/* Sol central com glow */}
      <div className="absolute w-8 h-8 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full shadow-2xl shadow-yellow-400/80 z-20 animate-pulse" style={{ animationDuration: '3s' }}>
        <div className="absolute inset-0 rounded-full bg-yellow-200 opacity-30 animate-ping" style={{ animationDuration: '2s' }}></div>
      </div>

      {/* Órbitas visíveis */}
      {planets.map((planet) => (
        <div
          key={`orbit-${planet.id}`}
          className="absolute rounded-full border border-purple-400/20 transition-all duration-1000"
          style={{
            width: `${planet.distance * 2}px`,
            height: `${planet.distance * 2}px`,
          }}
        ></div>
      ))}

      {/* Planetas orbitando */}
      {planets.map((planet) => (
        <div
          key={`planet-${planet.id}`}
          className="absolute"
          style={{
            width: `${planet.distance * 2}px`,
            height: `${planet.distance * 2}px`,
            animation: `orbit ${planet.duration}s linear infinite`,
            animationDelay: `${planet.delay}s`,
          }}
        >
          {/* Planeta */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-full ${planet.color} ${planet.glowColor} transition-all duration-500 hover:scale-150`}
            style={{
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              opacity: planet.opacity,
              cursor: 'pointer',
            }}
          >
            {/* Brilho interno */}
            <div className="absolute inset-0 rounded-full bg-white opacity-40"></div>
          </div>
        </div>
      ))}

      {/* Efeito de luz radial no fundo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>

      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
