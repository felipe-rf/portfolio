import { Code, Gamepad2, Server } from "lucide-react";
import { motion } from "framer-motion";
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
    icon: Code,
    title: "Back-end",
    skills: ["Java", "SpringBoot", "PostgreSQL", "Python", "Node.js"],
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
      id="skills"
      className="relative py-12 md:py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-8 md:mb-12 text-center"
          variants={titleVariants}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {skillsData.map((skillCategory, index) => (
            <motion.div key={index} variants={cardVariants}>
              <SkillCard
                icon={skillCategory.icon}
                title={skillCategory.title}
                skills={skillCategory.skills}
                iconColor={skillCategory.iconColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
