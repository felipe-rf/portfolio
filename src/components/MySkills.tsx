import { Code, Gamepad2, Server } from "lucide-react";
import SkillCard from "./SkillCard";

const skillsData = [
  {
    icon: Code,
    title: "Front-end",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Figma",
    ],
    iconColor: "text-purple-400",
  },
  {
    icon: Server,
    title: "DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Github Actions",
    ],
    iconColor: "text-blue-400",
  },
  {
    icon: Gamepad2,
    title: "Game Dev",
    skills: ["Godot", "Unity", "C#", "C++", "Pixel Art", "Game Design"],
    iconColor: "text-pink-400",
  },
];

export default function MySkills() {
  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <SkillCard
              key={index}
              icon={skillCategory.icon}
              title={skillCategory.title}
              skills={skillCategory.skills}
              iconColor={skillCategory.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
