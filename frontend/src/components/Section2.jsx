import React from "react";
import { TrendingUp, Globe, Smartphone, Briefcase, Brain } from "lucide-react";

const Section2 = () => {
  return (
    <div className="min-h-screen bg-[#0c0c04] py-16 md:py-24" id="mission">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-4 md:mt-8">
        {/* Titre principal */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-400">Notre</span> mission
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Créer un espace où chacun peut développer son potentiel stratégique
          </p>
        </div>

        {/* Contenu */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          {/* Colonne gauche - Développements */}
          <div className="w-full lg:w-1/2 transform hover:scale-98 transition duration-700">
            <div className="bg-white text-black backdrop-blur-sm p-8 rounded-xl border border-gray-900">
              <h3 className="text-2xl font-bold  mb-8 text-center">
                Ce que nous développons ensemble
              </h3>
              <div className="w-18 h-1 bg-black mx-auto mb-6 -mt-4"></div>

              {/* Développement commercial */}
              <div className="flex items-start gap-4 p-4 bg-black rounded-lg mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-4">
                  <span className="text-xl text-black">
                    <TrendingUp size={24} />
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Son développement commercial
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Stratégies de vente et croissance business
                  </p>
                </div>
              </div>

              {/* Personal branding */}
              <div className="flex items-start gap-4 p-4 bg-black rounded-lg mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-4">
                  <span className="text-xl text-black">
                    <Globe size={24} />
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Son personal branding & social selling
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Construire une marque personnelle impactante
                  </p>
                </div>
              </div>

              {/* Communication digitale */}
              <div className="flex items-start gap-4 p-4 bg-black rounded-lg mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-4">
                  <span className="text-xl text-black">
                    <Smartphone size={24} />
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Ses compétences en communication digitale
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Maîtriser les outils et canaux modernes
                  </p>
                </div>
              </div>

              {/* Carrière */}
              <div className="flex items-start gap-4 p-4 bg-black rounded-lg mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-4">
                  <span className="text-xl text-black">
                    <Briefcase size={24} />
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Sa carrière
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Évoluer professionnellement avec stratégie
                  </p>
                </div>
              </div>

              {/* Mindset entrepreneurial */}
              <div className="flex items-start gap-4 p-4 bg-black rounded-lg">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-4">
                  <span className="text-xl text-black">
                    <Brain size={24} />
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Son mindset entrepreneurial
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Adopter la mentalité des entrepreneurs qui réussissent
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Approche */}
          <div className="w-full lg:w-1/2 transform hover:scale-98 transition duration-700">
            <div className="bg-white backdrop-blur-sm p-8 md:px-16 rounded-xl border border-gray-900">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                Notre approche en 3 étapes
              </h3>
              <div className="w-18 h-1 bg-black mx-auto mb-6 -mt-4"></div>

              {/* Étape 1 - Comprendre */}
              <div className="relative bg-black mb-10 rounded-3xl p-2">
                <div className="absolute -left-5 -top-2 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="ml-10">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Comprendre
                  </h4>
                  <p className="text-gray-300">
                    Analyser les fondamentaux et saisir les mécanismes clés de
                    chaque domaine. Pas de théorie sans pratique, mais d'abord
                    une compréhension solide.
                  </p>
                </div>
              </div>
              {/* Étape 2 - Appliquer */}
              <div className="relative bg-black mb-10 rounded-3xl p-2">
                <div className="absolute -left-5 -top-2 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="ml-10">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Appliquer
                  </h4>
                  <p className="text-gray-300">
                    Mettre en pratique immédiatement avec des actions concrètes.
                    Chaque concept se traduit par une étape exécutable.
                  </p>
                </div>
              </div>

              {/* Étape 3 - Progresser */}
              <div className="relative bg-black mb-10 rounded-3xl p-2">
                <div className="absolute -left-5 -top-2 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div className="ml-10">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Progresser
                  </h4>
                  <p className="text-gray-300">
                    Mesurer l'évolution, ajuster la stratégie, capitaliser sur
                    les succès. La progression est systématique et mesurable.
                  </p>
                </div>
              </div>

              {/* Phrase de conclusion */}
              <div className="mt-12 p-6 md:p-4 bg-gray-200/50 border-l-4 border-black rounded-2xl">
                <p className="text-lg md:text-xl italic text-black/80 font-medium text-center">
                  "Pas de magie, que de la méthode. Pas de hasard, que du
                  travail stratégique."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
