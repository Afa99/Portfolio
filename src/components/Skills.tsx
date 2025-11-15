import { motion } from "framer-motion";

const skills = ["React", "TypeScript", "JavaScript", "Tailwind", "Git", "Vite"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="py-6 rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 text-xl font-medium dark:text-white"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
