import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  name: string;
  title: string;
  bio: string;
  onLetsStart: () => void;
}

export const HeroSection = ({
  title,
  bio,
  onLetsStart,
}: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-20">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl"></div>

      <div className="text-center relative z-10">
        <p className="text-emerald-400 text-sm font-medium tracking-widest mb-4 uppercase">
          Portfolio
        </p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            John Robin Dadap
          </span>
        </h2>
        <p className="text-2xl text-slate-300 mb-4">{title}</p>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          {bio}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onLetsStart}
            className="px-8 py-4 bg-emerald-500 text-slate-950 font-semibold rounded-full hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/25"
          >
            Let's Start
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="text-slate-500" size={24} />
      </div>
    </section>
  );
};
