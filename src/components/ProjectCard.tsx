import type { Project } from "../types/project";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function ProjectCard({
  project,
  gradientFrom = "purple-500/20",
  gradientTo = "pink-500/20",
}: ProjectCardProps) {
  const handleCardClick = () => {
    if (project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      className={`bg-gray-300/10 backdrop-blur-sm rounded-2xl overflow-hidden group ${
        project.url ? "cursor-pointer" : ""
      }`}
      onClick={handleCardClick}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`h-48 bg-linear-to-br from-${gradientFrom} to-${gradientTo} flex items-center justify-center overflow-hidden`}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70"
          whileHover={{
            opacity: 1,
            scale: 1.1,
            transition: { duration: 0.15 },
          }}
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 bg-gray-300/20 rounded-full text-xs"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
