// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import blenderLogo from './assets/tech_logo/blender.png';
import shaduiLogo from './assets/tech_logo/shadui.png';

// Project images
import fourthsemhomepageImage from './assets/project-image/4th-sem-homepage.jpg';
import sixthsemhomepageImage from './assets/project-image/6th-sem-homepage.jpg';
import eighthsemhomepageImage from './assets/project-image/8th-sem-homepage.png';
import navigatethecityLogo from './assets/project-image/navigate-the-city-logo.png';
import dynamiccodevisualizerLogo from './assets/project-image/dynamic-code-visualizer-logo.png';
import onlineattendancemanagementsystemLogo from './assets/project-image/online-attendance-management-system-logo.jpg';
import navigatethecityVideo from './assets/project-image/Navigate_The_City_Demo_Clip.mp4';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Shad UI', logo: shaduiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Blender', logo: blenderLogo },
    ],
  },
];

  export const projectsList = [
    {
      id: 0,
      title: "Dynamic Code Visualizer",
      logo: dynamiccodevisualizerLogo,
      semester: "8th Semester Project",
      date: "May 2025 - July 2025",
      description:
        "A web-based tool to visualize code execution that provides an interactive interface to help users understand code flow and logic through step-by-step execution and sorting visualizations.",
      image: eighthsemhomepageImage,
      tags: ["Next JS", "Tailwind CSS", "Piston API", "TypeScript", "LLMs API"],
      github: "https://github.com/Binam001/dynamic-code-visualizer-v2",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Navigate The City",
      logo: navigatethecityLogo,
      semester: "6th Semester Project",
      date: "May 2024 - Sept 2024",
      description:
        "A web-based application that tracks public vehicles using driver mobile GPS and seat booking system. It has routing machine and some map features.",
      image: sixthsemhomepageImage,
      video: navigatethecityVideo,
      tags: ["React JS", "Tailwind CSS", "JavaScript", "leaflet", "openSteetMap API"],
      github: "https://github.com/Binam001/Navigate-The-City",
    },
    {
      id: 2,
      title: "Online Attendance Management System",
      logo: onlineattendancemanagementsystemLogo,
      semester: "4th Semester Project",
      date: "May 2023 - Sept 2023",
      description:
        "A web-based application that tracks student’s attendance with visualization of subject wise attendance.",
      image: fourthsemhomepageImage,
      tags: ["HTML", "BootStrap", "JavaScript", "PHP", "mySQL"],
      github: "https://github.com/Binam001/Project-OAMS",
    },
  ]