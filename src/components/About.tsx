import { motion } from "framer-motion";
import resumeImg from "../assets/resume.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>

      <div className="grid md:grid-cols-2 items-center gap-12">
        <motion.img
          src= {resumeImg}
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
        Hi, I’m Pavlo Triska
A Frontend Developer specializing in scalable UI architecture, reusable components, and user-first interactions.
I build performant React applications using TypeScript, optimize UX flows, and turn complex problems into simple solutions.
          <br /><br />
         My Tech Stack

I build modern web interfaces using React, TypeScript, Vite, and Tailwind CSS — a clean, high-performance stack that helps me create fast, scalable, and beautifully designed user experiences.
        </motion.p>
      </div>
    </section>
  );
}
