import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaGithub as FaGithub6, FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { motion } from "framer-motion";

const curveTransition = {
  type: "spring",
  stiffness: 80,
  damping: 18,
  mass: 0.7,
  ease: [0.77, 0, 0.175, 1],
};

const iconVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...curveTransition, delay: 0.2 + i * 0.15 },
  }),
};

const Navbar = () => {
  return (
    <motion.nav
      className="flex items-center justify-between py-6"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...curveTransition, duration: 0.8 }}
    >
      <motion.div
        className="flex flex-shrink-0 items-center"
        initial={{ opacity: 0, x: -40, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ ...curveTransition, delay: 0.2 }}
      >
        <a href="/" aria-label="Home">
          <motion.div
            className="mx-2 flex items-center justify-center h-[60px] w-[60px] rounded-full bg-gradient-to-tr from-[#6366f1] to-[#f59e42] shadow-lg"
            initial={{ scale: 0.8, rotate: -12, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            whileHover={{
              scale: 1.12,
              rotate: 8,
              boxShadow: "0px 8px 32px #6366f1aa",
              background: "linear-gradient(120deg, #6366f1 60%, #f59e42 100%)",
              transition: curveTransition,
            }}
            transition={{ ...curveTransition, delay: 0.4 }}
            style={{
              fontFamily: "monospace, sans-serif",
              fontWeight: 900,
              fontSize: "2rem",
              letterSpacing: "0.1em",
              color: "#fff",
              userSelect: "none",
            }}
          >
            HK
          </motion.div>
        </a>
      </motion.div>
      <motion.div
        className="m-8 flex items-center justify-center gap-4 text-2xl"
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="https://www.linkedin.com/in/iamhimanshu108/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          custom={0}
          variants={iconVariants}
          whileHover={{
            scale: 1.2,
            color: "#0077b5",
            rotate: -8,
            textShadow: "0px 2px 16px #0077b588",
          }}
          transition={curveTransition}
        >
          <FaLinkedinIn />
        </motion.a>
        <motion.a
          href="https://github.com/iamhimanshu108"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          custom={1}
          variants={iconVariants}
          whileHover={{
            scale: 1.2,
            color: "#333",
            rotate: 8,
            textShadow: "0px 2px 16px #33333388",
          }}
          transition={curveTransition}
        >
          <FiGithub />
        </motion.a>
        <motion.a
          href="https://x.com/iamhimanshu108"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          custom={2}
          variants={iconVariants}
          whileHover={{
            scale: 1.2,
            color: "#1da1f2",
            rotate: -8,
            textShadow: "0px 2px 16px #1da1f288",
          }}
          transition={curveTransition}
        >
          <FaXTwitter />
        </motion.a>
        <motion.a
          href="https://leetcode.com/u/iamhimanshu108/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          custom={3}
          variants={iconVariants}
          whileHover={{
            scale: 1.2,
            color: "#f59e42",
            rotate: 8,
            textShadow: "0px 2px 16px #f59e4288",
          }}
          transition={curveTransition}
        >
          <TbBrandLeetcode />
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;