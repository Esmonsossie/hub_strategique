import React from "react";
import NavBar from "./NavBar";
import "animate.css";

const Section1 = () => {
  return (
    <div className="min-h-screen bg-[#0c0c04]" id="accueil">
      {/* NavBar qui ne cache pas le contenu */}
      <div className="relative z-50">
        <NavBar />
      </div>

      {/* Contenu qui commence juste après la NavBar */}
      <div className="relative z-10 pt-16">
        <div className="container mx-auto px-4 md:px-8 lg:px pt-14 md:pt-40">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Titre principal */}
            <div className="mb-10 animate__animated animate__fadeIn">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Bienvenue dans le{" "}
                <span className="text-yellow-400">HUB STRATÉGIQUE</span>
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            {/* Sous-titre accrocheur */}
            <div className="mb-16 animate__animated animate__fadeIn animate__delay-1s">
              <p className="text-xl md:text-2xl text-gray-400 italic mb-6">
                Ici, on ne vient pas chercher de la motivation passagère.
              </p>
              <p className="text-xl md:text-2xl text-gray-400 italic">
                On vient construire des trajectoires solides.
              </p>
            </div>

            {/* Contenu principal */}
            <div className="w-full">
              <div className="bg-black/60 p-8 md:p-10 rounded-2xl border-t border-white shadow-xl mb-6 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Qu'est-ce que le HUB STRATÉGIQUE ?
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-white mb-8 text-center">
                  Le HUB STRATÉGIQUE est une communauté d'apprentissage, de
                  partage et de mise en action destinée aux professionnels,
                  entrepreneurs et porteurs de projets qui veulent grandir
                  stratégiquement dans leur carrière et leurs activités.
                </p>

                <div className="mt-10 p-6 bg-gray-900/50 border-l-4 border-white rounded-lg">
                  <p className="text-lg md:text-xl italic text-white/60 font-medium text-center">
                    Plus qu'une communauté, un écosystème de progression
                    concrète.
                  </p>
                </div>
              </div>

              {/* Points clés */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-8 text-center">
                  Nos piliers fondamentaux
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="bg-black/60 p-6 rounded-xl border-b border-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-black font-bold text-xl">A</span>
                      </div>
                      <h4 className="font-bold text-white text-xl mb-2">
                        Apprentissage
                      </h4>
                      <p className="text-gray-700">
                        Contenu stratégique et actionable
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/60 p-6 rounded-xl border-b border-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-black font-bold text-xl">R</span>
                      </div>
                      <h4 className="font-bold text-white text-xl mb-2">
                        Réseau
                      </h4>
                      <p className="text-gray-500">professionnels ambitieux</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton CTA */}
              <div className="mt-8 md:mt-18 lg:mt-20 text-center">
                <button className="bg-white text-black font-bold px-10 py-5 rounded-xl hover:bg-yellow-400 transform hover:scale-105 transition-all duration-600 shadow-lg text-lg">
                  Rejoindre la communauté
                </button>
                <p className="text-gray-300 mt-4 md:mt-8">
                  Commencez votre parcours stratégique dès aujourd'hui
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
