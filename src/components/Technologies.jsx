import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { DiJavascript1 } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { SiPostman } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

// Curve transition like Hero section
const curveTransition = {
  type: "spring",
  stiffness: 80,
  damping: 18,
  mass: 0.7,
  ease: [0.77, 0, 0.175, 1],
};

const iconVariants = (duration) => ({
  initial: { y: -100, opacity: 0, scale: 0.8, rotate: -10 },
  animate: {
    y: [0, -12, 0, 12, 0], // smoother up-down "shaking"
    opacity: 1,
    scale: 1,
    rotate: [0, 6, -6, 0], // subtle rotation
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
  whileHover: {
    scale: 1.22,
    rotate: 10,
    boxShadow: "0px 12px 40px rgba(99,102,241,0.22)",
    transition: curveTransition,
  },
  whileTap: {
    scale: 0.92,
    rotate: -10,
    transition: curveTransition,
  },
});

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...curveTransition, staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ ...curveTransition, duration: 1.2 }}
        className="mt-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mt-5"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <FaJava className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <DiJavascript1 className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <SiSpringboot className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <FaHtml5 className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <SiMysql className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <FiGithub className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <RiTailwindCssLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <SiPostman className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <BiLogoMongodb className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;