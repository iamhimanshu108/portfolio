import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const curveTransition = {
  type: "spring",
  stiffness: 80,
  damping: 18,
  mass: 0.7,
  ease: [0.77, 0, 0.175, 1],
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const floatAnim = {
  animate: {
    y: [0, -8, 0],
    boxShadow: [
      "0 0 24px 0 #6366f155",
      "0 0 32px 4px #6366f1aa",
      "0 0 24px 0 #6366f155",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  return (
    <div className="border-t-2 border-stone-900 pt-20 overflow-x-hidden">
      <motion.h2
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ ...curveTransition, duration: 1.2 }}
        className="my-10 text-center text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#f59e42]"
        whileHover={{
          scale: 1.05,
          textShadow: "0px 4px 24px #6366f1aa",
          transition: curveTransition,
        }}
      >
        Get in touch
      </motion.h2>
      <motion.div
        variants={floatAnim}
        animate="animate"
        className="text-center tracking-tighter mx-auto max-w-lg rounded-xl bg-[#23272f]/80 p-8 shadow-xl border-2 border-[#6366f1]/30"
        whileHover={{
          boxShadow: "0 0 40px 8px #6366f1cc",
          borderColor: "#f59e42",
          transition: { duration: 0.5 },
        }}
      >
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.p
            variants={{
              initial: { opacity: 0, x: -100 },
              animate: {
                opacity: 1,
                x: 0,
                transition: { ...curveTransition, duration: 1.2 },
              },
            }}
            className="my-4"
          >
            <span className="block text-lg font-semibold text-[#6366f1] mb-1">
              Address
            </span>
            <span className="text-stone-300">{CONTACT.address}</span>
          </motion.p>
          <motion.p
            variants={{
              initial: { opacity: 0, x: -100 },
              animate: {
                opacity: 1,
                x: 0,
                transition: { ...curveTransition, duration: 1.2 },
              },
            }}
            className="my-4"
          >
            <span className="block text-lg font-semibold text-[#f59e42] mb-1">
              Phone
            </span>
            <motion.a
              href={`tel:${CONTACT.phoneNo.replace(/\s+/g, "")}`}
              className="text-stone-300 hover:text-[#6366f1] transition-colors font-medium"
              whileHover={{
                scale: 1.12,
                color: "#6366f1",
                textShadow: "0px 2px 16px #6366f1aa",
                transition: curveTransition,
              }}
              transition={curveTransition}
            >
              {CONTACT.phoneNo}
            </motion.a>
          </motion.p>
          <motion.a
            href={`mailto:${CONTACT.email}`}
            className="border-b text-lg font-semibold inline-block mt-6 text-stone-300 hover:text-[#f59e42] transition-colors"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { ...curveTransition, duration: 1.2 },
              },
            }}
            whileHover={{
              scale: 1.18,
              color: "#f59e42",
              backgroundColor: "#23272f",
              boxShadow: "0px 4px 24px #f59e42aa",
              borderRadius: "8px",
              padding: "0.25rem 1rem",
              transition: curveTransition,
            }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            {CONTACT.email}
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
