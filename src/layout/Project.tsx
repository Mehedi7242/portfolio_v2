import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: " Almarez-commerce Platform)",
    description:
      "A full-featured e-commerce application built with Next.js, featuring an admin panel. The backend is developed using Express.js, and product images are stored using Cloudinary.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "REST API",
    ],
    liveLink: "https://almarez.vercel.app/",
  },
  {
    title: "Surrey E-commerce Platform",
    description:
      "A multi-vendor clothing e-commerce platform with separate admin and vendor dashboards. The application is built using Next.js, with ImageKit used for image storage and optimization.",
    tech: [
      "PostgreSQL",
      "Express",
      "React",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "REST API",
    ],
    liveLink: "https://surrey-neon.vercel.app/",
  },
  {
    title: "Job Portal",
    description:
      "A web-based job portal that connects recruiters and job seekers, allowing job posting, application management, and user authentication.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
      "REST API",
    ],
    liveLink: "https://job-portal-client-for-recruiter-v3.vercel.app/",
  },
  {
    title: "Dublin Bus",
    description:
      "A clean and responsive user interface for a bus transportation system, focusing on smooth animations and user experience.",
    tech: ["React", "Framer Motion", "REST API"],
    liveLink: "https://mehedi7242.github.io/dublin-bus-page/",
  },
  {
    title: "Dragon News",
    description:
      "An online news portal featuring category-based news browsing and secure user authentication.",
    tech: ["Firebase Authentication", "Vite", "ShadCN UI"],
    liveLink: "https://dragon-news-29617.web.app/category/01",
  },
];


const SkeletonText = ({ className = "" }: { className?: string }) => (
  <div
    className={`bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse ${className}`}
  />
);

const Project = () => {
  const [showContent, setShowContent] = useState<boolean[]>(
    projects.map(() => false)
  );

  // Use refs to track if iframe loaded per project
  const loadedRef = useRef<boolean[]>(projects.map(() => false));

  useEffect(() => {
    // For each project, set a 1 second fallback timeout to show content if iframe doesn't load
    projects.forEach((_, index) => {
      setTimeout(() => {
        if (!loadedRef.current[index]) {
          setShowContent((prev) => {
            const copy = [...prev];
            copy[index] = true;
            return copy;
          });
          loadedRef.current[index] = true;
        }
      }, 1000);
    });
  }, []);

  const handleLoad = (index: number) => {
    if (!loadedRef.current[index]) {
      loadedRef.current[index] = true;
      setShowContent((prev) => {
        const copy = [...prev];
        copy[index] = true;
        return copy;
      });
    }
  };

  return (
    <section id="projects" className="py-16  max-w-6xl mx-auto px-2">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-300 dark:border-gray-700 p-4 shadow-sm hover:shadow-md transition space-y-4"
          >
            <div className="w-full aspect-video rounded-md overflow-hidden border border-gray-200 dark:border-gray-800 relative">
              {!showContent[index] && (
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
              )}
              <iframe
                src={project.liveLink}
                title={project.title}
                className={`w-full h-full ${showContent[index] ? "block" : "hidden"}`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                onLoad={() => handleLoad(index)}
              />
            </div>

            {!showContent[index] ? (
              <div className="space-y-3">
                <SkeletonText className="h-6 w-3/4" />
                <SkeletonText className="h-4 w-full" />
                <div className="flex gap-2">
                  {[...Array(project.tech.length)].map((_, i) => (
                    <SkeletonText key={i} className="h-5 w-12 rounded-full" />
                  ))}
                </div>
                <SkeletonText className="h-5 w-20 mt-2" />
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Visit Live
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
