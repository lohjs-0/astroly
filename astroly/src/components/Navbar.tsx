import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = [
    { label: "Home", id: "hero" },
    { label: "Explore", id: "planets" },
    { label: "Discover", id: "stats" },
    { label: "Gallery", id: "gallery" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-4 sm:px-6 py-3 shadow-[0_0_30px_rgba(0,0,0,0.4)]">

        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              🌍
            </div>
            <span className="text-white font-bold text-lg tracking-wide">
              Astroly
            </span>
          </div>

          {/* LINKS — desktop */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative text-gray-300 hover:text-amber-400 transition group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA — desktop */}
          <button
            onClick={() => scrollTo("planets")}
            className="hidden md:block px-5 py-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition transform hover:scale-105 cursor-pointer"
          >
            Start Mission
          </button>

          {/* HAMBURGUER — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-72 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-white/10 pt-4 pb-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-gray-300 hover:text-amber-400 active:text-amber-400 py-2.5 px-2 rounded-lg hover:bg-white/5 transition text-sm font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("planets")}
              className="mt-2 w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition active:scale-95 cursor-pointer"
            >
              Start Mission
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}