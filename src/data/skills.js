import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPhp,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiUnity,
  SiMysql,
  SiFirebase,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    items: [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
        level: 95,
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        color: "text-yellow-400",
        level: 92,
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
        level: 95,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
        level: 92,
      },
      {
        name: "Tailwind CSS",
        icon: FaCode,
        color: "text-sky-400",
        level: 90,
      },
      {
        name: "Bootstrap",
        icon: FaCode,
        color: "text-purple-500",
        level: 88,
      },
    ],
  },

  {
    category: "Backend Development",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
        level: 82,
      },
      {
        name: "Express.js",
        icon: FaCode,
        color: "text-gray-300",
        level: 78,
      },
      {
        name: "PHP",
        icon: FaPhp,
        color: "text-indigo-400",
        level: 80,
      },
      {
        name: "Laravel",
        icon: FaCode,
        color: "text-red-500",
        level: 75,
      },
      {
        name: "REST API",
        icon: FaDatabase,
        color: "text-cyan-400",
        level: 88,
      },
    ],
  },

  {
    category: "Game Development",
    items: [
      {
        name: "Unity",
        icon: SiUnity,
        color: "text-white",
        level: 92,
      },
      {
        name: "C#",
        icon: FaCode,
        color: "text-purple-400",
        level: 88,
      },
      {
        name: "Android",
        icon: FaCode,
        color: "text-green-500",
        level: 82,
      },
      {
        name: "2D Game",
        icon: SiUnity,
        color: "text-gray-300",
        level: 90,
      },
      {
        name: "Game UI",
        icon: FaReact,
        color: "text-cyan-400",
        level: 85,
      },
      {
        name: "Voice Recognition",
        icon: FaCode,
        color: "text-pink-400",
        level: 80,
      },
    ],
  },

  {
    category: "Database & Tools",
    items: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
        level: 85,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-yellow-500",
        level: 75,
      },
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
        level: 88,
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
        level: 90,
      },
      {
        name: "VS Code",
        icon: FaCode,
        color: "text-blue-400",
        level: 95,
      },
      {
        name: "Figma",
        icon: FaFigma,
        color: "text-pink-500",
        level: 60,
      },
    ],
  },
];

export default skills;