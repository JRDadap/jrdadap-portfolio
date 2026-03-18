import { Code, Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-center">
          Featured <span className="text-emerald-400">Projects</span>
        </h3>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
          Here are some of the projects I've worked on
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition">
                <Code className="text-emerald-400" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-100">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2 border-t border-slate-800">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-emerald-400 transition"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-emerald-400 transition"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
