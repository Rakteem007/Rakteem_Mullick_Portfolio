import React from "react";
import { RakteemLogo } from "../assets";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 transition-all duration-300">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-shrink-0 items-center group"
      >
        <img
          className="mx-2 w-10 group-hover:text-cyan-400 group-hover:shadow-neon-cyan-glow"
          src={RakteemLogo}
          alt="Logo"
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="m-8 flex items-center justify-center gap-4 text-2xl"
      >
        <a
          href="https://www.linkedin.com/in/rakteem-mullick-2738701a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaLinkedin className="transition-all duration-300 group-hover:text-cyan-400 group-hover:shadow-neon-cyan-glow" />
        </a>
        <a
          href="https://github.com/Rakteem007"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaGithub className="transition-all duration-300 group-hover:text-cyan-400 group-hover:shadow-neon-cyan-glow" />
        </a>
        <a
          href="https://www.instagram.com/mullick_rakteem2002/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaInstagram className="transition-all duration-300 group-hover:text-cyan-400 group-hover:shadow-neon-cyan-glow" />
        </a>
        <a
          href="https://x.com/Rakteem007"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaSquareXTwitter className="transition-all duration-300 group-hover:text-cyan-400 group-hover:shadow-neon-cyan-glow" />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
