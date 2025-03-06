import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import {
  SiRedux,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiJquery,
} from "react-icons/si";
import { MdMail } from "react-icons/md";

const skills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 size={20} /> },
    { name: "CSS3", icon: <FaCss3Alt size={20} /> },
    { name: "JavaScript", icon: <IoLogoJavascript size={20} /> },
    { name: "Bootstrap", icon: <SiBootstrap size={20} /> },
    { name: "React.js", icon: <FaReact size={20} /> },
    { name: "Redux Toolkit", icon: <SiRedux size={20} /> },
    { name: "React Router", icon: <FaReact size={20} /> }, // React Router doesn't have a specific icon, so using React
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs size={20} /> },
    { name: "JWT", icon: <SiRedis size={20} /> }, // Placeholder for JWT (using Redis icon for now)
    { name: "Nodemailer", icon: <MdMail size={20} /> },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb size={20} /> },
    { name: "MySQL", icon: <SiMysql size={20} /> },
    { name: "Redis", icon: <SiRedis size={20} /> },
  ],
};

const SkillTree = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <svg width="600" height="500">
        {/* Connecting lines */}
        {Object.keys(skills).map((category, index) => (
          <motion.line
            key={category}
            x1="300"
            y1="50"
            x2={200 + index * 200}
            y2="150"
            stroke="green"
            strokeWidth="2"
            initial={{ strokeDasharray: "100", strokeDashoffset: "100" }}
            animate={{ strokeDashoffset: "0" }}
            transition={{ duration: 1, delay: index * 0.5 }}
          />
        ))}

        {/* Category Nodes */}
        {Object.keys(skills).map((category, index) => (
          <motion.text
            key={category}
            x={200 + index * 200}
            y="140"
            fill="white"
            fontSize="16"
            textAnchor="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            {category === "Frontend" ? <FaReact size={20} /> : null}
            {category === "Backend" ? <FaNodeJs size={20} /> : null}
            {category === "Database" ? <FaDatabase size={20} /> : null}
            <tspan x={200 + index * 200} dy="20">
              {category}
            </tspan>
          </motion.text>
        ))}

        {/* Skill Nodes */}
        {Object.entries(skills).map(([category, items], catIndex) =>
          items.map((skill, skillIndex) => (
            <motion.text
              key={skill.name}
              x={200 + catIndex * 200}
              y={200 + skillIndex * 30}
              fill="white"
              fontSize="14"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1 + catIndex * 0.5 + skillIndex * 0.2,
              }}
            >
              {skill.icon}
              <tspan x={200 + catIndex * 200} dy="20">
                {skill.name}
              </tspan>
            </motion.text>
          ))
        )}
      </svg>
    </div>
  );
};

export default SkillTree;
