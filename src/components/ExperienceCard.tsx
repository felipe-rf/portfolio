import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export interface Experience {
  title: string;
  institution: string;
  period: string;
  description: string;
  type: "education" | "work";
  location?: string;
  achievements?: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  icon: LucideIcon;
  iconColor: string;
}

export default function ExperienceCard({
  experience,
  icon: Icon,
  iconColor,
}: ExperienceCardProps) {
  return (
    <motion.div
      className="bg-gray-300/10 backdrop-blur-sm p-6 rounded-2xl"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.1 },
      }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className={`${iconColor} mt-1 shrink-0`}
          whileHover={{
            scale: 1.2,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.25 },
          }}
        >
          <Icon size={24} />
        </motion.div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-semibold text-white">
              {experience.title}
            </h3>
            <span className="text-sm text-gray-400 mt-1 sm:mt-0">
              {experience.period}
            </span>
          </div>
          <h4 className="text-lg font-medium text-purple-300 mb-1">
            {experience.institution}
          </h4>
          {experience.location && (
            <p className="text-sm text-gray-400 mb-3">{experience.location}</p>
          )}
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {experience.description}
          </p>
          {experience.achievements && experience.achievements.length > 0 && (
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h5 className="text-sm font-medium text-gray-200">
                Key Achievements:
              </h5>
              <ul className="list-disc list-inside space-y-1">
                {experience.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="text-xs text-gray-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
