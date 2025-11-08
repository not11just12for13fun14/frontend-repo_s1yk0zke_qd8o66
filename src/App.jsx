import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-white">
      <Hero />
      <About />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
