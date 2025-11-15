import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl text-center bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/20"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Let's build something great together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          
          {/* Email */}
          <motion.a
            href="mailto:ancumida99@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 transition"
          >
            <Mail size={22} />
            <span className="text-lg font-medium">Email</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Afa99"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-purple-600 hover:text-purple-600 transition"
          >
            <Github size={22} />
            <span className="text-lg font-medium">GitHub</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/pavlo-triska-88a872257/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
          >
            <Linkedin size={22} />
            <span className="text-lg font-medium">LinkedIn</span>
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
}
