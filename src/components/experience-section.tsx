import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
  },
  {
    title: "Junior Developer",
    company: "Web Solutions Co.",
    period: "2018 - 2020",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full">
      <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience</h2>
      <div className="relative px-4">
        <div className="absolute left-8 top-2 bottom-2 w-0.5 bg-border" />
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center z-10">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div className="pt-2">
              <p className="text-white text-base font-medium leading-normal">{exp.title} at {exp.company}</p>
              <p className="text-muted-foreground text-sm font-normal leading-normal">{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
