import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
// FIX: Import Transition type from framer-motion to fix type inference issue.
import { AnimatePresence, motion, Transition } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import CursorGlow from './components/CursorGlow';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

// FIX: Explicitly type `pageTransition` with the `Transition` type from framer-motion.
// This ensures that properties like `type` and `ease` are correctly typed as literal strings
// instead of the general `string` type, which resolves the assignment error.
const pageTransition: Transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 font-sans min-h-screen transition-colors duration-300">
        <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-[#000000] dark:via-[#0c001f] dark:to-[#000428] animate-liquid-gradient" />
        <CursorGlow />
        <HashRouter>
          <Navbar />
          <main className="pt-20">
            <AnimatedRoutes />
          </main>
          <Footer />
        </HashRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
