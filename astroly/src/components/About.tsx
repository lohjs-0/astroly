import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-[#050014] via-[#0a0020] to-[#050014] py-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Sobre o Projeto
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
          Galactic é uma landing page inspirada na imensidão do universo. O
          objetivo é explorar curiosidades cósmicas, estatísticas fascinantes e
          imagens que representam a beleza infinita do espaço.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-400/30 rounded-xl p-6 sm:p-8 backdrop-blur-md active:scale-95 sm:hover:scale-105 transition">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🚀</div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Exploração
            </h3>
            <p className="text-gray-400 text-sm">
              Descubra informações incríveis sobre galáxias, estrelas e
              fenômenos astronômicos.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-400/30 rounded-xl p-6 sm:p-8 backdrop-blur-md active:scale-95 sm:hover:scale-105 transition">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🔭</div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Ciência
            </h3>
            <p className="text-gray-400 text-sm">
              Inspirado por descobertas científicas e missões espaciais
              modernas.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-400/30 rounded-xl p-6 sm:p-8 backdrop-blur-md active:scale-95 sm:hover:scale-105 transition sm:col-span-2 md:col-span-1 sm:max-w-sm sm:mx-auto md:max-w-none w-full">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🌌</div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Universo
            </h3>
            <p className="text-gray-400 text-sm">
              Uma experiência visual que representa a beleza infinita do cosmos.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 sm:mt-20 text-gray-500 text-sm">
          © 2026 Galactic — Explore o universo.
        </div>
      </div>
    </section>
  );
}