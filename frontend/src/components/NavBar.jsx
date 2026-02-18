import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar principale */}
      <div className="fixed top-0 left-0 right-0 bg-black/90 z-50 shadow-2xl animate-fadeInDown">
        <nav className="flex justify-between items-center text-white py-4 px-6 md:py-14 md:px-16">
          {/* Logo avec animation */}
          <div className="text-xl font-semibold">
            <a href="#accueil">
              <img
                src="logo.jpeg"
                alt="Logo"
                className="w-8 md:w-15 h-8 md:h-15 transition-all duration-300 hover:scale-110 hover:rotate-3"
              />
            </a>
          </div>

          {/* Menu Desktop avec animations */}
          <ul className="hidden md:flex justify-between text-xl font-semibold space-x-14">
            <li>
              <a
                href="#accueil"
                className="hover:text-yellow-400 transition-all duration-300 relative group"
              >
                Accueil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#mission"
                className="hover:text-yellow-400 transition-all duration-300 relative group"
              >
                Mission
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#hub"
                className="hover:text-yellow-400 transition-all duration-300 relative group"
              >
                Le Hub
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="https://tally.so/r/gDGMRl"
                className="hover:text-yellow-400 transition-all duration-300 relative group"
              >
                Nous rejoindre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* Logos Desktop avec animations */}
          <div className="hidden md:flex text-xl font-semibold space-x-6">
            <button className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <FaFacebook size={32} />
            </button>
            <button className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <FaLinkedin size={32} />
            </button>
            <button className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <FaWhatsappSquare size={32} />
            </button>
          </div>

          {/* Bouton Menu Mobile avec animation */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={28} className="animate-spinIn" />
            ) : (
              <Menu size={28} className="animate-pulse" />
            )}
          </button>
        </nav>

        {/* Menu Mobile - STRUCTURE EXACTEMENT IDENTIQUE */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 z-50 animate-slideInRight">
            <div className="flex flex-col h-full">
              {/* En-tête du menu mobile - IDENTIQUE */}
              <div className="flex justify-between items-center bg-yellow-400/80 px-8 py-4 border-b border-white/20">
                <a href="#accueil">
                  <img
                    src="logo.jpeg"
                    alt="Logo"
                    className="w-8 md:w-15 h-8 md:h-15 transition-all duration-300 hover:scale-110 hover:rotate-3"
                  />
                </a>
                <button
                  className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={28} className="text-white" />
                </button>
              </div>

              {/* Liens de navigation mobile - IDENTIQUE */}
              <div className="flex-1 flex flex-col text-white px-6 py-6">
                <ul className="space-y-6">
                  <li>
                    <a
                      href="#accueil"
                      className="text-xl font-semibold block py-1 hover:text-gray-300 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mission"
                      className="text-xl font-semibold block py-1 hover:text-gray-300 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="#hub"
                      className="text-xl font-semibold block py-1 hover:text-gray-300 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Le Hub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tally.so/r/gDGMRl"
                      className="text-xl font-semibold block py-1 hover:text-gray-300 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Nous rejoindre
                    </a>
                  </li>
                </ul>
              </div>

              {/* Logos mobile en bas - IDENTIQUE */}
              <div className="flex justify-center space-x-10 bg-yellow-400/80 px-8 py-4 border-t border-white/20">
                <button
                  className="text-2xl hover:text-gray-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaFacebook size={32} className="text-white" />
                </button>
                <button
                  className="text-2xl hover:text-gray-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaLinkedin size={32} className="text-white" />
                </button>
                <button
                  className="text-2xl hover:text-gray-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaWhatsappSquare size={32} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
