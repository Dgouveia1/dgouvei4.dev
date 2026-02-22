import React, { useEffect } from "react";
import { Layout } from "@/src/components/Layout";
import { TechBackground } from "@/src/components/TechBackground";
import { motion } from "motion/react";
import { Calendar, ArrowLeft, MessageSquare, Bot, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const WhatsAppAIPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      <TechBackground />
      <Layout>
        <article className="relative pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6 z-10">

          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-cyan-400 mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para o Início
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
                Inteligência Artificial
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>22 Fev, 2026</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Como a IA está revolucionando o atendimento via WhatsApp
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Descubra como agentes de IA podem qualificar leads 24/7 sem parecer robôs, aumentando sua conversão drasticamente.
            </p>
          </header>

          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 border border-white/10">
            <img
              src="/photos/whatsapp.png"
              alt="IA e WhatsApp"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-cyan max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">O Fim do Atendimento Engessado</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Por muito tempo, a automação no WhatsApp significava menus irritantes de opções numéricas: "Digite 1 para vendas, 2 para suporte". Isso não é mais automação, é frustração.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Com o avanço dos LLMs (Large Language Models) integrados a fluxos como n8n ou Typebot, a dinâmica mudou completamente. Agora, os agentes de IA conseguem interpretar intenções complexas, extrair dados em linguagem natural e responder de forma conversacional e humanizada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              <div className="bg-[#0A0A0A] p-6 rounded-xl border border-white/5">
                <Clock className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Disponibilidade 24/7</h3>
                <p className="text-sm text-gray-400">Seu negócio nunca fecha. Respostas imediatas domingos e feriados.</p>
              </div>
              <div className="bg-[#0A0A0A] p-6 rounded-xl border border-white/5">
                <Bot className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Qualificação Inteligente</h3>
                <p className="text-sm text-gray-400">Extrai nome, necessidade e orçamento de forma fluida na conversa.</p>
              </div>
              <div className="bg-[#0A0A0A] p-6 rounded-xl border border-white/5">
                <MessageSquare className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Transbordo Humanizado</h3>
                <p className="text-sm text-gray-400">Sabe a hora exata de chamar um humano quando o caso exige.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Como Implementar na Prática?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              O segredo de uma boa implementação não é apenas plugar o ChatGPT ao provedor da API do WhatsApp. É construir a <strong>Arquitetura da Informação</strong>.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li><strong>RAG (Retrieval-Augmented Generation):</strong> Conectar a IA à base de conhecimento da sua empresa.</li>
              <li><strong>Fine-tuning de Prompts:</strong> Definir o tom de voz e as restrições (o que a IA NÃO deve falar).</li>
              <li><strong>Integração com CRM:</strong> Gravar os dados do lead automaticamente sem intervenção humana.</li>
            </ul>

            <div className="bg-gradient-to-r from-cyan-900/30 to-emerald-900/30 p-8 rounded-2xl border border-cyan-500/20 mt-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Quer aplicar isso no seu negócio?</h3>
              <p className="text-gray-300 mb-6">Agende uma consultoria técnica e descubra o impacto da IA nas suas vendas.</p>
              <a
                href="https://wa.me/5517981112074"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
};

export default WhatsAppAIPage;
