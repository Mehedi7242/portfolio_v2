import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full px-6 py-4 bg-background shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary">Mehedi's Portfolio</h1>

        {/* Hamburger Button for small screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 items-center">
          <Button asChild variant="link">
            <a href="#projects">Projects</a>
          </Button>
          <Button asChild variant="link">
            <a href="#skills">Skills</a>
          </Button>
          <Button asChild variant="link">
            <a href="#about">About</a>
          </Button>
          <Button asChild variant="link">
            <a href="#contact">Contact</a>
          </Button>

          <ModeToggle />

          <Button size="sm" className="ml-2">
            <a
              href="/mehedi(3).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-3 md:hidden items-center">
          <Button asChild variant="link" className="w-full justify-center">
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </Button>
          <Button asChild variant="link" className="w-full justify-center">
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </Button>
          <Button asChild variant="link" className="w-full justify-center">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </Button>
          <Button asChild variant="link" className="w-full justify-center">
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </Button>
          <ModeToggle />
          <Button size="sm" className="w-full justify-center">
            <a
              href="/Mehedi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </Button>
        </div>
      )}
    </header>
    
  );
}
