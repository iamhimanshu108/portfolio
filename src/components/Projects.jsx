import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const curveTransition = {
  type: "spring",
  stiffness: 80,
  damping: 18,
  mass: 0.7,
  ease: [0.77, 0, 0.175, 1],
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96, borderRadius: "32px 120px 32px 120px" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    borderRadius: "48px 120px 48px 120px",
    transition: { ...curveTransition, duration: 0.9 },
  },
  whileHover: {
    scale: 1.06,
    borderRadius: "120px 48px 120px 48px",
    boxShadow: "0 8px 64px 0 #6366f1cc, 0 1.5px 6px 0 rgba(0,0,0,0.10)",
    transition: curveTransition,
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -60, rotate: -6 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { ...curveTransition, duration: 1 },
  },
  whileHover: {
    scale: 1.08,
    rotate: 3,
    boxShadow: "0px 8px 32px rgba(99,102,241,0.18)",
    transition: curveTransition,
  },
};

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ ...curveTransition, duration: 1.2 }}
        className="my-10 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center bg-gradient-to-tr from-[#23272f] to-[#6366f1]/10 p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true, amount: 0.2 }}
            style={{ borderRadius: "48px 120px 48px 120px" }}
          >
            <motion.div
              className="w-full lg:w-1/4"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded shadow-lg"
                whileHover={{
                  scale: 1.12,
                  rotate: 6,
                  boxShadow: "0px 12px 40px rgba(99,102,241,0.18)",
                }}
                transition={curveTransition}
              />
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4 p-4"
              initial={{ opacity: 0, x: 100, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                ...curveTransition,
                duration: 1.1,
                delay: 0.2,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 8px 32px rgba(99,102,241,0.10)",
                transition: curveTransition,
              }}
              viewport={{ once: true, amount: 0.2 }}
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
                {project.title}
              </motion.h3>
              <motion.p
                className="mb-4 text-stone-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...curveTransition, delay: 0.3 }}
              >
                {project.description}
              </motion.p>
              <div className="mb-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      ...curveTransition,
                      delay: 0.2 + idx * 0.07,
                    }}
                    whileHover={{
                      scale: 1.13,
                      backgroundColor: "#6366f1",
                      color: "#fff",
                      boxShadow: "0px 4px 16px #6366f1aa",
                      transition: curveTransition,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 cursor-pointer"
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: "#333",
                    color: "#fff",
                    boxShadow: "0px 4px 16px #33333388",
                    transition: curveTransition,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={curveTransition}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 cursor-pointer"
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: "#6366f1",
                    color: "#fff",
                    boxShadow: "0px 4px 16px #6366f1aa",
                    transition: curveTransition,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={curveTransition}
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
