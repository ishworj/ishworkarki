import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";

const TechStackTree = () => {
  return (
    <svg
      width="600"
      height="500"
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lines connecting skills */}
      <line x1="300" y1="50" x2="200" y2="150" stroke="green" strokeWidth="3" />
      <line x1="300" y1="50" x2="400" y2="150" stroke="green" strokeWidth="3" />
      <line
        x1="200"
        y1="150"
        x2="150"
        y2="250"
        stroke="green"
        strokeWidth="3"
      />
      <line
        x1="200"
        y1="150"
        x2="250"
        y2="250"
        stroke="green"
        strokeWidth="3"
      />
      <line
        x1="400"
        y1="150"
        x2="350"
        y2="250"
        stroke="green"
        strokeWidth="3"
      />
      <line
        x1="400"
        y1="150"
        x2="450"
        y2="250"
        stroke="green"
        strokeWidth="3"
      />
      <line
        x1="250"
        y1="250"
        x2="225"
        y2="350"
        stroke="green"
        strokeWidth="3"
      />
      <line
        x1="250"
        y1="250"
        x2="275"
        y2="350"
        stroke="green"
        strokeWidth="3"
      />
      <line
        x1="350"
        y1="250"
        x2="325"
        y2="350"
        stroke="green"
        strokeWidth="3"
      />
      <line
        x1="350"
        y1="250"
        x2="375"
        y2="350"
        stroke="green"
        strokeWidth="3"
      />

      {/* Skill Nodes */}
      <circle cx="300" cy="50" r="25" fill="#FFD700" />
      <circle cx="200" cy="150" r="25" fill="#E34F26" />
      <circle cx="400" cy="150" r="25" fill="#1572B6" />
      <circle cx="150" cy="250" r="25" fill="#F7DF1E" />
      <circle cx="250" cy="250" r="25" fill="#563d7c" />
      <circle cx="350" cy="250" r="25" fill="#61DAFB" />
      <circle cx="450" cy="250" r="25" fill="#68A063" />
      <circle cx="225" cy="350" r="25" fill="#47A248" />
      <circle cx="275" cy="350" r="25" fill="#333333" />
      <circle cx="325" cy="350" r="25" fill="#764ABC" />

      {/* Icons inside circles */}
      <foreignObject x="290" y="40" width="30" height="30">
        <FaHtml5 size={30} color="black" />
      </foreignObject>

      <foreignObject x="190" y="140" width="30" height="30">
        <FaHtml5 size={30} color="white" />
      </foreignObject>

      <foreignObject x="390" y="140" width="30" height="30">
        <FaCss3Alt size={30} color="white" />
      </foreignObject>

      <foreignObject x="140" y="240" width="30" height="30">
        <FaJs size={30} color="black" />
      </foreignObject>

      <foreignObject x="235" y="240" width="30" height="30">
        <FaBootstrap size={30} color="white" />
      </foreignObject>

      <foreignObject x="340" y="240" width="30" height="30">
        <FaReact size={30} color="black" />
      </foreignObject>

      <foreignObject x="440" y="240" width="30" height="30">
        <FaNode size={30} color="black" />
      </foreignObject>

      <foreignObject x="215" y="340" width="30" height="30">
        <SiMongodb size={30} color="white" />
      </foreignObject>

      <foreignObject x="265" y="340" width="30" height="30">
        <FaGithub size={30} color="white" />
      </foreignObject>

      <foreignObject x="315" y="340" width="30" height="30">
        <SiRedux size={30} color="white" />
      </foreignObject>
    </svg>
  );
};

export default TechStackTree;
