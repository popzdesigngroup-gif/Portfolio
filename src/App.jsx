import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load below-the-fold components for faster initial paint
const Services = lazy(() => import('./components/Services'));
const WhyChooseMe = lazy(() => import('./components/WhyChooseMe'));
const Work = lazy(() => import('./components/Work'));
const Process = lazy(() => import('./components/Process'));
const Certifications = lazy(() => import('./components/Certifications'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main font-body selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32 flex items-center justify-center opacity-50">Loading...</div>}>
          <Services />
          <WhyChooseMe />
          <Work />
          <Process />
          <Certifications />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
