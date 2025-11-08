import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12 lg:px-16">
        <a href="#" className="flex items-center gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#00BFFF]/15 text-[#00BFFF]">
            <Rocket size={16} />
          </div>
          <span className="font-semibold tracking-wide" style={{ fontFamily: 'Orbitron, Exo 2, sans-serif' }}>XLR8</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
          <a href="#vision" className="text-sm text-white/80 hover:text-white">Vision</a>
          <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
          <a href="#join" className="text-sm text-white/80 hover:text-white">Join</a>
          <a href="#join" className="rounded-md bg-[#FF8C00] px-3 py-1.5 text-sm font-semibold text-black hover:shadow-[0_10px_30px_-10px_#FF8C00]">Get Started</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/80 px-6 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#about" className="text-sm text-white/90">About</a>
            <a href="#vision" className="text-sm text-white/90">Vision</a>
            <a href="#projects" className="text-sm text-white/90">Projects</a>
            <a href="#join" className="text-sm text-white/90">Join</a>
          </div>
        </div>
      )}
    </header>
  );
}
