import { Header } from "@/components/header";
import { ProfileSection } from "@/components/profile-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-background overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <Header />
        <main className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <ProfileSection />
            <div className="py-8" />
            <ProjectsSection />
            <div className="py-8" />
            <SkillsSection />
            <div className="py-8" />
            <ExperienceSection />
            <div className="py-8" />
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
}
