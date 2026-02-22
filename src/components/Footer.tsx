import React from "react";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#09090B] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white">
              dgouveia<span className="text-cyan-500">.dev</span>
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Transformando dados em resultados reais.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/dgouveia.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xl font-semibold text-white mb-4">Pronto para escalar sua operação?</p>
            <button 
                onClick={() => window.open("https://wa.me/5517981112074", "_blank")}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
                <MessageCircle className="w-5 h-5" />
                Vamos conversar no WhatsApp
            </button>
            <p className="text-xs text-gray-600 mt-8">
              &copy; {new Date().getFullYear()} Davi Gouveia. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
};
