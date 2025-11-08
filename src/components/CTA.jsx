import { Sparkles, Users } from 'lucide-react';

export default function CTA() {
  return (
    <section id="join" className="relative overflow-hidden bg-[#0A0A0A] py-20 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60" style={{
        background: 'radial-gradient(800px 300px at 20% 20%, rgba(0,191,255,0.15), transparent), radial-gradient(700px 300px at 80% 80%, rgba(255,140,0,0.15), transparent)'
      }} />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur md:p-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-extrabold sm:text-3xl" style={{ fontFamily: 'Orbitron, Exo 2, sans-serif' }}>
                Ready to XLR8 your ideas?
              </h3>
              <p className="mt-3 text-white/80">
                Whether you’re an engineer, designer, or just curious — there’s a place for you here. Join our community and start building the future.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 md:mt-0 md:flex-row">
              <a href="#joinForm" className="inline-flex items-center gap-2 rounded-md bg-[#FF8C00] px-5 py-3 font-semibold text-black transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_#FF8C00]">
                <Users size={18} /> Become a Member
              </a>
              <a href="#collab" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10">
                <Sparkles size={18} /> Collaborate With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
