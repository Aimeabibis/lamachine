import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-8 relative z-20 pb-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-gray-400">
          <p>Localisation</p>
          {/* Social media */}
          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} LaMachine. Tous droits réservés.
          </p>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
