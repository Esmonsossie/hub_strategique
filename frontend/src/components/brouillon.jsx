import React from "react";

const brouillon = () => {
  return (
    <div>
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

          <div className="absolute z-50 top-40 -right-4 md:-right-55 bg-linear-to-r from-yellow-600 to-amber-700 px-4 py-2 rounded-xl shadow-lg border border-yellow-400/30 max-w-45 md:max-w-100 animate_animated animate__heartBeat transform hover:-translate-x-4 transition duration-600">
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
    </div>
  );
};

export default brouillon;
