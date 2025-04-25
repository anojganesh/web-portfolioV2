"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { experienceData } from "../constants/experience";
import { educationData } from "../constants/education";

const Experience = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="section bg-light dark:bg-dark/80"
      id="experience"
    >
      <div className="container">
        <motion.h2 variants={fadeIn} className="section-title">
          Experience & Education
        </motion.h2>

        <div className="flex md:flex-row gap-8">
          <motion.div variants={fadeIn} className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Experience
            </h3>
            <div className="space-y-8">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white dark:bg-dark p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {exp.duration}
                    </span>
                  </div>
                  <h5 className="text-lg text-primary mb-4">{exp.company}</h5>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Education
            </h3>
            <div className="space-y-8">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-dark p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {edu.duration}
                    </span>
                  </div>
                  <h5 className="text-lg text-primary mb-4">
                    {edu.institution}
                  </h5>
                  <ul className="space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;