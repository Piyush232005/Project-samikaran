import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/:programId" element={<Donate />} />
        
        <Route path="*" element={
          <div className="flex items-center justify-center min-h-[60vh] flex-col">
            <h1 className="text-4xl font-bold text-gray-300">404</h1>
            <p className="text-gray-500 mt-2">Page Not Found</p>
          </div>
        } />
      </Routes>
    </Layout>
  );
};

export default App;
