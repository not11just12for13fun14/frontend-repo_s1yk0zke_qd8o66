export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/70">© 2025 XLR8 Robotics Club | Powered by Curiosity</p>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <a href="#" className="transition hover:text-[#00BFFF]">Instagram</a>
            <span className="text-white/30">•</span>
            <a href="#" className="transition hover:text-[#00BFFF]">Discord</a>
            <span className="text-white/30">•</span>
            <a href="#" className="transition hover:text-[#00BFFF]">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
