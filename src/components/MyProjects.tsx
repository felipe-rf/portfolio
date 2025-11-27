import { Code, Gamepad2, Palette } from "lucide-react";
import type { ProjectsData } from "../types/project";
import ProjectCard from "./ProjectCard";

interface MyProjectsProps {
  projects: ProjectsData;
}

export default function MyProjects({ projects }: MyProjectsProps) {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        {/* Frontend Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            <Code className="text-purple-400" />
            Front-end Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.frontend.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                gradientFrom="purple-500/20"
                gradientTo="pink-500/20"
              />
            ))}
          </div>
        </div>

        {/* Game Dev Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            <Gamepad2 className="text-pink-400" />
            Game Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.gamedev.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                gradientFrom="pink-500/20"
                gradientTo="red-500/20"
              />
            ))}
          </div>
        </div>

        {/* Design Projects */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            <Palette className="text-blue-400" />
            UX/UI Design
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.design.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                gradientFrom="blue-500/20"
                gradientTo="cyan-500/20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
