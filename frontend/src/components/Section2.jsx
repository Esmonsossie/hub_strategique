import React from "react";
import { TrendingUp, Globe, Smartphone, Briefcase, Brain } from "lucide-react";

const Section2 = () => {
  return (
    <div className="min-h-screen bg-[#0c0c04] py-16 md:py-24" id="mission">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
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
          <div className="w-full lg:w-1/2 transform hover:scale-90 transition duration-500">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-yellow-300/30">
              <h3 className="text-2xl font-bold text-yellow-300 mb-8 text-center">
                Ce que nous développons ensemble
              </h3>

              {/* Développement commercial */}
              <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg mb-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center p-4">
                  <span className="text-xl text-white">
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
              <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg mb-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center p-4">
                  <span className="text-xl text-white">
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
              <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg mb-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center p-4">
                  <span className="text-xl text-white">
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
              <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg mb-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center p-4">
                  <span className="text-xl text-white">
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
              <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg">
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center p-4">
                  <span className="text-xl text-white">
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
          <div className="w-full lg:w-1/2 transform hover:scale-90 transition duration-500">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-yellow-300/30">
              <h3 className="text-2xl font-bold text-yellow-300 mb-8 text-center">
                Notre approche en 3 étapes
              </h3>

              {/* Étape 1 - Comprendre */}
              <div className="relative mb-10 ">
                <div className="absolute -left-6 top-0 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="ml-10">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">
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
              <div className="relative mb-10">
                <div className="absolute -left-6 top-0 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="ml-10">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">
                    Appliquer
                  </h4>
                  <p className="text-gray-300">
                    Mettre en pratique immédiatement avec des actions concrètes.
                    Chaque concept se traduit par une étape exécutable.
                  </p>
                </div>
              </div>

              {/* Étape 3 - Progresser */}
              <div className="relative">
                <div className="absolute -left-6 top-0 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div className="ml-10">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">
                    Progresser
                  </h4>
                  <p className="text-gray-300">
                    Mesurer l'évolution, ajuster la stratégie, capitaliser sur
                    les succès. La progression est systématique et mesurable.
                  </p>
                </div>
              </div>

              {/* Phrase de conclusion */}
              <div className="mt-12 p-6 bg-yellow-900/20 border-l-4 border-yellow-300 rounded-r">
                <p className="text-lg italic text-yellow-100 text-center">
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
