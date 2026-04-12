import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo / descrição */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-semibold">Astroly</h3>
            <p className="text-gray-400 text-sm mt-2 max-w-sm">
              Exploring the mysteries of the universe and bringing astronomy closer to everyone.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#hero" className="text-gray-400 hover:text-white transition">
              Home
            </a>

            <a href="#planets" className="text-gray-400 hover:text-white transition">
              Explore
            </a>

            <a href="#gallery" className="text-gray-400 hover:text-white transition">
              Gallery
            </a>

          </div>

          {/* Social */}
          <div className="flex gap-4 text-gray-400">
            <a
              href="#"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition">
              <Twitter size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition">
              <Instagram size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition">
              <Linkedin size={18} />
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">

          <p>© 2026 Astroly. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-300 transition">
              Terms
            </a>

            <a href="#" className="hover:text-gray-300 transition">
              Cookies
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}