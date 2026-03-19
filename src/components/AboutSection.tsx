import { Code } from "lucide-react";

interface About {
  title: string;
  description: string;
}

interface AboutSectionProps {
  about: About[];
}

export const AboutSection = ({ about }: AboutSectionProps) => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-center">
          ABOUT <span className="text-emerald-400">ME</span>
        </h3>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.map((about, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition">
                <Code className="text-emerald-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-100">
                {about.title}
              </h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {about.description}
              </p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
