import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

const Hero = lazy(() => import('./components/sections/Hero'));
const Education = lazy(() => import('./components/sections/Education'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Languages = lazy(() => import('./components/sections/Languages'));

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
            <Certifications />
            <Experience />
            <Skills />
            <Languages />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
