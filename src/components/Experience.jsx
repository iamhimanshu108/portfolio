import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion";

const curveTransition = {
  type: "spring",
  stiffness: 80,
  damping: 18,
  mass: 0.7,
  ease: [0.77, 0, 0.175, 1],
};

const cardVariants = {
  hidden: { opacity: 0, x: -120, borderRadius: "32px 120px 32px 120px" },
  visible: {
    opacity: 1,
    x: 0,
    borderRadius: "48px 120px 48px 120px",
    transition: { ...curveTransition, duration: 1 },
  },
  whileHover: {
    scale: 1.04,
    borderRadius: "120px 48px 120px 48px",
    // Full-length shadow for more depth
    boxShadow: "0 8px 64px 0 #6366f1cc, 0 1.5px 6px 0 rgba(0,0,0,0.10)",
    transition: curveTransition,
  },
};

const yearVariants = {
  hidden: { opacity: 0, x: -60, rotate: -8 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { ...curveTransition, duration: 0.8 },
  },
};

const detailVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { ...curveTransition, duration: 0.8 },
  },
};

const techVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { ...curveTransition, delay: 0.2 + i * 0.07 },
  }),
  whileHover: {
    scale: 1.13,
    backgroundColor: "#6366f1",
    color: "#fff",
    boxShadow: "0px 4px 16px #6366f1aa",
    transition: curveTransition,
  },
};

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ ...curveTransition, duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center bg-gradient-to-tr from-[#23272f] to-[#6366f1]/10 p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true, amount: 0.2 }}
            style={{ borderRadius: "48px 120px 48px 120px" }}
          >
            <motion.div
              className="w-full lg:w-1/4 flex items-center justify-center"
              variants={yearVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="text-lg font-bold text-[#6366f1] bg-white/10 px-6 py-4 rounded-full shadow"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ ...curveTransition, duration: 0.7, delay: 0.2 }}
              >
                {experience.year}
              </motion.div>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4 p-4"
              variants={detailVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 8px 32px rgba(99,102,241,0.10)",
                transition: curveTransition,
              }}
            >
              <motion.h3
                className="mb-2 font-semibold text-2xl"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...curveTransition, delay: 0.2 }}
                whileHover={{
                  color: "#f59e42",
                  scale: 1.06,
                  textShadow: "0px 2px 16px #f59e42aa",
                  transition: curveTransition,
                }}
              >
                {experience.role} -{" "}
                <span className="text-stone-400">{experience.company}</span>
              </motion.h3>
              <motion.p
                className="mb-4 text-stone-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...curveTransition, delay: 0.3 }}
              >
                {experience.description}
              </motion.p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <motion.span
                    className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                    key={i}
                    variants={techVariants}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="whileHover"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience;