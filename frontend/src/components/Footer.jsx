import React from "react";
import {
  MessageSquare,
  Users,
  Target,
  Zap,
  Mail,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-500/30">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Logo et description */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="text-yellow-400" size={32} />
            <h2 className="text-2xl font-bold text-white">
              HUB <span className="text-yellow-400">STRATÉGIQUE</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une communauté d'apprentissage, de partage et de mise en action pour
            professionnels et entrepreneurs ambitieux.
          </p>
        </div>

        {/* Grille de contenu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Colonne 1 : Navigation */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap size={18} />
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#accueil"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#mission"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Notre mission
                </a>
              </li>
              <li>
                <a
                  href="#hub"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Le Hub en détail
                </a>
              </li>
              <li>
                <a
                  href="https://tally.so/r/gDGMRl"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  Rejoindre
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MessageSquare size={18} />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={16} />
                <span>co-nginya@outlook.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Globe size={16} />
                <span>https://hub-strategique.vercel.app</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={16} />
                <span> +225 0585486565</span>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Users size={18} />
              Nous suivre
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 transition"
              >
                <FaFacebook
                  className="text-gray-400 hover:text-yellow-400"
                  size={20}
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 transition"
              >
                <FaLinkedin
                  className="text-gray-400 hover:text-yellow-400"
                  size={20}
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 transition"
              >
                <FaWhatsappSquare
                  className="text-gray-400 hover:text-yellow-400"
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bas du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 HUB STRATÉGIQUE. Tous droits réservés.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-yellow-400 text-sm transition"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-yellow-400 text-sm transition"
            >
              Politique de confidentialité
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-yellow-400 text-sm transition"
            >
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
