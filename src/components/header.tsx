import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/icons/logo-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-secondary px-4 md:px-10 py-3 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="flex items-center gap-4 text-white">
        <LogoIcon className="size-6" />
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          7evas Portfolio
        </h2>
      </div>
      <nav className="hidden lg:flex items-center gap-9">
        {navLinks.map((link) => (
          <a
            key={link.href}
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="bg-secondary hover:bg-primary"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <GithubIcon className="size-5" />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="bg-secondary hover:bg-primary"
        >
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="size-5" />
          </a>
        </Button>
      </div>
    </header>
  );
}
