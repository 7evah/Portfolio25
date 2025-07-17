import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV6xCNJv_vEZAZjHrWWeAeIaGSO2Q37NzcU81vS5ql5ox6MXrYrprsT4VU9Hu30uRc0ElM0Uk0bV1bdcTnCoQuyGjE887NG-m70kdR3ZaknVIKG17BACLaJiYyqNSwsYHYorgiXgsivE0SobMoahZM_eiZKFXDhxrNyaC-qLrRtxIiJzBxLa0D2QIVbAKA2dADH2UYAt3_AQh94i70ZYqpGRG5VntGMMUbdQE3nn4_ua0IoPeiA7d0wkPezJYaJVG7km8Nopt_sQc",
    imageHint: "online store",
    link: "#"
  },
  {
    title: "Social Media App",
    description: "A social media application with user profiles, posts, and real-time updates.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPbB9BLWAFJcPxUGBscmsMvhqIJKUmGno5QXTA2_qXKgQ7rGtArew6b7JARPjLr8_I3CdTw_hB1KfJIKHBmrvTEAnvoqOYikMmZAtTJkwp3lZ7kGluZAB15JPZk8ohRehLVyCKZoSMbBv-nPXh_F44EOCvvQ4RA--Yoa0AwbZC5vIwycdTQrJliHuFoiGb-HJnySC5p22v8yH8Wbxh6lzAWnXeG-Q0QkCLK9gmEhD8secRyOHsEKfTUf515WDwFLs_f_ON9TRajLY",
    imageHint: "social network",
    link: "#"
  },
  {
    title: "Task Management System",
    description: "A task management system with project tracking, task assignments, and progress monitoring.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcqKfDDmgg5yZiQzCpBlmgTigDCmDmIeZ_BRXII_wI7wVRi0UxqE6nLBGW7GEzEh_1rQMW2gJLphAFngohbgE858ubKhlE3hUnwx_4acr7UD0X7K9WrojIxqImfZUWO2dxKJ_AJGCu0AMxO9lJDcthf5p8YAYgJdu2OEcO5IaxAyfbTmD1eu4XHOp6nMxw1CJQEHvceydXF2lgQ5ZPhNtwCbOiel0ulViSvQu0BbU-ZC7kULyrFS-FKTv1VnOW0I-ZrHEiUVLKSag",
    imageHint: "productivity tool",
    link: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full">
      <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project) => (
          <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="bg-secondary border-border h-full overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20">
              <CardContent className="p-0">
                <div className="relative w-full aspect-video">
                  <Image src={project.imageUrl} alt={project.title} layout="fill" objectFit="cover" data-ai-hint={project.imageHint}/>
                </div>
                <div className="p-4">
                  <CardTitle className="text-base font-medium leading-normal">{project.title}</CardTitle>
                  <CardDescription className="text-sm font-normal leading-normal mt-1">{project.description}</CardDescription>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
