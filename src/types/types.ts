export interface Education {
    id: number;
    degree: string;
    institution: string;
    duration: string;
    description: string[];
  }
  
  export interface Experience {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string[];
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    image: string;
  }
  
  export interface Skill {
    id: number;
    name: string;
    level: number;
    category: "frontend" | "backend" | "tool";
  }