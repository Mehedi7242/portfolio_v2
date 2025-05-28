import { Button } from "@/components/ui/button";

type SocialLink = {
  label: string;
  className: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    className: "devicon-github-original",
    href: "https://github.com/Mehedi7242",
  },
  {
    label: "LinkedIn",
    className: "devicon-linkedin-plain",
    href: "https://www.linkedin.com/in/mehedi2hasan7",
  },

  {
    label: "Facebook",
    className: "devicon-facebook-plain",
    href: "https://www.facebook.com/mehedi.hasan.315270/", 
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-4 flex gap-4 justify-center">
      {socialLinks.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" aria-label={link.label}>
            <i className={`${link.className} text-xl md:text-2xl`} />
          </Button>
        </a>
      ))}
    </div>
  );
}
