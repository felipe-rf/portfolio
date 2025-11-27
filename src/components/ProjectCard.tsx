import type { Project } from "../types/project";

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
    <div
      className={`bg-gray-300/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all group ${
        project.url ? "cursor-pointer" : ""
      }`}
      onClick={handleCardClick}
    >
      <div
        className={`h-48 bg-linear-to-br from-${gradientFrom} to-${gradientTo} flex items-center justify-center overflow-hidden`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-300/20 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
