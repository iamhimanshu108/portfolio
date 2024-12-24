import { FaLinkedinIn  } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import logo from "../assets/hk1.png";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

const Navbar = () => {
  return (
   <nav className="flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={120} height={120} alt="Logo" />
        </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a href="https://www.linkedin.com/in/iamhimanshu108/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google">
               <FaLinkedinIn  /> 
             
        </a>

        <a href="https://github.com/iamhimanshu108" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google">
               <FiGithub /> 
             
        </a>
        

        <a href="https://x.com/iamhimanshu108" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter">
               <FaXTwitter />
             
        </a>
        <a href="https://leetcode.com/u/iamhimanshu108/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter">
               <TbBrandLeetcode />
             
        </a>
        
    </div>
   </nav>
  )
}

export default Navbar