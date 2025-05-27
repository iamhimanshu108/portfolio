import profilePic from "../assets/image1.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const curveTransition = {
  type: "spring",
  stiffness: 80,
  damping: 18,
  mass: 0.7,
  ease: [0.77, 0, 0.175, 1], // cubic-bezier for a nice curve
};

const Hero = () => {
  return (
    <motion.div
      className="pb-4 lg:mb-36"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...curveTransition, duration: 1.2 }}
    >
      <motion.div
        className="flex flex-wrap lg:flex-row-reverse"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.98, y: 40 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { staggerChildren: 0.3, delayChildren: 0.2, ...curveTransition },
          },
        }}
      >
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ y: 60, opacity: 0, rotate: -6 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ ...curveTransition, delay: 0.5 }}
        >
          <motion.div
            className="flex justify-center lg:p-8 relative"
            whileHover={{ scale: 1.06, rotate: 4 }}
            whileTap={{ scale: 0.98, rotate: -2 }}
            transition={curveTransition}
          >
            {/* Animated Glow Behind Profile Pic */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: 340,
                height: 340,
                zIndex: 0,
                borderRadius: "50%",
                background: "radial-gradient(circle at 50% 50%, #6366f1bb 0%, #f59e4288 60%, transparent 100%)",
                filter: "blur(32px)",
                opacity: 0.7,
              }}
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.7, 1, 0.7],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={profilePic}
              alt="Himanshu"
              className="relative z-10 border-4 border-[#6366f1] bg-white/10 rounded-full shadow-2xl ring-4 ring-[#f59e42]/30 hover:ring-[#6366f1]/60 transition-all duration-500"
              width={320}
              height={320}
              initial={{ x: 100, opacity: 0, rotate: 10, scale: 0.92 }}
              animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
              transition={{ ...curveTransition, delay: 1.2 }}
              whileHover={{
                scale: 1.12,
                rotate: 6,
                boxShadow: "0px 16px 48px 0px #6366f1bb, 0 2px 8px #f59e42aa",
                filter: "brightness(1.1) saturate(1.2)",
              }}
              whileTap={{
                scale: 0.96,
                rotate: -4,
                filter: "brightness(0.95) saturate(0.9)",
              }}
            />
            {/* Floating emoji or icon with bounce animation */}
            <motion.div
              className="absolute right-0 top-0 z-20"
              initial={{ y: -30, opacity: 0, scale: 0.7, rotate: -20 }}
              animate={{
                y: [0, -10, 0, 10, 0],
                opacity: 1,
                scale: 1,
                rotate: [0, 12, -12, 0],
              }}
              transition={{
                ...curveTransition,
                delay: 2.1,
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                fontSize: "2.5rem",
                filter: "drop-shadow(0 2px 12px #6366f1cc)",
                pointerEvents: "none",
              }}
            >
              🚀
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ y: -60, opacity: 0, rotate: 6 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ ...curveTransition, delay: 0.7 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              whileHover={{
                scale: 1.12,
                color: "#6366f1",
                rotate: -2,
                textShadow: "0px 4px 24px #6366f1aa",
              }}
              transition={curveTransition}
            >
              Himanshu Kumar
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-l from-stone-600 bg-clip-text text-3xl tracking-tight"
              whileHover={{
                scale: 1.08,
                color: "#f59e42",
                rotate: 2,
                textShadow: "0px 2px 16px #f59e42aa",
              }}
              transition={curveTransition}
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              initial={{ opacity: 0, y: 30, skewY: 6 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ ...curveTransition, delay: 1.2 }}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 shadow-md"
              whileHover={{
                scale: 1.15,
                backgroundColor: "#6366f1",
                color: "#fff",
                boxShadow: "0px 8px 32px rgba(99,102,241,0.2)",
                rotate: -3,
              }}
              whileTap={{ scale: 0.95, rotate: 3 }}
              transition={curveTransition}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
