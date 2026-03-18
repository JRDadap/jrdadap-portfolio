interface NavigationProps {
  name: string;
}

export const Navigation = ({ name }: NavigationProps) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-400">{name}</h1>
        <div className="flex gap-8">
          <button
            onClick={() => scrollTo("projects")}
            className="text-slate-400 hover:text-emerald-400 transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="text-slate-400 hover:text-emerald-400 transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="text-slate-400 hover:text-emerald-400 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};
