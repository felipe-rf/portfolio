import { GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import ExperienceCard, { type Experience } from "./ExperienceCard";

interface ExperienceProps {
  experiences: {
    education: Experience[];
    work: Experience[];
  };
}

export default function MyExperience({ experiences }: ExperienceProps) {
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="experience"
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
          Experience & Education
        </motion.h2>

        {/* Education Section */}
        {experiences.education.length > 0 && (
          <motion.div className="mb-10 md:mb-16" variants={sectionVariants}>
            <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="text-blue-400" />
              Education
            </h3>
            <motion.div className="space-y-6" variants={containerVariants}>
              {experiences.education.map((experience, idx) => (
                <motion.div key={idx} variants={cardVariants}>
                  <ExperienceCard
                    experience={experience}
                    icon={GraduationCap}
                    iconColor="text-blue-400"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Work Experience Section */}
        {experiences.work.length > 0 && (
          <motion.div variants={sectionVariants}>
            <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="text-green-400" />
              Work Experience
            </h3>
            <motion.div className="space-y-6" variants={containerVariants}>
              {experiences.work.map((experience, idx) => (
                <motion.div key={idx} variants={cardVariants}>
                  <ExperienceCard
                    experience={experience}
                    icon={Briefcase}
                    iconColor="text-green-400"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
