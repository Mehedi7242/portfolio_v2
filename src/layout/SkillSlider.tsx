import { useState } from "react";
import "./SkillSlider.css";

const skills = [
  { icon: "devicon-html5-plain", name: "HTML" },
  { icon: "devicon-css3-plain", name: "CSS" },
  { icon: "devicon-javascript-plain", name: "JavaScript" },
  { icon: "devicon-react-original", name: "React" },
  { icon: "devicon-nodejs-plain", name: "Node.js" },
  { icon: "devicon-express-original", name: "Express" },
  { icon: "devicon-mongodb-plain", name: "MongoDB" },
  { icon: "devicon-tailwindcss-plain", name: "Tailwind CSS" },
  { icon: "devicon-git-plain", name: "Git" },
  { icon: "devicon-postgresql-plain", name: "Postgres" },
  { icon: "devicon-typescript-plain", name: "Typescript" },
];


function SkillSlider() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`${isPaused ? "paused" : ""} scroll-x-animation flex gap-6`}>
        {[...skills, ...skills].map((skill, i) => {
          // Fallback icons for ones without devicon:
          let iconClass = skill.icon;

          // If devicon class is invalid or missing, show a placeholder
          const knownDevicons = [
            "devicon-html5-plain",
            "devicon-css3-plain",
            "devicon-javascript-plain",
            "devicon-react-original",
            "devicon-nodejs-plain",
            "devicon-python-plain",
            "devicon-mysql-plain",
            "devicon-git-plain",
            "devicon-figma-plain",
            "devicon-mongodb-plain",
            "devicon-express-original",
            "devicon-tailwindcss-plain",
            "devicon-firebase-plain",
            "devicon-vitejs-plain",
            "devicon-postgresql-plain",
            "devicon-typescript-plain"
          ];

          if (!knownDevicons.includes(skill.icon)) {
            // fallback to a simple colored circle with first letter
            return (
              <div
                key={i}
                className="flex flex-col items-center w-20 text-gray-700 dark:text-gray-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {skill.name.charAt(0)}
                </div>
                <span className="text-sm mt-1">{skill.name}</span>
              </div>
            );
          }

          return (
            <div key={i} className="flex flex-col items-center w-20">
              <i
                className={`${iconClass} colored text-3xl md:text-4xl transition-transform duration-300 hover:scale-110`}
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillSlider;
