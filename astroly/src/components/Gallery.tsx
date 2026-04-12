import React from "react";

const images = [
  {
    src: "/img/nebulosa.png",
    title: "Cosmic Nebula",
  },
  {
    src: "/img/buraco_negro.png",
    title: "Black Hole",
  },
  {
    src: "/img/supernova.png",
    title: "Supernova",
  },
  {
    src: "/img/campo_estelar.png",
    title: "Star Field",
  },
  {
    src: "/img/galaxia.png",
    title: "Spiral Galaxy",
  },
  {
    src: "/img/buraco_minhoca.png",
    title: "Wormhole",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="min-h-screen bg-gradient-to-b from-[#050014] via-[#0a0020] to-[#050014] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Cosmic Gallery
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A visual journey through the wonders of the universe.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-purple-500/20"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                <h3 className="text-white text-lg font-semibold">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}