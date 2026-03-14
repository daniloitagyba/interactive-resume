import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

const Hero = lazy(() => import('./components/sections/Hero'));
const Education = lazy(() => import('./components/sections/Education'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Skills = lazy(() => import('./components/sections/Skills'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-theme-bg text-accent">
    <div className="animate-pulse text-xl font-bold">Loading...</div>
  </div>
);

const App = () => (
  <ThemeProvider>
    <LanguageProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Hero />
            <Education />
            <Experience />
            <Skills />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
