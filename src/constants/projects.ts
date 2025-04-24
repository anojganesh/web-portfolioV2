import { Project } from "../types/types"; // change image to gif in future iteration

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product catalog, and checkout system.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://yourecommerceapp.com",
    image: "/images/Countoure_demo.png",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.",
    technologies: ["TypeScript", "Next.js", "Firebase", "React DnD"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://yourtaskapp.com",
    image: "/images/Countoure_demo.png",
  },
];