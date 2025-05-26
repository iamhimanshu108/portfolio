// import profilePic from "../assets/raviKumarProfile.webp"
import profilePic from "../assets/hk1.jpg";
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
            className="flex justify-center lg:p-8"
            whileHover={{ scale: 1.06, rotate: 4 }}
            whileTap={{ scale: 0.98, rotate: -2 }}
            transition={curveTransition}
          >
            <motion.img
              src={profilePic}
              alt="Himashu"
              className="border border-stone-900 rounded-3xl shadow-xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0, rotate: 10 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ ...curveTransition, delay: 1.2 }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: "0px 12px 40px rgba(0,0,0,0.25)",
              }}
            />
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
              Himanshu
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
