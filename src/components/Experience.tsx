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
      className="section scroll-mt-20 bg-light dark:bg-dark/80 bg-gradient-to-br from-primary/5 to-secondary/20"
      id="experience"
    >
      <div className="container">
        <motion.h2 variants={fadeIn} className="section-title">
          Education & Experience
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Education Column - Left Side */}
          <motion.div variants={fadeIn} className="lg:w-1/3">
  <h3 className=" text-2xl font-semibold mb-6 text-center lg:text-left">
    Education
  </h3>
  <div className=" sticky top-[25%] space-y-8">
    {educationData.map((edu) => (
      <div
        key={edu.id}
        className="bg-white dark:bg-dark/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="flex flex-col sm:flex-row justify-between gap-2 mb-2">
          <h4 className="text-xl font-semibold">B.Sc. Computer Science (Honours, Co-Op)</h4>
          <span className="bg-primary/10 text-primary px-2 py-1 -ml-1 my-2 rounded-4xl text-sm self-start sm:self-center lg:p-3 lg:w-47">
            Sept 2022 - May 2027 (Expected)
          </span>
        </div>
        <h5 className="text-lg text-primary mt- mb-2">Toronto Metropolitan University</h5>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-100 mb-4">
          <span>3.7 GPA</span>
          <span>•</span>
          <span>Dean&apos;s List </span>
          <span>•</span>
          <span>Toronto, ON</span>
        </div>
        
        <div className="space-y-4">
          <div className=" bg-light/50 dark:bg-dark/50 rounded-lg">
            <h6 className="font-medium text-primary mb-1">Concentration</h6>
            <p>Software Engineering</p>
          </div>
          
          <div className="bg-light/50 dark:bg-dark/50 rounded-lg">
            <h6 className="font-medium text-primary mb-1">Awards</h6>
            <p>Michael Jr. Julien Scholarship (Academic Excellence & Initiative)</p>
          </div>
          
          <div>
            <h6 className="font-medium text-primary mb-2">Relevant Coursework</h6>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Data Structures",
                "Algorithms",
                "Database Systems",
                "Web Development",
                "Software Engineering",
                "Operating Systems",
                "Computer Networks"
              ].map((course) => (
                <span key={course} className="py-1 bg-light dark:bg-dark/70 text-sm rounded-full">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</motion.div>

          {/* Experience Column - Right Side */}
          <motion.div variants={fadeIn} className="lg:w-2/3">
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Experience
            </h3>
            <div className="space-y-8">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white dark:bg-dark/90 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row justify-between gap-2 mb-2">
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <span className="bg-primary/10 text-primary px-2 py-1 -ml-1 my-2 rounded-full text-sm self-start sm:self-center">
                      {exp.duration}
                    </span>
                  </div>
                  <h5 className="text-lg text-primary mb-4">{exp.company}</h5>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
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