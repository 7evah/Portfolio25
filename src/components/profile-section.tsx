import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileSection() {
  return (
    <section id="about" className="flex p-4">
      <div className="flex w-full flex-col gap-4 items-center text-center">
        <Avatar className="w-32 h-32 border-4 border-secondary">
          <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E35AQEmwiWlmMzOUA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1721316687210?e=1753196400&v=beta&t=NAZWNPkwHGo74o3uJKyAG4yBE-H8-LCbjKC0D0bJKrM" alt="Hamza El Badaoui" />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
            Hamza El Badaoui
          </h1>
          <p className="text-muted-foreground text-lg font-normal leading-normal">
            Full-Stack Developer
          </p>
        
        </div>
        <div className="flex w-full max-w-xs gap-3 mt-4">
          <Button asChild className="flex-1 bg-secondary hover:bg-primary text-secondary-foreground font-bold">
            <a href="/CV_2025-05-22_Hamza_El_Badaoui.pdf" download="Hamza-El-Badaoui-CV.pdf">Download CV</a>
          </Button>
          <Button asChild className="flex-1 bg-[#dce8f3] hover:bg-white text-[#141a1f] font-bold">
            <a href="https://github.com/7evah" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
        </div>
        <div className="pt-5">
           <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">About</h2>
           <p className="text-white text-base font-normal leading-normal pt-3 max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in building scalable
            web applications. Experienced in various technologies including
            Laravel, React, Node.js, and databases.
            </p>
        </div>
      </div>
    </section>
  );
}