// src/components/Astronaut.tsx
import React from 'react';

// O tipo 'React.SVGProps<SVGSVGElement>' permite que você passe qualquer propriedade de SVG, como 'className'.
const Astronaut = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    {...props} // Permite passar props como className, width, height, etc.
  >
    {/* Sombra suave */}
    <defs>
      <radialGradient id="grad-helmet" cx="0.4" cy="0.4" r="0.6">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#a0aec0" />
      </radialGradient>
    </defs>
    
    {/* Corpo do astronauta */}
    <g transform="rotate(-15 100 100 )">
      {/* Mochila */}
      <rect x="65" y="80" width="70" height="55" rx="10" fill="#4a5568" />
      
      {/* Corpo */}
      <rect x="75" y="60" width="50" height="80" rx="25" fill="#e2e8f0" />
      
      {/* Capacete */}
      <circle cx="100" cy="50" r="35" fill="#2d3748" />
      <circle cx="100" cy="50" r="32" fill="url(#grad-helmet)" />
      
      {/* Faixa no peito */}
      <rect x="85" y="85" width="30" height="15" rx="5" fill="#f56565" />
      
      {/* Braços */}
      <rect x="50" y="75" width="30" height="15" rx="7.5" fill="#e2e8f0" />
      <rect x="120" y="75" width="30" height="15" rx="7.5" fill="#e2e8f0" />
      
      {/* Pernas */}
      <rect x="80" y="130" width="18" height="30" rx="9" fill="#e2e8f0" />
      <rect x="102" y="130" width="18" height="30" rx="9" fill="#e2e8f0" />
    </g>
  </svg>
);

export default Astronaut;
