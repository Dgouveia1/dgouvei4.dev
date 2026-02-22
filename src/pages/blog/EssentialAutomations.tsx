import React, { useEffect } from "react";
import { Layout } from "@/src/components/Layout";
import { TechBackground } from "@/src/components/TechBackground";
import { Calendar, ArrowLeft, Workflow, Zap, Database } from "lucide-react";
import { Link } from "react-router-dom";

const EssentialAutomationsPage: React.FC = () => {
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
                            <span className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                                Automação
                            </span>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Calendar className="w-4 h-4" />
                                <span>15 Fev, 2026</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Pare de perder tempo: 5 automações essenciais
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed">
                            Processos manuais estão drenando o lucro da sua empresa. Veja 5 fluxos que você deveria automatizar hoje mesmo para escalar sua operação.
                        </p>
                    </header>

                    <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 border border-white/10">
                        <img
                            src="/photos/automation.png"
                            alt="Automação Essencial"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    <div className="prose prose-invert prose-purple max-w-none">
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                            Se você executa a mesma tarefa repetitiva pelo menos 3 vezes na semana, ela deveria ser automatizada. O tempo que sua equipe gasta em "ctrl+c / ctrl+v" é dinheiro deixado na mesa.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                        1
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <Database className="w-5 h-5 text-purple-400" />
                                        Entrada de Leads no CRM
                                    </h3>
                                    <p className="text-gray-400">Não adicione leads manualmente na sua planilha ou CRM. Conecte os forms do seu site, Facebook Ads e Typeform diretamente ao Pipedrive, ActiveCampaign ou HubSpot usando Webhooks no n8n.</p>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                        2
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <Workflow className="w-5 h-5 text-purple-400" />
                                        Geração de Contratos Automáticos
                                    </h3>
                                    <p className="text-gray-400">Quando a venda for "Ganha", uma automação deve preencher os dados do cliente em um template (Google Docs) e enviar para assinatura digital via ClickSign ou DocuSign automaticamente.</p>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                        3
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-purple-400" />
                                        Mensagens de Boas-vindas (Onboarding)
                                    </h3>
                                    <p className="text-gray-400">O cliente pagou? O envio de nota fiscal, acessos de plataforma e mensagem amigável de boas-vindas no WhatsApp precisa acontecer em segundos, não horas.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-4">A Ferramenta Certa: n8n</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Para escalar automações sem custos astronômicos, utilizo o <strong>n8n</strong> (node-based automation). Diferente do Zapier, ele permite hospedar a ferramenta em infraestrutura própria, garantindo privacidade de dados e custo ZERO por execuções.
                        </p>
                    </div>
                </article>
            </Layout>
        </div>
    );
};

export default EssentialAutomationsPage;
