import Image from "next/image";
import CaptImage from "@/components/photos/Capt.png";
import weatherImage from "@/components/photos/weather.png";
import eventImage from "@/components/photos/eventma.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "JobPortal",
    description: "JobPortal is a platform for applying to jobs. The administrator manages job postings, and a secondary role can view, edit, or delete their own postings, which are only visible after approval by the administrator, using Laravel.",
    imageUrl: CaptImage,
    imageHint: "platform for applying to jobs",
    link: "https://github.com/7evah/JobPortal",
  },
  {
    title: "weather app",
    description: "Mini weather app that lets you check the weather for the next 7 days with all the necessary details. You can search for any city. It was built with JavaScript and OpenWeatherMap.",
    imageUrl: weatherImage,
    imageHint: "weather app",
    link: "https://github.com/7evah/weather-app"
  },
  {
    title: "ticket booking platform",
    description: "EventManager is a ticket booking platform for upcoming events or parties. It's a simple platform built with PHP.",
    imageUrl: eventImage,
    imageHint: "ticket booking platform",
    link: "https://github.com/7evah/events-app"
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
