import React, { useMemo } from 'react';

interface StarStyle {
  top: number;
  left: number;
  size: number;
  animationDuration: number;
  animationType: 'twinkle' | 'float' | 'pulse';
  depth: number;
}

// Gera as estrelas com diferentes profundidades para efeito de paralaxe
const generateStars = (): StarStyle[] => {
  return Array.from({ length: 150 }).map(() => {
    const depth = Math.random();
    return {
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2.5 + (depth * 1.5), // Estrelas mais distantes são menores
      animationDuration: 2 + Math.random() * 4,
      animationType: ['twinkle', 'float', 'pulse'][Math.floor(Math.random() * 3)] as 'twinkle' | 'float' | 'pulse',
      depth,
    };
  });
};

export default function Stars() {
  const stars = useMemo(() => generateStars(), []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#050014] to-[#0a0020]"></div>

      {/* Camada de nebulosa */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-15"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      {/* Estrelas com animações variadas */}
      {stars.map((star, i) => (
        <span
          key={i}
          className={`absolute bg-white rounded-full`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.3 + star.depth * 0.7,
            animation: `${star.animationType} ${star.animationDuration}s ease-in-out infinite`,
            boxShadow: `0 0 ${star.size * 0.5}px rgba(255, 255, 255, ${0.5 + star.depth * 0.5})`,
          }}
        />
      ))}

      {/* Estilos de animação */}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            filter: brightness(1);
          }
          50% {
            opacity: 0.9;
            filter: brightness(1.5);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(0px) translateX(10px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(10px) translateX(5px);
            opacity: 0.6;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
