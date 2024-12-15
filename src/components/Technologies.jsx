import { RiReactjsLine } from "react-icons/ri";
import {  motion } from "framer-motion";
import { DiJavascript1 } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { SiPostman } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";


const iconVariants = (duration) => ({
    initial: {y: -100},
    animate: {
        y : [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
   <div className="pb-24">
    <motion.h2 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
    className="mt-20 text-center text-4xl    ">Technologies</motion.h2>
    < motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
    className=" flex flex-wrap items-center justify-center gap-4 mt-5 " >
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         >
            <FaJava className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         >
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         >
            <DiJavascript1 className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         >
            <SiSpringboot  className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         >
            <FaHtml5 className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         >
            <SiMysql className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         >
            < FiGithub className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         >
            < RiTailwindCssLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         >
            < SiPostman className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         >
            < BiLogoMongodb className="text-7xl text-cyan-400" />
        </motion.div>
    </ motion.div>
   </div>
  )
}
export default Technologies