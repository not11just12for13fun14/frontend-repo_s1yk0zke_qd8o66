import * as Tabs from '@radix-ui/react-tabs';
import { Rocket, Cpu, Bot } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="relative w-full bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: 'Orbitron, Exo 2, sans-serif' }}>
              Our Vision
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-300">
              Build a culture of rapid learning and fearless experimentation. We ship often, measure, and iterate.
            </p>
          </div>
        </div>

        <Tabs.Root defaultValue="mission" className="w-full">
          <Tabs.List className="mb-6 inline-flex rounded-lg border border-white/10 bg-white/5 p-1">
            <Tabs.Trigger value="mission" className="rounded-md px-4 py-2 text-sm font-medium text-white/80 data-[state=active]:bg-[#00BFFF]/15 data-[state=active]:text-white data-[state=active]:ring-1 data-[state=active]:ring-[#00BFFF]/40">
              Mission
            </Tabs.Trigger>
            <Tabs.Trigger value="principles" className="rounded-md px-4 py-2 text-sm font-medium text-white/80 data-[state=active]:bg-[#FF8C00]/15 data-[state=active]:text-white data-[state=active]:ring-1 data-[state=active]:ring-[#FF8C00]/40">
              Principles
            </Tabs.Trigger>
            <Tabs.Trigger value="stack" className="rounded-md px-4 py-2 text-sm font-medium text-white/80 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:ring-1 data-[state=active]:ring-white/30">
              Stack
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="mission" className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#00BFFF]/10 text-[#00BFFF]">
                <Rocket size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Accelerate hands-on innovation</h3>
                <p className="mt-1 text-white/80">
                  We design, prototype, and field-test robots and drones that solve real problems — from autonomous navigation to human-robot interfaces.
                </p>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="principles" className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                Ship small, ship often. Measure results and iterate.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                Safety-first engineering and responsible autonomy.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                Open collaboration and documentation for continuity.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                Cross-disciplinary learning: mech, elec, and code.
              </li>
            </ul>
          </Tabs.Content>

          <Tabs.Content value="stack" className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF8C00]/10 text-[#FF8C00]">
                  <Cpu size={18} />
                </div>
                <h4 className="font-semibold">Hardware</h4>
                <p className="mt-1 text-sm text-neutral-300">STM32, Arduino, Raspberry Pi, BLDC/ESC, IMUs, depth cams.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#00BFFF]/10 text-[#00BFFF]">
                  <Bot size={18} />
                </div>
                <h4 className="font-semibold">Software</h4>
                <p className="mt-1 text-sm text-neutral-300">ROS2, PX4/ArduPilot, Python, C++, SLAM, CV, planning.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white">
                  <Rocket size={18} />
                </div>
                <h4 className="font-semibold">Ops</h4>
                <p className="mt-1 text-sm text-neutral-300">Design sprints, field tests, telemetry, data-driven tuning.</p>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
}
