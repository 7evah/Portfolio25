import { Card, CardContent } from "@/components/ui/card";
import { ReactIcon } from "@/components/icons/react-icon";
import { NodeIcon } from "@/components/icons/node-icon";
import { DatabaseIcon } from "@/components/icons/database-icon";
import { LaravelIcon } from "@/components/icons/laravel-icon";
import { VueIcon } from "@/components/icons/vue-icon";
import { DotnetIcon } from "@/components/icons/dotnet-icon";
import { ExpressIcon } from "@/components/icons/express-icon";
import { RestApiIcon } from "@/components/icons/rest-api-icon";

const skills = [
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Databases", icon: DatabaseIcon },
  { name: "Laravel", icon: LaravelIcon },
  { name: "Vue.js", icon: VueIcon },
  { name: ".NET", icon: DotnetIcon },
  { name: "Express.js", icon: ExpressIcon },
  { name: "REST API", icon: RestApiIcon },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full">
      <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {skills.map((skill) => (
          <Card key={skill.name} className="bg-secondary border-border p-4 transition-transform duration-300 hover:scale-105 hover:bg-primary/20 hover:border-primary">
            <CardContent className="flex flex-col items-center justify-center gap-3 p-0">
              <skill.icon className="w-8 h-8 text-white" />
              <h3 className="text-white text-base font-bold leading-tight text-center">{skill.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
