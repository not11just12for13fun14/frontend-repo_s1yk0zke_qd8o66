import { Rocket, Cpu, Bot } from 'lucide-react';

// Lightweight shadcn-style Card primitives implemented locally
function Card({ children }) {
  return <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">{children}</div>;
}
function CardHeader({ children }) {
  return <div className="mb-3">{children}</div>;
}
function CardTitle({ children }) {
  return <div className="text-lg font-semibold">{children}</div>;
}
function CardDescription({ children }) {
  return <p className="text-sm text-neutral-300">{children}</p>;
}
function CardContent({ children }) {
  return <div className="mt-3">{children}</div>;
}

export default function ShadcnCards() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ fontFamily: 'Orbitron, Exo 2, sans-serif' }}>Featured Tracks</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#00BFFF]/10 text-[#00BFFF]"><Rocket size={18} /></div>
              <CardTitle>Flight Systems</CardTitle>
              <CardDescription>Autopilots, state estimation, control loops.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc text-white/80">
                <li>PX4 / ArduPilot</li>
                <li>PID & MPC</li>
                <li>Telemetry / OSD</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF8C00]/10 text-[#FF8C00]"><Cpu size={18} /></div>
              <CardTitle>Embedded</CardTitle>
              <CardDescription>MCUs, peripherals, real-time firmware.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc text-white/80">
                <li>STM32 / ESP32</li>
                <li>Drivers & HAL</li>
                <li>RTOS basics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white"><Bot size={18} /></div>
              <CardTitle>Perception</CardTitle>
              <CardDescription>Vision, SLAM, and planning.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc text-white/80">
                <li>OpenCV / ROS2</li>
                <li>Depth & VO</li>
                <li>Path planning</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
