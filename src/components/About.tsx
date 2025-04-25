"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";

const About = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="section bg-white dark:bg-dark md:w-1/2 bg-gradient-to-br from-pimary/30 to-secondary/5"
      id="about"
    >
      <div className="container">
        <motion.h2 variants={fadeIn} className="section-title">
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            variants={fadeIn}
            className="md:w-full bg-light dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="mb-4">
              I'm a Computer Science student with a passion for web development, data science,
              and problem-solving. I enjoy creating efficient, user-friendly
              applications that provide real-world solutions.
            </p>
            <p className="mb-4">
              When I'm not coding, you can find me working on projects, learning new technologies, or participating in hackathons
              to challenge myself.
            </p>
            <p>
              I'm currently looking for internship opportunities where I can
              apply my skills, learn from experienced developers, and contribute
              to meaningful projects.
            </p>
          </motion.div>
      {/* Image placeholder. Replace with an actual image or a video in the future. */}  
        {/* add skills in a seperate module in future iteration}

          <motion.div variants={fadeIn} className="md:w-1/2 bg-light dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Git & GitHub",
                "Tailwind CSS",
                "SQL",
                "REST APIs",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-light dark:bg-dark/50 p-3 rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        */}
        </div>
      </div>
    </motion.section>
  );
};

export default About;