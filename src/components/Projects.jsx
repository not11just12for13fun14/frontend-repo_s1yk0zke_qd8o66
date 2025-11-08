import { Wrench, LineChart, Armchair } from 'lucide-react';

const projects = [
  { name: 'XLR8 V1', desc: 'Custom-built quadcopter', icon: Wrench },
  { name: 'AutoBot', desc: 'Line-following robot', icon: LineChart },
  { name: 'SmartArm', desc: 'Gesture-controlled robotic arm', icon: Armchair },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: 'Orbitron, Exo 2, sans-serif' }}>
          What We Build
        </h2>
        <p className="mt-4 max-w-3xl text-neutral-300">
          Each semester we take on new challenges — drones, bots, and smart systems that push boundaries.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ name, desc, icon: Icon }) => (
            <div key={name} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#FF8C00]/40 hover:shadow-[0_20px_50px_-20px_#FF8C00]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF8C00]/10 text-[#FF8C00]">
                <Icon size={20} />
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{name}</h3>
                <span className="text-xs text-white/60">v1</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
