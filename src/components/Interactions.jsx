import { useState } from 'react';
import { ThumbsUp, Zap, Star } from 'lucide-react';

export default function Interactions() {
  const [likes, setLikes] = useState(128);
  const [stars, setStars] = useState(32);
  const [boost, setBoost] = useState(0);

  return (
    <section className="relative bg-[#0A0A0A] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-6 sm:grid-cols-3">
            <button onClick={() => setLikes(likes + 1)} className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 p-5 text-left transition hover:-translate-y-0.5 hover:border-[#00BFFF]/40">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#00BFFF]/10 text-[#00BFFF]">
                  <ThumbsUp size={18} />
                </div>
                <div>
                  <div className="text-sm text-white/70">Applaud</div>
                  <div className="text-lg font-semibold">{likes}</div>
                </div>
              </div>
              <span className="pointer-events-none rounded-full bg-[#00BFFF]/20 px-2 py-1 text-xs text-[#00BFFF] transition group-active:scale-90">+1</span>
            </button>

            <button onClick={() => setStars(stars + 1)} className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 p-5 text-left transition hover:-translate-y-0.5 hover:border-yellow-400/40">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-yellow-400/10 text-yellow-400">
                  <Star size={18} />
                </div>
                <div>
                  <div className="text-sm text-white/70">Star</div>
                  <div className="text-lg font-semibold">{stars}</div>
                </div>
              </div>
              <span className="pointer-events-none rounded-full bg-yellow-400/20 px-2 py-1 text-xs text-yellow-400 transition group-active:scale-90">+1</span>
            </button>

            <button onClick={() => setBoost(b => Math.min(100, b + 10))} className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 p-5 text-left transition hover:-translate-y-0.5 hover:border-[#FF8C00]/40">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#FF8C00]/10 text-[#FF8C00]">
                  <Zap size={18} />
                </div>
                <div>
                  <div className="text-sm text-white/70">Boost</div>
                  <div className="text-lg font-semibold">{boost}%</div>
                </div>
              </div>
              <span className="pointer-events-none rounded-full bg-[#FF8C00]/20 px-2 py-1 text-xs text-[#FF8C00] transition group-active:scale-90">+10%</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
