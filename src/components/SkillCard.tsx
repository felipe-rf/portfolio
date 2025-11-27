import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  iconColor: string;
}

export default function SkillCard({
  icon: Icon,
  title,
  skills,
  iconColor,
}: SkillCardProps) {
  return (
    <div className="bg-gray-300/10 backdrop-blur-sm p-8 rounded-3xl hover:transform hover:scale-105 transition-all">
      <div className="flex flex-row gap-5">
        <Icon className={`${iconColor} mb-4`} size={40} />
        <h3 className="text-2xl font-semibold mb-6 align-middle">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-gray-300/20 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
