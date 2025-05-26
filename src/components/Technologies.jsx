import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { DiJavascript1 } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiSpringboot, SiDocker, SiMicrodotblog, SiGooglesheets, SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiMysql, SiMongodb, SiPostman, SiGraphql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
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
    scale: 1.28,
    rotate: 14,
    boxShadow: "0px 16px 48px 0px #6366f1cc, 0 2px 8px #f59e42aa",
    backgroundColor: "#23272f",
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

const techLabels = [
  "Java",
  "React",
  "JavaScript",
  "Spring Boot",
  "Docker",
  "Microservices",
  "App Script",
  "TypeScript",
  "Next.js",
  "Redux",
  "HTML5",
  "TailwindCSS",
  "MySQL",
  "MongoDB",
  "GitHub",
  "Postman",
  "GraphQL",
];

const techIcons = [
  <FaJava className="text-7xl text-cyan-400" />,
  <RiReactjsLine className="text-7xl text-cyan-400" />,
  <DiJavascript1 className="text-7xl text-yellow-300" />,
  <SiSpringboot className="text-7xl text-green-500" />,
  <SiDocker className="text-7xl text-blue-400" />,
  <SiMicrodotblog className="text-7xl text-pink-400" />, // Microservices (icon is a placeholder)
  <SiGooglesheets className="text-7xl text-green-400" />, // App Script (Google Sheets icon as closest)
  <SiTypescript className="text-7xl text-blue-500" />,
  <SiNextdotjs className="text-7xl text-black dark:text-white" />,
  <SiRedux className="text-7xl text-purple-400" />,
  <FaHtml5 className="text-7xl text-orange-500" />,
  <SiTailwindcss className="text-7xl text-cyan-400" />,
  <SiMysql className="text-7xl text-blue-600" />,
  <BiLogoMongodb className="text-7xl text-green-600" />,
  <FiGithub className="text-7xl text-white" />,
  <SiPostman className="text-7xl text-orange-400" />,
  <SiGraphql className="text-7xl text-pink-500" />,
];

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
        className="flex flex-wrap items-center justify-center gap-8 mt-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        {techIcons.map((Icon, idx) => (
          <motion.div
            key={idx}
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            className="relative flex flex-col items-center group"
          >
            {Icon}
            {/* Animated label on hover */}
            <motion.span
              className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-[#23272f] text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0, scale: 1.08 }}
              transition={{ ...curveTransition, duration: 0.3, delay: 0.1 }}
              style={{
                fontWeight: 600,
                letterSpacing: "0.04em",
                zIndex: 20,
              }}
            >
              {techLabels[idx]}
            </motion.span>
            {/* Sparkle effect */}
            <motion.span
              className="absolute top-2 right-2 text-yellow-300"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.2, opacity: 1, rotate: 20 }}
              transition={{ ...curveTransition, duration: 0.4 }}
              style={{ pointerEvents: "none", fontSize: "1.2rem" }}
            >
              ✨
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
      {/* Animated divider */}
      <motion.div
        className="mx-auto mt-16 h-1 w-2/3 rounded-full bg-gradient-to-r from-[#6366f1] via-[#23272f] to-[#f59e42]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ ...curveTransition, duration: 1.1, delay: 0.3 }}
        style={{ originX: 0.5 }}
      />
    </div>
  );
};

export default Technologies;