"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl ml-5 font-bold text-primary">
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

          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;