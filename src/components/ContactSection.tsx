import { Mail, Github, Linkedin } from "lucide-react";

interface ContactSectionProps {
  email: string;
  github: string;
  linkedin: string;
}

export const ContactSection = ({
  email,
  github,
  linkedin,
}: ContactSectionProps) => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">
          Let's <span className="text-emerald-400">Connect</span>
        </h3>
        <p className="text-slate-400 mb-10">
          Have a project in mind? I'd love to hear about it.
        </p>

        <div className="flex justify-center gap-8">
          <a
            href={github}
            className="text-slate-400 hover:text-emerald-400 flex items-center gap-2 transition"
          >
            <Github size={22} /> <span className="text-sm">GitHub</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="text-slate-400 hover:text-emerald-400 flex items-center gap-2 transition"
          >
            <Mail size={20} /> {email}
          </a>

          <a
            href={linkedin}
            className="text-slate-400 hover:text-emerald-400 flex items-center gap-2 transition"
          >
            <Linkedin size={22} /> <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
