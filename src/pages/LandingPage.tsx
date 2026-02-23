import React, { useState } from "react";
import { Layout } from "@/src/components/Layout";
import { Button } from "@/src/components/ui/Button";
import { TechBadge } from "@/src/components/TechBadge";
import { TerminalIntro } from "@/src/components/TerminalIntro";
import { TechBackground } from "@/src/components/TechBackground";
import { BentoCard } from "@/src/components/BentoCard";
import { UseCaseCard } from "@/src/components/UseCaseCard";
import { BlogCard } from "@/src/components/BlogCard";
import {
  Cpu,
  BarChart3,
  Network,
  ArrowRight,
  Database,
  Cloud,
  MessageSquare,
  Workflow,
  Code2,
  Terminal,
  Zap,
  Instagram,
  Music2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <AnimatePresence>
        {showIntro && <TerminalIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="relative min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
          <TechBackground />

          <Layout>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 flex flex-col items-start justify-center min-h-[80vh]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-5xl w-full z-10"
              >
                <div className="font-mono text-cyan-500 mb-4 tracking-widest text-sm md:text-base">
                  &lt;HELLO_WORLD /&gt;
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
                  DAVI GOUVEIA
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
                    FULL STACK & BI
                  </span>
                </h1>

                <p className="text-lg md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10 border-l-2 border-cyan-500/50 pl-6">
                  Faço a sua empresa <span className="text-white font-medium">vender mais</span> e conecto suas ferramentas para <span className="text-white font-medium">trabalharem por você</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-cyan-600 hover:bg-cyan-500 text-white text-lg h-14 px-8 rounded-none border-l-4 border-white/20 hover:border-white transition-all"
                    onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explorar Soluções
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/10 hover:bg-white/5 text-white text-lg h-14 px-8 rounded-none font-mono"
                    onClick={() => window.open("https://wa.me/5517981112074", "_blank")}
                  >
                    Start_Project()
                  </Button>
                </div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
              </motion.div>
            </section>

            {/* Services Section (Bento Grid) */}
            <section id="solutions" className="py-24 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Arquitetura de <br />
                    <span className="text-cyan-500">Soluções</span>
                  </h2>
                </div>
                <p className="text-gray-400 max-w-md text-right md:text-left">
                  Desenvolvimento estratégico focado em performance, escalabilidade e resultados mensuráveis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BentoCard
                  title="Robôs Trabalhando por Você"
                  description="Sistemas automáticos que cuidam do trabalho chato para sua equipe focar em vender."
                  icon={<Workflow className="w-6 h-6" />}
                  className="md:col-span-2"
                  delay={0.1}
                />
                <BentoCard
                  title="Painéis Financeiros"
                  description="Acompanhe todo o seu lucro e vendas em tempo real de forma simples e visual."
                  icon={<BarChart3 className="w-6 h-6" />}
                  className="md:col-span-1 bg-gradient-to-br from-cyan-900/20 to-transparent"
                  delay={0.2}
                />
                <BentoCard
                  title="Sistemas e Plataformas"
                  description="Criamos sites e sistemas sob medida, focados na experiência do seu cliente."
                  icon={<Code2 className="w-6 h-6" />}
                  className="md:col-span-1"
                  delay={0.3}
                />
                <BentoCard
                  title="Conectamos suas Ferramentas"
                  description="Fazemos seu WhatsApp, planilhas e sistemas conversarem entre si."
                  icon={<Network className="w-6 h-6" />}
                  className="md:col-span-2"
                  delay={0.4}
                />
              </div>
            </section>

            {/* Use Cases Section */}
            <section id="cases" className="py-24 relative z-10 border-t border-white/5">
              <div className="mb-16">
                <h2 className="text-2xl font-mono text-cyan-500 mb-2">
                  &gt; CASE_STUDIES
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Soluções Reais, <span className="text-emerald-500">Resultados Reais</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <UseCaseCard
                  title="Imobiliária Digital"
                  category="Imobiliário"
                  problem="Perda de leads por demora no atendimento e geração manual de contratos."
                  solution="Bot de WhatsApp para qualificação imediata + n8n para gerar contratos automáticos via ClickSign."
                  results={["Atendimento em < 5s", "Contratos em 2 min", "+30% Conversão"]}
                  techStack={["WhatsApp API", "n8n", "PipeDrive", "ClickSign"]}
                  delay={0.1}
                />
                <UseCaseCard
                  title="Varejo Inteligente"
                  category="Comercial"
                  problem="Ruptura de estoque e dados de marketing desconectados das vendas reais."
                  solution="Dashboard Power BI integrando ERP + Meta Ads para alertas de reposição automática."
                  results={["-15% Ruptura", "ROI de Ads visível", "Compra preditiva"]}
                  techStack={["Power BI", "SQL", "ERP API", "Meta Ads"]}
                  delay={0.2}
                />
                <UseCaseCard
                  title="Clínica Conectada"
                  category="Saúde"
                  problem="Alto índice de no-show (faltas) e agendamento manual demorado."
                  solution="Confirmação automática via WhatsApp + Sync Google Calendar + Pesquisa NPS pós-consulta."
                  results={["-40% No-shows", "Agenda 100% Sync", "NPS Automatizado"]}
                  techStack={["WhatsApp API", "Google Calendar", "Typeform"]}
                  delay={0.3}
                />
              </div>
            </section>

            {/* Stack Section */}
            <section id="stack" className="py-24 relative z-10 border-t border-white/5">
              <div className="mb-12">
                <h2 className="text-2xl font-mono text-cyan-500 mb-8">
                  &gt; ECOSSISTEMA
                </h2>
                <div className="flex flex-wrap gap-3">
                  <TechBadge name="WhatsApp Biz" icon={<MessageSquare className="w-4 h-4" />} />
                  <TechBadge name="Google Drive" icon={<Cloud className="w-4 h-4" />} />
                  <TechBadge name="Planilhas" icon={<Database className="w-4 h-4" />} />
                  <TechBadge name="Power BI" icon={<BarChart3 className="w-4 h-4" />} />
                  <TechBadge name="Sistemas CRM" icon={<Workflow className="w-4 h-4" />} />
                  <TechBadge name="IA" icon={<Cpu className="w-4 h-4" />} />
                  <TechBadge name="Sites Seguros" icon={<Code2 className="w-4 h-4" />} />
                  <TechBadge name="Pagamentos" icon={<Zap className="w-4 h-4" />} />
                  <TechBadge name="Redes Sociais" icon={<Network className="w-4 h-4" />} />
                  <TechBadge name="Formulários" icon={<Terminal className="w-4 h-4" />} />
                </div>
              </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-24 relative z-10 border-t border-white/5">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Insights & <span className="text-cyan-500">Tecnologia</span>
                  </h2>
                  <p className="text-gray-400">Conteúdo estratégico para quem quer liderar o mercado.</p>
                </div>
                <Button
                  variant="outline"
                  className="border-white/10 hover:bg-white/5"
                  onClick={() => {
                    const blogSection = document.getElementById('blog');
                    if (blogSection) {
                      blogSection.scrollIntoView({ behavior: 'smooth' });
                      // Add a small pulse effect to highlight that we are already here
                      blogSection.classList.add('ring-2', 'ring-cyan-500/50', 'ring-offset-8', 'ring-offset-[#050505]');
                      setTimeout(() => {
                        blogSection.classList.remove('ring-2', 'ring-cyan-500/50', 'ring-offset-8', 'ring-offset-[#050505]');
                      }, 1000);
                    }
                  }}
                >
                  Ver todos os artigos
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/blog/whatsapp-ia" className="block h-full">
                  <BlogCard
                    title="Como a IA está revolucionando o atendimento via WhatsApp"
                    excerpt="Descubra como agentes de IA podem qualificar leads 24/7 sem parecer robôs, aumentando sua conversão drasticamente."
                    date="22 Fev, 2026"
                    category="Inteligência Artificial"
                    imageUrl="/photos/whatsapp.png"
                    delay={0.1}
                  />
                </Link>
                <Link to="/blog/automacoes-essenciais" className="block h-full">
                  <BlogCard
                    title="Pare de perder tempo: 5 automações essenciais"
                    excerpt="Processos manuais estão drenando o lucro da sua empresa. Veja 5 fluxos que você deveria automatizar hoje mesmo."
                    date="15 Fev, 2026"
                    category="Automação"
                    imageUrl="/photos/automation.png"
                    delay={0.2}
                  />
                </Link>
                <Link to="/blog/metricas-crm" className="block h-full">
                  <BlogCard
                    title="Dados não mentem: O que seu CRM diz sobre suas vendas"
                    excerpt="Aprenda a ler as métricas que realmente importam e pare de tomar decisões baseadas apenas em 'feeling'."
                    date="10 Fev, 2026"
                    category="Business Intelligence"
                    imageUrl="/photos/crm.png"
                    delay={0.3}
                  />
                </Link>
              </div>
            </section>

            {/* Social Connect Section */}
            <section className="py-12 relative z-10 border-t border-white/5 bg-white/5 rounded-3xl mb-24">
              <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Acompanhe meu trabalho</h3>
                  <p className="text-gray-400">Dicas diárias de automação e tecnologia nas redes.</p>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="gap-2 border-white/10 hover:border-pink-500/50 hover:text-pink-400 h-12 px-6"
                    onClick={() => window.open("https://instagram.com/dgouveia.dev", "_blank")}
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 h-12 px-6"
                    onClick={() => window.open("https://tiktok.com/@dgouvei4.dev", "_blank")}
                  >
                    <Music2 className="w-5 h-5" />
                    TikTok
                  </Button>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative z-10">
              <div className="relative overflow-hidden rounded-none border border-cyan-500/30 bg-[#0A0A0A] p-8 md:p-16 text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-cyan-500/20"></div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  PRONTO PARA <span className="text-cyan-500">CRESCER?</span>
                </h2>
                <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
                  Sua equipe merece parar de perder tempo. Vamos bater um papo rápido para entender como posso te ajudar.
                </p>

                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-lg h-16 px-12 rounded-none transition-all hover:tracking-wider"
                  onClick={() => window.open("https://wa.me/5517981112074", "_blank")}
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  INICIAR CONVERSA
                </Button>
              </div>
            </section>
          </Layout>
        </div>
      )}
    </>
  );
};

export default LandingPage;
