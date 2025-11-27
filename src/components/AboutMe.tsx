import { motion } from "framer-motion";

export default function AboutMe() {
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
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const paragraphVariants = {
    hidden: { y: 20, opacity: 0 },
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
      id="about"
      className="relative flex items-center justify-center px-6 py-12 md:py-20 lg:py-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-8 md:mb-12 text-center"
          variants={titleVariants}
        >
          About Me
        </motion.h2>
        <motion.div
          className="bg-gray-300/10 backdrop-blur-sm rounded-3xl p-12 flex flex-col items-center text-center gap-6"
          variants={cardVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <motion.p
            className="text-xl text-gray-200 leading-relaxed mb-6 max-w-3xl"
            variants={paragraphVariants}
          >
            I'm Felipe, a 20-year-old developer from Brazil, passionate about
            music, video games, and game development. I love technology and
            problem-solving, and have built personal projects using engines like
            Godot. I'm a fast learner with hands-on experience in front-end
            development and DevOps tools, adapting quickly to new technologies
            and delivering efficient, well-structured solutions.
          </motion.p>
          <motion.p
            className="text-xl text-gray-200 leading-relaxed max-w-3xl"
            variants={paragraphVariants}
          >
            My journey started with game development in 2018. Since then, I've
            expanded my skills to include front-end web development and DevOps
            practices. I'm currently pursuing a degree in Software Engineering,
            which has further enhanced my understanding of software development
            principles and best practices. I also work on independent games as a
            hobby, combining my love for coding and creativity.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
