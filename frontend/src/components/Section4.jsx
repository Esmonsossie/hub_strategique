import React from "react";
import { Sparkles } from "lucide-react";

const Section4 = () => {
  return (
    <div className="min-h-[70vh] bg-[#0c0c04] flex items-center justify-center py-16 md:py-16">
      <div className=" mx-auto px-4 md:px-8 lg:px-16">
        <div className=" mx-auto space-y-8 w-full">
          {/* Séparateur */}
          <div className="border-t border-yellow-300/20 my-10"></div>

          {/* Message final */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
              Bienvenue dans le HUB STRATÉGIQUE.
            </p>
          </div>

          {/* Carte principale */}
          <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12  w-full">
            <div className="flex flex-col lg:flex-row md:flex-col gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img src="welcome.jpg" alt="image welcome" className="" />
              </div>

              <div>
                {/* Phrase principale */}
                <div className="mb-12 text-center">
                  <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed">
                    "Ici, on ne consomme pas seulement du contenu."
                  </p>
                </div>

                {/* Points clés */}
                <div className="space-y-6 ">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-300">
                      On construit des compétences.
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-300">
                      On bâtit des opportunités.
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-300">
                      On crée des trajectoires.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action finale */}
            <div className="mt-12 pt-6  text-center transform hover:scale-125 transition duration-500">
              <a href="">
                <p className="text-yellow-400 text-sm">
                  Prêt à commencer ? Rejoins-nous maintenant.
                </p>
              </a>
            </div>
            {/* Séparateur
            <div className="border-t border-yellow-300/20 my-10"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
