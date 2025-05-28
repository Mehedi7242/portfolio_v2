import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mehedi Hasan. All rights reserved.</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/Mehedi7242"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/mehedi2hasan7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="mailto:mehedi2hasan7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
