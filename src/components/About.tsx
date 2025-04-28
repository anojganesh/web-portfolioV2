'use client';

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { 
  SiJavascript, 
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiFlask
} from "react-icons/si";
import {FaJava, FaCode, FaServer, FaDatabase, FaTools, FaPalette /*, FaUser*/} from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";

const About = () => {
  const skills = {
   "Programming Languages": {
      icon: <FaCode className="text-blue-500" />,
      items: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Python", icon: <SiPython className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> }
      ]
    },
    "Web Development": {
      icon: <FaServer className="text-green-500" />,
      items: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express", icon: <SiExpress className="text-black dark:text-white" /> }
      ]
    },
    "Databases & ORMs": {
      icon: <FaDatabase className="text-purple-500" />,
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Prisma", icon: <SiPrisma className="text-blue-800" /> }
      ]
    },
    "Tools & Platforms": {
      icon: <FaTools className="text-orange-500" />,
      items: [
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
        { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" /> }
      ]
    },
    "UI/UX": {
      icon: <FaPalette className="text-pink-500" />,
      items: [
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-black dark:text-white" /> },
        { name: "Figma", icon: <SiFigma className="text-purple-600" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> }
      ]
    }
  };
 

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="section bg-white dark:bg-dark md:w-full scroll-mt-20 bg-gradient-to-bl from-secondary/20 to-primary/5"
      id="about"
    >
      <div className="container">
        <motion.h2 variants={fadeIn} className="section-title">
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* About Me Text */}
          <motion.div
  variants={fadeIn}
  className="md:w-1/2 bg-light dark:bg-dark/90 p-6 rounded-lg shadow-md"
>
  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
    {/*<FaUser className="text-primary" />*/}
    Hello World! 👋
  </h3>
  
  <div className="space-y-4 text-gray-700 dark:text-gray-300">
    <p>
      I&apos;m <span className="text-primary font-medium">Anoj</span>, a passionate full-stack developer based in Toronto, 
      specializing in modern web technologies. My toolkit includes:
    </p>
    
    <ul className="grid grid-cols-2 gap-2 mb-4">
      <li className="flex items-center gap-2">
        <SiNextdotjs className="text-black dark:text-white" />
        Next.js
      </li>
      <li className="flex items-center gap-2">
        <SiReact className="text-blue-500" />
        React
      </li>
      <li className="flex items-center gap-2">
        <SiTailwindcss className="text-cyan-400" />
        Tailwind CSS
      </li>
      <li className="flex items-center gap-2">
        <SiNodedotjs className="text-green-600" />
        Node.js
      </li>
      <li className="flex items-center gap-2">
    <SiExpress className="text-gray-800 dark:text-gray-300" />
    Express.js
  </li>
  <li className="flex items-center gap-2">
    <SiFlask className="text-black dark:text-white" />
    Flask
  </li>
    </ul>

    <p>
      I thrive on building <span className="text-primary font-medium">elegant solutions</span> to complex problems, 
      with a particular love for creating seamless user experiences. 
      My approach combines <span className="text-primary font-medium">technical precision</span> with creative problem-solving.
    </p>

    <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border-l-4 border-primary">
      <p className="font-medium mb-2">🔍 Currently seeking:</p>
      <p>
        Exciting opportunities where I can leverage my skills while growing 
        alongside talented teams. If you&apos;re looking for a <span className="text-primary font-medium">quick-learning, 
        adaptable developer</span> who brings both technical skills and enthusiasm 
        to the table, let&apos;s connect!
      </p>
    </div>

    <p className="text-sm italic">
    &apos;&quot;P.S. Want to see what I&apos;ve built? Check out my GitHub @anojganesh and DM me your thoughts! ✨&quot;
    </p>
  </div>
</motion.div>

          {/* Skills Section with Icons */}
          <motion.div 
            variants={fadeIn}
            className="md:w-1/2 bg-light dark:bg-dark/90 p-6 rounded-lg shadow-md"
          >
            {/*<h3 className="text-xl font-semibold mb-6">My Skills</h3>*/}
            
            <div className="space-y-6">
              {/* chose to remove icons from map*/}
              {Object.entries(skills).map(([category, {items}]) => (
                <div key={category}>
                  <h4 className="text-lg font-medium mb-3 text-primary dark:text-primary-light flex items-center gap-2">
                    {/*icon*/}
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-dark/70 rounded-lg text-sm shadow-sm border border-gray-200 dark:border-gray-700"
                      >
                        <span className="text-lg">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;