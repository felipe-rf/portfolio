import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div
      className="bg-gray-300/10 backdrop-blur-sm p-8 rounded-3xl"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-row gap-5">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.25 }}
        >
          <Icon className={`${iconColor} mb-4`} size={40} />
        </motion.div>
        <h3 className="text-2xl font-semibold mb-6 align-middle">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            className="px-4 py-2 bg-gray-300/20 rounded-full text-sm font-medium"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            transition={{ duration: 0.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
