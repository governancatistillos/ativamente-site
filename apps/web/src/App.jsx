import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import TerapiasPage from './pages/TerapiasPage.jsx';
import ProfissionaisPage from './pages/ProfissionaisPage.jsx';
import GaleriaPage from './pages/GaleriaPage.jsx';
import UnidadesPage from './pages/UnidadesPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';
import AdsLandingPage from './pages/AdsLandingPage.jsx';
import AutismoLandingPage from './pages/AutismoLandingPage.jsx';
import FonoaudiologiaLandingPage from './pages/FonoaudiologiaLandingPage.jsx';
import AbaLandingPage from './pages/AbaLandingPage.jsx';
import DesenvolvimentoLandingPage from './pages/DesenvolvimentoLandingPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/terapias" element={<TerapiasPage />} />
        <Route path="/profissionais" element={<ProfissionaisPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/unidades" element={<UnidadesPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/atendimento-infantil-alphaville" element={<AdsLandingPage />} />
        <Route path="/terapia-infantil-alphaville" element={<AdsLandingPage />} />
        <Route path="/landing/terapia-infantil-alphaville" element={<AdsLandingPage />} />
        <Route path="/terapia-para-autismo-alphaville" element={<AutismoLandingPage />} />
        <Route path="/autismo-alphaville" element={<AutismoLandingPage />} />
        <Route path="/landing/autismo-alphaville" element={<AutismoLandingPage />} />
        <Route path="/fonoaudiologia-infantil-alphaville" element={<FonoaudiologiaLandingPage />} />
        <Route path="/fonoaudiologia-alphaville" element={<FonoaudiologiaLandingPage />} />
        <Route path="/aba-infantil-alphaville" element={<AbaLandingPage />} />
        <Route path="/aba-alphaville" element={<AbaLandingPage />} />
        <Route path="/desenvolvimento-infantil-alphaville" element={<DesenvolvimentoLandingPage />} />
        <Route path="/desenvolvimento-alphaville" element={<DesenvolvimentoLandingPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;