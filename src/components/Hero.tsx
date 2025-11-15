import { motion } from "framer-motion";
import resumeImg from "../assets/resume.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-6 pt-32"
    >
      {/* soft background lighting */}
      <div className="absolute inset-0 w-full
 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 pointer-events-none"></div>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col items-center text-center"
      >
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.2 }}
          className="w-40 h-40 rounded-full overflow-hidden border border-gray-300/40 dark:border-gray-700 shadow-xl bg-white/20 backdrop-blur-xl"
        >
          <img
            src={resumeImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <h1 className="mt-10 text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Hi, I’m{" "}
          <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Pavlo Triska
          </span>
        </h1>

        {/* Role */}
        <p className="text-2xl text-gray-600 dark:text-gray-300 mt-4">
          Frontend Developer • React • TypeScript • UI/UX
        </p>

        {/* Subline */}
       <p className="mt-5 text-xl text-gray-500 dark:text-gray-400 max-w-xl">
  A Frontend Developer crafting fast, modern and visually refined web interfaces.
  I build user-focused experiences with React, TypeScript and clean UI/UX principles — 
  blending performance, clarity and design.
</p>
    

        {/* Button */}
        <motion.a
          href="#projects"
          className="mt-10 px-14 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl text-lg font-medium shadow-lg hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work →
        </motion.a>
      </motion.div>
    </section>
  );
}
