import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased relative min-h-screen">
      {/* Animated Gradient & Glow Background */}
      <motion.div
        className="fixed inset-0 -z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Subtle grid overlay */}
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          {/* Animated moving gradient blobs */}
          <motion.div
            className="absolute left-[10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_300px_at_50%_300px,#6366f1bb,#0000)] blur-2xl opacity-60"
            animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_200px_at_50%_200px,#f59e4288,#0000)] blur-2xl opacity-40"
            animate={{ x: [0, -60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] mx-auto rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"
            animate={{ scale: [1, 1.04, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-8"></div>
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
