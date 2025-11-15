import { motion } from "framer-motion";
import gusImg from "../assets/gus.svg";
import nasaImg from "../assets/nasa.jpg"
import UiUxImg from "../assets/ui-ux.png"
const projects = [
  { 
    title: "Launch Banderogus", 
    img: gusImg,
    link: "https://github.com/Afa99/BanderoGusak" 
  },
  { 
    title: "UI_UX", 
    img: UiUxImg,
    link: "https://github.com/Afa99/UI-UX" 
  },
  { 
    title: "Space Flight App", 
    img: nasaImg,
    link: "https://github.com/Afa99/SpaceFlightApp" 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p) => (
          <motion.a
            key={p.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href={p.link}
            target="_blank"
            className="rounded-xl shadow-xl bg-white dark:bg-gray-800 overflow-hidden block"
          >
            <img src={p.img} className="w-full h-48 object-cover" />
            <div className="p-5 font-semibold text-lg">{p.title}</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
