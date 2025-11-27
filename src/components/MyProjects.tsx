import { Code, Gamepad2, Palette } from "lucide-react";
import { motion } from "framer-motion";
import type { ProjectsData } from "../types/project";
import ProjectCard from "./ProjectCard";

interface MyProjectsProps {
  projects: ProjectsData;
}

export default function MyProjects({ projects }: MyProjectsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="relative py-12 md:py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-8 md:mb-12 text-center"
          variants={titleVariants}
        >
          Featured Projects
        </motion.h2>

        {/* Frontend Projects */}
        <motion.div className="mb-10 md:mb-16" variants={sectionVariants}>
          <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            <Code className="text-purple-400" />
            Front-end Development
          </h3>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {projects.frontend.map((project, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <ProjectCard
                  project={project}
                  gradientFrom="purple-500/20"
                  gradientTo="pink-500/20"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Game Dev Projects */}
        <motion.div className="mb-10 md:mb-16" variants={sectionVariants}>
          <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            <Gamepad2 className="text-pink-400" />
            Game Development
          </h3>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {projects.gamedev.map((project, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <ProjectCard
                  project={project}
                  gradientFrom="pink-500/20"
                  gradientTo="red-500/20"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Design Projects */}
        <motion.div variants={sectionVariants}>
          <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            <Palette className="text-blue-400" />
            UX/UI Design
          </h3>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {projects.design.map((project, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <ProjectCard
                  project={project}
                  gradientFrom="blue-500/20"
                  gradientTo="cyan-500/20"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
