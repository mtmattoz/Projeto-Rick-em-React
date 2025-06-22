import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import RickMortyLoading from './RickMortyLoading';
import RouteTracker from './RouteTracker';

function delayImport(factory, delay = 3000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      factory().then(resolve);
    }, delay);
  });
}

const Erro404Rick = lazy(() => delayImport(() => import('./Erro404Rick'), 1500));
const Menu = lazy(() => delayImport(() => import('./Menu'), 2000));
const Login = lazy(() => delayImport(() => import('./Login'), 2000));
const Main = lazy(() => delayImport(() => import('./Main'), 2000));
const Footer = lazy(() => delayImport(() => import('./Footer'), 3000));
const Personagens = lazy(() => delayImport(() => import('./Personagens'), 2000));
const Localizacao = lazy(() => delayImport(() => import('./Localizacao'), 2000));
const Episodios = lazy(() => delayImport(() => import('./Episodios'), 2000));
const Sobre = lazy(() => delayImport(() => import('./Sobre'), 2000));

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <RickMortyLoading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Menu><Main /></Menu>} />
      <Route path="/footer" element={<Menu><Footer insta="@marcosamiguel" whats="32 98401-5080" /></Menu>} />
      <Route path="/Episodios" element={<Menu><Episodios /></Menu>} />
      <Route path="/personagens" element={<Menu><Personagens /></Menu>} />
      <Route path="/localizacao" element={<Menu><Localizacao /></Menu>} />
      <Route path="/sobre" element={<Menu><Sobre /></Menu>} />
      <Route path="*" element={<Menu><Erro404Rick /></Menu>} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouteTracker /> 
      <React.Suspense fallback={<RickMortyLoading />}>
        <AppContent />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
