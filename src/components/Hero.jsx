import Spline from '@splinetool/react-spline';
import { Rocket, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient and vignette overlays (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.65)' }} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 pb-24 md:px-12 lg:px-16">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs tracking-widest text-[#00BFFF] ring-1 ring-white/10">
          <Rocket size={14} className="text-[#FF8C00]" /> FUTURISTIC • ROBOTICS • DRONES
        </span>
        <h1 className="font-extrabold leading-tight" style={{ fontFamily: 'Orbitron, Exo 2, sans-serif' }}>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Accelerate Innovation.</span>
          <span className="mt-2 block bg-gradient-to-r from-[#00BFFF] via-white to-[#FF8C00] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
            Where Machines Meet Minds.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-neutral-200 sm:text-base md:text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>
          We’re a community of creators driven by curiosity, precision, and the thrill of engineering.
          From drones to robotics to mechatronics — XLR8 is where technology and teamwork take flight.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#join" className="group relative inline-flex items-center gap-2 rounded-md bg-[#00BFFF] px-5 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_#00BFFF]">
            Join the Club
            <span className="h-1 w-1 rounded-full bg-black/40 transition-all group-hover:w-3" />
          </a>
          <a href="#projects" className="relative inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10">
            View Our Projects
          </a>
        </div>
      </div>

      <div className="relative z-10 flex w-full justify-center pb-6">
        <ChevronDown className="animate-bounce text-white/70" />
      </div>

      {/* Decorative lines */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
