import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import Work from './components/Work';
import Process from './components/Process';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseMe />
        <Work />
        <Process />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
