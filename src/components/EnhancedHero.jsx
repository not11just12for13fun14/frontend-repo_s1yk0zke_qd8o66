import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

export default function EnhancedHero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 220px rgba(0,0,0,0.7)' }} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 pb-24 md:px-12 lg:px-16">
        <h1 className="font-extrabold leading-tight" style={{ fontFamily: 'Orbitron, Exo 2, sans-serif' }}>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">XLR8 Robotics</span>
          <span className="mt-2 block bg-gradient-to-r from-[#FF8C00] via-white to-[#00BFFF] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
            Minimal. Modern. Interactive.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-neutral-200 sm:text-base md:text-lg" style={{ fontFamily: 'Exo 2, sans-serif' }}>
          A seamless grid of responsive tiles. Interact to ripple the system. Explore robotics through playful precision.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="relative inline-flex items-center gap-2 rounded-md bg-white/90 px-5 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.8)]">
            Explore Work
          </a>
          <a href="#vision" className="relative inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10">
            Our Vision
          </a>
        </div>
      </div>

      <div className="relative z-10 flex w-full justify-center pb-6">
        <ChevronDown className="animate-bounce text-white/70" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
