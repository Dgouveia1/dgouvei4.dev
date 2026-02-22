/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LinksPage from "./pages/LinksPage";
import WhatsAppAIPage from "./pages/blog/WhatsAppAI";
import EssentialAutomationsPage from "./pages/blog/EssentialAutomations";
import CRMMetricsPage from "./pages/blog/CRMMetrics";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/blog/whatsapp-ia" element={<WhatsAppAIPage />} />
        <Route path="/blog/automacoes-essenciais" element={<EssentialAutomationsPage />} />
        <Route path="/blog/metricas-crm" element={<CRMMetricsPage />} />
      </Routes>
    </Router>
  );
}
