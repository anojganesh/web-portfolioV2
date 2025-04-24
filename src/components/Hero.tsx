"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/20"
      id="home"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            variants={fadeIn}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Anoj</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Aspiring Developer
            </h2>

            {/* Image section for smaller, mobile screens */}
            <motion.div
            variants={fadeIn}
            className="md:w-1/2 flex justify-center md:hidden pb-8 pt-2"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-black rounded-full overflow-hidden border-2 border-primary shadow-lg">
                <Image
                  src= "/images/Portrait.jpg"
                  alt= "Anoj Ganesh"
                  fill
                  className= "object-cover"
                />
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-lg"></span>
                </div>
              </div>
            </motion.div>


            <p className="text-lg mb-8 max-w-lg">
              I'm passionate about building exceptional digital experiences.
              Currently seeking internship opportunities to grow my skills and
              contribute to meaningful projects.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {/*
              <Link
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </Link>
              */}
              <Link
                href="/Fullstack_Resume.pdf"
                target="_blank"
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                View Resume
              </Link>
            </div>
          </motion.div>
            
          {/* Image section for larger screens */}
          <motion.div
            variants={fadeIn}
            className="md:w-1/2 flex justify-center hidden md:flex"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-black rounded-full overflow-hidden border-2 border-primary shadow-lg">
              <Image
                src= "/images/Portrait.jpg"
                alt= "Anoj Ganesh"
                fill
                className= "object-cover"
              />
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-lg"></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;