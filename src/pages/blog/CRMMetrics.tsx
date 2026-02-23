import React, { useEffect } from "react";
import { Layout } from "@/src/components/Layout";
import { TechBackground } from "@/src/components/TechBackground";
import { Calendar, ArrowLeft, BarChart3, TrendingUp, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const CRMMetricsPage: React.FC = () => {
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
                            <span className="px-3 py-1 bg-emerald-900/30 border border-emerald-500/30 rounded-full text-xs font-medium text-emerald-400">
                                Business Intelligence
                            </span>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Calendar className="w-4 h-4" />
                                <span>10 Fev, 2026</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Dados não mentem: O que seu CRM diz sobre suas vendas
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed">
                            Aprenda a ler as métricas que realmente importam e pare de tomar decisões baseadas apenas em "feeling" ou intuição.
                        </p>
                    </header>

                    <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 border border-white/10">
                        <img
                            src="/photos/crm.png"
                            alt="Análise de Dados CRM"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="prose prose-invert prose-emerald max-w-none">
                        <h2 className="text-2xl font-bold text-white mb-4">Você está cego no seu próprio negócio?</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Ter um sistema cheio de cadastro de clientes não significa ter controle das vendas. Se no final do mês você precisa caçar papéis, olhar cadernos ou perder 3 dias montando planilhas para descobrir "quem vendeu mais e quanto gastamos", você está perdendo tempo e dinheiro.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                            <div className="bg-gradient-to-br from-emerald-900/10 to-transparent p-6 rounded-xl border border-emerald-500/20">
                                <TrendingUp className="w-8 h-8 text-emerald-500 mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Onde os Clientes Desistem?</h3>
                                <p className="text-sm text-gray-400">
                                    Acompanhar quantos contatos viram "Reunião Agendada", e quantos da reunião viraram "Venda Fechada" mostra exatamente onde sua equipe está perdendo o negócio.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-900/10 to-transparent p-6 rounded-xl border border-emerald-500/20">
                                <BarChart3 className="w-8 h-8 text-emerald-500 mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Velocidade da Venda</h3>
                                <p className="text-sm text-gray-400">
                                    Quanto tempo leva desde a primeira mensagem no WhatsApp até o pagamento? Entender isso ajuda a saber na ponta do lápis com quanto dinheiro você vai poder contar.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Da Planilha Confusa à Visão Clara</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            A mágica acontece quando integramos todas as suas ferramentas de vendas em um <strong>Painel Visual (Dashboard)</strong> central e automático.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            Visualizar dados na mesma hora, numa tela limpa, permite descobrir coisas como: "Vendedores vendem menos de sexta-feira?" ou "Clientes que vêm do Instagram fecham negócio mais rápido que clientes do Google?".
                        </p>

                        <div className="flex items-center gap-6 bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                            <Presentation className="w-12 h-12 text-emerald-400 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-bold text-white">Prever o Futuro Financeiro</h4>
                                <p className="text-sm text-gray-400 mt-1">O sistema soma as negociações abertas no momento com a sua média de fechamentos, avisando de forma inteligente o quanto de dinheiro deve entrar até o final do mês.</p>
                            </div>
                        </div>

                    </div>
                </article>
            </Layout>
        </div>
    );
};

export default CRMMetricsPage;
