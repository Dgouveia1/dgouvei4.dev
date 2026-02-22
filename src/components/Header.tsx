import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090B]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight hover:text-cyan-400 transition-colors">
          dgouveia<span className="text-cyan-500">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Início
          </Link>
          <a href="#solutions" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Soluções
          </a>
          <a href="#stack" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Stack
          </a>
          <Button
            variant="default"
            size="sm"
            className="bg-cyan-600 hover:bg-cyan-700 text-white gap-2"
            onClick={() => window.open("https://wa.me/5517981112074", "_blank")}
          >
            <MessageCircle className="w-4 h-4" />
            Fale com um Especialista
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#09090B]"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                to="/"
                className="text-sm font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <a
                href="#solutions"
                className="text-sm font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Soluções
              </a>
              <a
                href="#stack"
                className="text-sm font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Stack
              </a>
              <Button
                variant="default"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white gap-2"
                onClick={() => {
                  window.open("https://wa.me/5517981112074", "_blank");
                  setIsMenuOpen(false);
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Fale com um Especialista
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
