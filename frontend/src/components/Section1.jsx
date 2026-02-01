import React from "react";
import NavBar from "./NavBar";
import "animate.css";
const Section1 = () => {
  return (
    <div
      className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900  "
      id="accueil"
    >
      {/* NavBar qui ne cache pas le contenu */}
      <div className="relative z-50">
        <NavBar />
      </div>

      {/* Contenu qui commence juste après la NavBar */}
      <div className="relative z-10 pt-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-14 md:pt-40">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 text-white">
            {/* Colonne gauche - Image avec texte positionné */}
            <div className="w-full lg:w-1/2 relative ">
              {/* Conteneur image */}
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Cadre image avec ombre dorée */}
                <div className="bg-linear-to-br from-yellow-400 via-yellow-500 to-yellow-600 border-4 border-yellow-300 rounded-tr-[40px] rounded-bl-[40px] p-3 md:p-4 shadow-2xl shadow-yellow-500/30">
                  <div className="relative overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                    <img
                      src="image.png"
                      alt="HUB STRATÉGIQUE"
                      className="w-full h-auto transform hover:scale-105 transition duration-700"
                    />
                    {/* Overlay doré subtil */}
                    <div className="absolute inset-0 bg-linear-to-tr from-yellow-500/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Textes positionnés sur image */}
                <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-blue-800 to-blue-900 px-5 py-3 rounded-xl shadow-lg border border-blue-400/30 animate_animated animate__heartBeat  hover:-translate-y-4 transition duration-700">
                  <p className="text-sm md:text-lg font-bold text-center whitespace-nowrap text-white">
                    Bienvenue dans le HUB STRATÉGIQUE
                  </p>

                  {/* Coin décoratif */}
                  <div className="absolute -bottom-1.5 -left-2 w-4 h-4 bg-blue-500 rotate-45"></div>
                </div>

                <div className="absolute top-40 -right-4 md:-right-55 bg-linear-to-r from-yellow-600 to-amber-700 px-4 py-2 rounded-xl shadow-lg border border-yellow-400/30 max-w-45 md:max-w-100 animate_animated animate__heartBeat transform hover:-translate-x-4 transition duration-600">
                  <p className="text-xs md:text-lg text-white font-medium">
                    Ici, on ne vient pas chercher de la motivation passagère.
                  </p>
                  {/* Coin décoratif */}
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-500 rotate-45"></div>
                </div>

                <div className="absolute bottom-1/4 -left-4 md:-left-30 bg-linear-to-r from-red-900 to-rose-900 px-4 py-3 rounded-xl shadow-lg border border-rose-400/30 max-w-45 md:max-w-100 animate_animated animate__heartBeat transform hover:-translate-x-4 transition duration-600">
                  <p className="text-xs md:text-lg text-white font-medium">
                    On vient construire des trajectoires solides.
                  </p>
                  {/* Coin décoratif */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-rose-500 rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Colonne droite - Texte descriptif */}
            <div className="w-full lg:w-1/2">
              <div className="bg-linear-to-br from-gray-900/80 to-black/80 backdrop-blur-lg p-7 md:p-9 rounded-2xl border-2 border-yellow-500/30 shadow-2xl animate_animated animate__heartBeat transform hover:-translate-y-4 transition duration-700">
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6 text-shadow-lg">
                  Qu'est-ce que le HUB STRATÉGIQUE ?
                </h2>

                <p className="text-base md:text-lg leading-relaxed text-gray-200">
                  Le HUB STRATÉGIQUE est une communauté d'apprentissage, de
                  partage et de mise en action destinée aux professionnels,
                  entrepreneurs et porteurs de projets qui veulent grandir
                  stratégiquement dans leur carrière et leurs activités.
                </p>

                <div className="mt-8 p-5 bg-linear-to-r from-yellow-900/40 to-amber-900/30 border-l-4 border-yellow-400 rounded-r-lg backdrop-blur-sm">
                  <p className="text-sm md:text-base italic text-yellow-100 font-medium">
                    Plus qu'une communauté, un écosystème de progression
                    concrète.
                  </p>
                </div>
              </div>

              {/* Points clés - Optionnel */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-linear-to-br from-gray-800/70 to-gray-900/70 p-5 rounded-xl border border-yellow-500/20 shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold">A</span>
                    </div>
                    <p className="font-bold text-yellow-300 text-lg">
                      Apprentissage
                    </p>
                  </div>
                  <p className="text-sm text-gray-300">
                    Contenu stratégique et actionable
                  </p>
                </div>

                <div className="bg-linear-to-br from-gray-800/70 to-gray-900/70 p-5 rounded-xl border border-yellow-500/20 shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold">R</span>
                    </div>
                    <p className="font-bold text-yellow-300 text-lg">Réseau</p>
                  </div>
                  <p className="text-sm text-gray-300">
                    Professionnels ambitieux
                  </p>
                </div>
              </div>

              {/* Bouton CTA ajouté */}
              <div className="mt-10 text-center md:text-left">
                <button className="bg-linear-to-r from-yellow-500 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/30">
                  Rejoindre la communauté
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
