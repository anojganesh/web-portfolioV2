"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {


  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (

    
    <motion.nav
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white/90 dark:bg-dark/95 shadow-lg backdrop-blur-xs" : "py-5"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center ml-5 mr-5">
          <Link href="/" className="text-2xl font-bold text-primary">
            Anoj Ganesh
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-dark dark:text-light hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-dark dark:text-light hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-dark dark:text-light hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-dark dark:text-light hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle/>
            
          </div>


  
  <section className="MOBILE-MENU flex items-center gap-4 md:hidden">
  <ThemeToggle/>
    <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen(prev => !prev)}>
      <span className="block h-0.5 w-8 animate-pulse bg-gray-400 dark:bg-gray-300"></span>
      <span className="block h-0.5 w-8 animate-pulse bg-gray-400 dark:bg-gray-300"></span>
      <span className="block h-0.5 w-8 animate-pulse bg-gray-400 dark:bg-gray-300"></span>
    </div>

    <div className={isNavOpen ? " bg-black bg-gradient-to-br from-primary/20 to-secondary/30 showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 animate-pulse color-gray-500 dark:color-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#about" onClick={() => setIsNavOpen(false)} className="text-dark dark:text-light hover:text-primary transition-colors">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#experience" onClick={() => setIsNavOpen(false)} className="text-dark dark:text-light hover:text-primary transition-colors">Experience</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#projects" onClick={() => setIsNavOpen(false)} className="text-dark dark:text-light hover:text-primary transition-colors">Projects</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#contact" onClick={() => setIsNavOpen(false)} className="text-dark dark:text-light hover:text-primary transition-colors">Contact</a>
              </li>

            </ul>
          </div>
        </section>
        </div>
        
        {/* Convert to tailwind eventually*/}
        <style>{` 
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </motion.nav>
  );
};

export default Navbar;