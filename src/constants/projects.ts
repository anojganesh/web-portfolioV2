import { Project } from "../types/types"; // change image to gif in future iteration

export const projectsData: Project[] = [
  {
    id: 1,
    title: "EcoCatch",
    description:
      "A full-stack web application to locate fishing sites within Ontario, and easily keep up to date with local fishing regulations.",
    technologies: ["React", "Node.js", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/anojganesh/EcoCatch",
    /*liveUrl: "https://app.com",*/
    image: "/images/EcoCatch.png",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A modern full-stack e-commerce application with user authentication, product catalog, and checkout system.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/anojganesh/Web-Apps/tree/main/Louvre-Modern_Clothing_Brand",
    /*liveUrl: "https://app.com",*/
    image: "/images/Countoure_demo.png",
  },
  {
    id: 3,
    title: "Real-Time TicTacToe",
    description:
      "Multiplayer tic-tac-toe game with WebSocket communication (Socket.io) for real-time move synchronization between players.",
    technologies: ["React", "Node.js", "WebSockets", "Heroku"],
    githubUrl: "https://github.com/anojganesh/Tic-Tac-Toe-v1",
    liveUrl: "https://tic-tac-toe-ag-0e9ceb6142d0.herokuapp.com/",
    image: "/images/tictactoe.png",
  },
];