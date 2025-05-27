import project1 from "../assets/projects/todo.png";
import project2 from "../assets/projects/password.png";
import project3 from "../assets/projects/rockpaper.png";


export const HERO_CONTENT = `"As a passionate Java Full Stack Developer, I excel in building robust and scalable web applications using modern technologies. My expertise spans front-end frameworks like React for creating dynamic user interfaces, and powerful back-end solutions with Java, Spring Boot, MySQL, and MongoDB. I am committed to delivering high-quality, efficient, and maintainable code across the entire development stack."`;



export const EXPERIENCES = [
  {
    year: "MAY-2025 - PRESENT",
    role: "Software Engineer",
    company: "BizSkill",
    description: `Contributing to front-end development and Google Apps Script solutions for B2B operations in mid-sized businesses. I provide automation for daily tasks, streamline business processes, and support ongoing company projects.`,
    technologies: ["Javascript", "HTML", "CSS", "Google AppScript", "Google Sheets","Google App Sheets API"],
  },
  {
    year: "DEC-2024 - JAN-2025",
    role: "Full Stack Developer intern",
    company: "Unified Mentors",
    description: `During this internship, I gained hands-on experience in both front-end and back-end technologies. Additionally, I completed two projects during this period.`,
    technologies: ["Javascript", "React.js", "Java", "MYSQL", "Spring Boot"],
  },
  
 
  {
    year: "MAY-2024 - JUNE-2024",
    role: "Frontend  Intern",
    company: "Infotech",
    description: `During this internship, I gained hands-on experience in both front-end and back-end technologies. Additionally, I completed two projects during this period.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "Todo App",
    image: project1,
    description:
      "A fully functional TO-DO website with features as product creation, deletion, and editing.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    github: "https://github.com/iamhimanshu108/react-todo-frontend.git",
    live: "https://todo-himanshu.netlify.app/",
   
  },
  {
    title: "Password Generator",
    image: project2,
    description:
      "A fully functional password Manager features like copy, Numbers,length and Characters.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
    github: "https://github.com/iamhimanshu108/password-generator.git",
    live: "https://passwordgen-himanshu.netlify.app/",
   
  },
  {
    title: "Rock Paper Scissors",
    image: project3,
    description:
      "A fully functional rock paper scissors game.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    github: "https://github.com/iamhimanshu108/JavaScripts-Learning.git",
    live: "https://rockpapersicssorsiamhimanshu108.netlify.app/",
   
  }

];

export const CONTACT = {
  address: "Guwahati Assam India",
  phoneNo: "+91 000000", // Uncommented and fixed
  email: "iamhimanshu108@gmail.com",
};
