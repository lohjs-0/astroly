import React from 'react';
import Orbit from './Orbit';
import Stars from './Stars';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-[#050014] flex items-center justify-center overflow-hidden">
      {/* Fundo com estrelas */}
      <Stars />

      {/* Container do sistema solar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Orbit />
      </div>

      {/* Conteúdo principal */}
      <div className="text-center z-10 relative pointer-events-auto w-full max-w-2xl px-5 py-20">
        {/* Título */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-glow-pulse"
          style={{
            textShadow: '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
            letterSpacing: '0.05em',
          }}
        >
          Astroly
        </h1>

        {/* Linha decorativa */}
        <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-5 sm:mb-6 rounded-full" />

        {/* Descrição */}
        <p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-7 sm:mb-8 animate-float px-2"
          style={{ animationDelay: '0.2s' }}
        >
          Explore the mysteries of the universe.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 px-4 sm:px-0">
          <button
            onClick={() => scrollToSection('planets')}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Explorar Planetas
          </button>
          <button
            onClick={() => scrollToSection('stats')}
            className="w-full sm:w-auto px-8 py-3 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Curiosidades
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mt-8 sm:mt-12">
          {[
            { label: 'Planets', value: '4' },
            { label: 'Orbits', value: 'Active' },
            { label: 'Status', value: 'Spinning' },
          ].map((item, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 rounded-lg bg-purple-900/20 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
              style={{ animation: `float ${3 + index * 0.5}s ease-in-out infinite` }}
            >
              <p className="text-purple-300 text-xs sm:text-sm font-semibold">{item.label}</p>
              <p className="text-white text-base sm:text-lg font-bold mt-1 sm:mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorações de fundo */}
      <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />
    </section>
  );
}