interface SkillsSectionProps {
  skills: string[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">
          <span className="text-emerald-400">Skills</span> & Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 bg-slate-800 border border-slate-700 rounded-full text-slate-300 hover:border-emerald-500 hover:text-emerald-400 transition cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
