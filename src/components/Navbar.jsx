import { FaLinkedin } from "react-icons/fa";

import logo from "../assets/hk1.png";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

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
               <FaLinkedin /> 
             
        </a>

        <a href="https://github.com/iamhimanshu108" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google">
               <FaGithub /> 
             
        </a>
        

        <a href="https://x.com/iamhimanshu108" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter">
               <FaXTwitter />
             
        </a>
        
    </div>
   </nav>
  )
}

export default Navbar