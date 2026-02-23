import React from "react";
import { Layout } from "@/src/components/Layout";
import { LinkButton } from "@/src/components/LinkButton";
import { MessageCircle, Globe, Instagram, Music2 } from "lucide-react";
import { motion } from "motion/react";

const LinksPage: React.FC = () => {
  return (
    <Layout hideHeader hideFooter>
      <div className="min-h-[80vh] flex flex-col items-center justify-center max-w-md mx-auto w-full py-12 px-4">

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="relative mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#09090B] bg-zinc-800">
              <img
                src="/photos/dgouvei4.png"
                alt="Davi Gouveia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mb-2">@dgouveia.dev</h1>
          <p className="text-gray-400 text-sm max-w-xs">
            Automação & BI. Faço a tecnologia trabalhar por você.
          </p>
        </motion.div>

        {/* Links Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full space-y-4 flex flex-col items-center"
        >
          <LinkButton
            href="https://wa.me/5517981112074?text=Ol%C3%A1%20Davi%2C%20gostaria%20de%20falar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20minha%20empresa!"
            label="Fale comigo no WhatsApp"
            icon={MessageCircle}
            variant="secondary"
            className="w-full bg-emerald-600 hover:bg-emerald-500 border-emerald-500/50"
          />

          <LinkButton
            href="/"
            label="Acesse meu Portfólio"
            icon={Globe}
            variant="outline"
            className="w-full"
          />

          <LinkButton
            href="https://instagram.com/dgouveia.dev"
            label="Instagram (@dgouveia.dev)"
            icon={Instagram}
            variant="outline"
            className="w-full hover:border-pink-500/50 hover:text-pink-400"
          />

          <LinkButton
            href="https://tiktok.com/@dgouvei4.dev"
            label="TikTok (@dgouvei4.dev)"
            icon={Music2}
            variant="outline"
            className="w-full hover:border-cyan-500/50 hover:text-cyan-400"
          />
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-zinc-600 uppercase tracking-widest">
            dgouveia.dev
          </p>
        </motion.div>

      </div>
    </Layout>
  );
};

export default LinksPage;
