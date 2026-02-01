import React from "react";
import {
  Target,
  Briefcase,
  Users,
  Zap,
  TrendingUp,
  Lightbulb,
  MessageSquare,
  Brain,
  Award,
  Sparkles,
  Globe,
  Send,
  Navigation,
} from "lucide-react";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";

const Section3 = () => {
  return (
    <div className="min-h-screen bg-[#0c0c04] py-10 md:py-24" id="hub">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-400">Le HUB</span> en détail
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tout ce que tu trouveras dans notre communauté stratégique
          </p>
        </div>

        {/* Première ligne : 3 colonnes */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Colonne 1 : Ce que tu trouveras */}
          <div className="w-full lg:w-1/3 transform hover:translate-x-2 transition duration-500">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-300/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Navigation className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Ce que tu trouveras
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-yellow-400 text-sm">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">
                    Des conseils pratiques et concrets chaque semaine
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-yellow-400 text-sm">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">
                    Des frameworks, outils et templates
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-yellow-400 text-sm">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">
                    Des challenges pour passer à l'action
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-yellow-400 text-sm">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">Des retours d'expérience</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-yellow-400 text-sm">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">
                    Des opportunités (emplois, missions, partenariats, business)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-yellow-400 text-sm">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">
                    Des lives, masterclass et sessions d'échange
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 2 : L'esprit du Hub */}
          <div className="w-full lg:w-1/3 transform hover:translate-y-2 transition duration-500">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-300/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Users className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  L'esprit du HUB
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-400 text-xs">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium">Bienveillance</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-400 text-xs">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium">Respect</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-400 text-xs">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium">Entraide</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-400 text-xs">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium">
                    Responsabilité individuelle
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-400 text-xs">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium">
                    Culture du résultat
                  </p>
                </div>

                <div className="mt-6 p-4 bg-black/30 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-gray-300 italic text-sm">
                    Ici, chacun est à la fois apprenant et contributeur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 3 : Nos règles de base */}
          <div className="w-full lg:w-1/3 transform hover:translate-x-2 transition duration-500">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-300/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Target className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Nos règles de base
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-red-400 text-xs">
                      <RiCloseCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">Pas de spam</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-red-400 text-xs">
                      <RiCloseCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">Pas de vente agressive</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-red-400 text-xs">
                      <RiCloseCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">Pas de dénigrement</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-400 text-xs">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">
                    Les échanges doivent apporter de la valeur
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-400 text-xs">
                      <RiCheckboxCircleFill />
                    </span>
                  </div>
                  <p className="text-gray-300">
                    Tu peux promouvoir seulement si tu apportes déjà de la
                    valeur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième ligne : 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Colonne 1 : Notre philosophie */}
          <div className="w-full transform hover:translate-x-4 transition duration-500">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-300/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  🛠️ Notre philosophie
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-yellow-300 mb-1">
                      Action avant perfection
                    </h4>
                    <p className="text-gray-400">
                      Agir maintenant, améliorer ensuite. Le mouvement crée
                      l'opportunité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-yellow-300 mb-1">
                      Progrès avant comparaison
                    </h4>
                    <p className="text-gray-400">
                      Mesure-toi à toi-même d'hier, pas aux autres. Chaque pas
                      compte.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-yellow-300 mb-1">
                      Valeur avant visibilité
                    </h4>
                    <p className="text-gray-400">
                      Construis d'abord de la valeur réelle, la reconnaissance
                      suivra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Pour qui est ce Hub */}
          <div className="w-full transform hover:translate-x-4 transition duration-500">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-300/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Users className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Pour qui est ce Hub ?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="font-semibold text-yellow-200">
                    Salariés ambitieux
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="font-semibold text-yellow-200">
                    Entrepreneurs & freelances
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="font-semibold text-yellow-200">
                    Créateurs de contenu
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="font-semibold text-yellow-200">
                    Porteurs de projets
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg col-span-1 md:col-span-2">
                  <p className="font-semibold text-yellow-200">
                    Personnes en transition professionnelle
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-black/30 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-300 italic text-sm">
                  Si tu veux évoluer, apprendre et agir : tu es au bon endroit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne 3 : Ce que le Hub attend */}
        <div className=" mx-auto w-full md:w-1/2 transform hover:scale-110 transition duration-500">
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-yellow-300/30 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Zap className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">
                Ce que le Hub attend de toi
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-yellow-500/10 p-4 rounded-lg text-center">
                <p className="font-bold text-yellow-300 text-lg">Participer</p>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg text-center">
                <p className="font-bold text-yellow-300 text-lg">Tester</p>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg text-center">
                <p className="font-bold text-yellow-300 text-lg">Partager</p>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg text-center">
                <p className="font-bold text-yellow-300 text-lg">Appliquer</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-900/20 rounded-lg border-l-6 border-red-900">
              <p className="text-red-100 text-center italic">
                Ce Hub n'est pas un groupe d'observation.
              </p>
              <p className="text-yellow-100 text-center mt-2">
                C'est un terrain d'entraînement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
