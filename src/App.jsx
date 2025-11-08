import NavBar from './components/NavBar';
import EnhancedHero from './components/EnhancedHero';
import About from './components/About';
import Vision from './components/Vision';
import ShadcnCards from './components/ShadcnCards';
import Projects from './components/Projects';
import Interactions from './components/Interactions';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-white">
      <NavBar />
      <EnhancedHero />
      <About />
      <Vision />
      <ShadcnCards />
      <Projects />
      <Interactions />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
