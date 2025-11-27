import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
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

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    backgroundColor: "rgba(229, 231, 235, 1)",
    transition: { duration: 0.1 },
  };

  const buttonTap = {
    scale: 0.95,
  };

  return (
    <motion.section
      id="contact"
      className="relative py-12 md:py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 className="text-5xl font-bold mb-6" variants={titleVariants}>
          Let's Work Together
        </motion.h2>
        <motion.p
          className="text-xl text-gray-200 mb-8 md:mb-12"
          variants={subtitleVariants}
        >
          I'm open for new oportunities and projects, feel free to reach out!
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          variants={containerVariants}
        >
          <motion.a
            href="https://github.com/felipe-rf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gray-300/80 backdrop-blur-sm text-gray-900 rounded-full font-medium"
            variants={buttonVariants}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <Github size={20} />
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/felipe-rodrigo-ferreira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gray-300/80 backdrop-blur-sm text-gray-900 rounded-full font-medium"
            variants={buttonVariants}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:felipeferreira.rodrigo@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-gray-300/80 backdrop-blur-sm text-gray-900 rounded-full font-medium"
            variants={buttonVariants}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <Mail size={20} />
            Email
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
