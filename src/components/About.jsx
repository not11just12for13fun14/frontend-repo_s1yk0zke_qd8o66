import { Cpu, Bot, Cog, Puzzle } from 'lucide-react';

const items = [
  { icon: Cpu, title: 'Drone Engineering', desc: 'Airframes, propulsion, flight control, and FPV craft.' },
  { icon: Bot, title: 'Robotics & AI Integration', desc: 'Perception, planning, and embedded autonomy.' },
  { icon: Cog, title: 'Mechatronics & Automation', desc: 'Sensors, actuators, control systems, and kinematics.' },
  { icon: Puzzle, title: 'Creative Engineering Challenges', desc: 'Rapid prototyping, competitions, and hack builds.' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: 'Orbitron, Exo 2, sans-serif' }}>
          What is XLR8?
        </h2>
        <p className="mt-4 max-w-3xl text-neutral-300">
          XLR8 (pronounced Accelerate) is a student-led robotics and drone innovation club. Our mission is to explore mechanical intelligence through creativity, collaboration, and hands-on projects.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-[#00BFFF]/40 hover:shadow-[0_20px_50px_-20px_#00BFFF]">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#00BFFF]/10 text-[#00BFFF]">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
