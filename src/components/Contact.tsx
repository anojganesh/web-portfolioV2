"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";

const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="section scroll-mt-20 bg-light dark:bg-dark/80 bg-gradient-to-br from-primary/5 to-secondary/20"
      id="contact"
    >
      <div className="container">
        <motion.h2 variants={fadeIn} className="section-title">
          Get In Touch
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={fadeIn}
            className="bg-white dark:bg-dark p-8 rounded-lg shadow-md"
          >
            <p className="text-center mb-8">
              I&apos;m currently looking for internship opportunities. Whether you
              have a question or just want to say hi, I&apos;ll do my best to get back
              to you!
            </p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-dark/50 dark:border-gray-600"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-dark/50 dark:border-gray-600"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-primary focus:border-black dark:bg-dark/50 dark:border-gray-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 border border-gray-500 bg-primary text-black rounded-lg hover:bg-primary/90 hover:border-primary transition-colors shadow-md cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            <a
              href="mailto:anojganesh@gmail.com"
              className="flex items-center gap-2 text-dark dark:text-light hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              anojganesh@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/anojganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark dark:text-light hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>

            <a
              href="https://github.com/anojganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark dark:text-light hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;