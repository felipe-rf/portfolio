import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl w-full text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center mb-8">
            {/* Profile Image */}
            <motion.div
              className="shrink-0 order-1 md:order-0"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
            >
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl outline-10 outline-white/70 bg-gray-300/80 backdrop-blur-sm overflow-hidden">
                <img
                  src="/portfolio/HandsomeGuy.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="flex flex-col lg:items-start text-left sm:items-center"
              variants={itemVariants}
            >
              <motion.h1
                className="text-4xl justify-start md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white"
                variants={itemVariants}
              >
                Felipe Ferreira
              </motion.h1>
              <motion.div
                className="flex flex-wrap gap-2 md:gap-3 justify-center mb-6 md:mb-8"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  className="px-4 py-2 md:px-6 md:py-3 bg-gray-300/80 backdrop-blur-sm rounded-full text-gray-900 font-medium text-sm md:text-base"
                >
                  Front-End
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  className="px-4 py-2 md:px-6 md:py-3 bg-gray-300/80 backdrop-blur-sm rounded-full text-gray-900 font-medium text-sm md:text-base"
                >
                  DevOps
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  className="px-4 py-2 md:px-6 md:py-3 bg-gray-300/80 backdrop-blur-sm rounded-full text-gray-900 font-medium text-sm md:text-base"
                >
                  GameDev
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl md:max-w-3xl mx-auto px-4 md:px-0">
              I'm a Software Engineering student with knowledge about building
              modern web applications and fun game experiences. I enjoy working
              across the full stack: from intuitive front-end interfaces to
              scalable back-end solutions and DevOps workflows.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 rounded-2xl bg-gray-300/80 backdrop-blur-sm flex items-center justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} className="text-gray-900" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
