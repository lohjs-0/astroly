// src/components/Rocket.tsx
import React from 'react';

const Rocket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 150"
    {...props}
  >
    <defs>
      <linearGradient id="grad-rocket" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#a0aec0" />
      </linearGradient>
    </defs>
    
    {/* Chama do foguete */}
    <g>
      <path d="M40 120 C 45 140, 55 140, 60 120 L 50 115 Z" fill="#f6ad55">
        {/* Animação da chama */}
        <animate 
          attributeName="d"
          dur="0.5s"
          repeatCount="indefinite"
          values="M40 120 C 45 140, 55 140, 60 120 L 50 115 Z; M40 120 C 48 150, 52 150, 60 120 L 50 115 Z; M40 120 C 45 140, 55 140, 60 120 L 50 115 Z"
        />
      </path>
      <path d="M45 120 C 48 135, 52 135, 55 120 L 50 118 Z" fill="#fbd38d" />
    </g>
    
    {/* Corpo do foguete */}
    <path d="M30,120 L30,50 Q50,10 70,50 L70,120 Z" fill="url(#grad-rocket )" />
    
    {/* Ponta do foguete */}
    <path d="M30,50 C40,20 60,20 70,50 Z" fill="#f56565" />
    
    {/* Janela */}
    <circle cx="50" cy="60" r="10" fill="#4299e1" stroke="#2d3748" strokeWidth="2" />
    
    {/* Asas */}
    <path d="M30,110 L10,125 L15,90 Z" fill="#a0aec0" />
    <path d="M70,110 L90,125 L85,90 Z" fill="#a0aec0" />
  </svg>
);

export default Rocket;
