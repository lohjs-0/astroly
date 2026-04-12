// src/components/SolarSystem.tsx
import React from 'react';

// Dados dos planetas: nome, cor, tamanho e velocidade da órbita (em segundos)
const planets = [
  { name: 'Mercury', color: '#a0aec0', size: '6px', speed: 21 }, // Mercúrio
  { name: 'Venus', color: '#f6e05e', size: '10px', speed: 35 },  // Vênus
  { name: 'Earth', color: '#4299e1', size: '11px', speed: 60 },   // Terra
  { name: 'Mars', color: '#f56565', size: '8px', speed: 112 },    // Marte
  { name: 'Jupiter', color: '#f6ad55', size: '22px', speed: 300 }, // Júpiter
  { name: 'Saturn', color: '#ecc94b', size: '18px', speed: 550 },  // Saturno
  { name: 'Uranus', color: '#63b3ed', size: '15px', speed: 800 },  // Urano
  { name: 'Neptune', color: '#4299e1', size: '14px', speed: 1100 }, // Netuno
];

const SolarSystem = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-full overflow-hidden">
      <style>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1); /* Borda sutil para a órbita */
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
        
        /* Efeito de brilho para Saturno */
        .saturn-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(75deg);
          border-radius: 50%;
          border: 1.5px solid #ecc94b;
          width: 150%;
          height: 150%;
        }
      `}</style>

      {/* O Sol */}
      <div className="relative w-16 h-16 bg-yellow-400 rounded-full shadow-[0_0_50px_#fbbF24,0_0_100px_#f59e0b]">
      </div>

      {/* Mapeia e renderiza cada planeta e sua órbita */}
      {planets.map((planet, index) => {
        const orbitSize = 80 + (index + 1) * 55; // Aumenta o tamanho da órbita para cada planeta

        return (
          <div
            key={planet.name}
            className="orbit"
            style={{
              width: `${orbitSize}px`,
              height: `${orbitSize}px`,
              animationDuration: `${planet.speed}s`,
              zIndex: 10 + index,
            }}
          >
            <div
              className="planet"
              style={{
                width: planet.size,
                height: planet.size,
                color: planet.color,
              }}
            >
              {/* Adiciona o anel para Saturno */}
              {planet.name === 'Saturn' && <div className="saturn-ring" />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SolarSystem;
