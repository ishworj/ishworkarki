import React from "react";
import Container from "react-bootstrap/esm/Container";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Work = () => {
  return (
    <Container className="container p-md-5 mt-5  ">
      <h1>My projects</h1>

      <div className="project-card d-flex  ">
        <div className="w-50">
          <img src="ftimg.png" alt="" className="img-fluid" />

          <h5 className="pt-2 text-center">
            <FaGithub /> <MdComputer />
          </h5>
        </div>

        <div className="w-50 p-3 bg-success text-dark fw-bold d-flex align-items-center">
          <div>
            <h4 className="text-white text-center pb-2">Features</h4>
            <ul>
              <li>it effect s the management easilh whicn is good gor the </li>
              <li>
                asdf Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cum, recusandae?
              </li>
              <li>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente similique harum dolorum nemo molestiae.
              </li>
            </ul>
            <p className="text-center">
              TechStack : React.JS , Node.js , Bootstrap{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="project-card d-flex  ">
        <div className="w-50">
          <img src="ftimg.png" alt="" className="img-fluid" />

          <h5 className="pt-2 text-center">
            <FaGithub /> <MdComputer />
          </h5>
        </div>

        <div className="w-50 p-3 bg-success text-dark fw-bold d-flex align-items-center">
          <div>
            <h4 className="text-white text-center pb-2">Features</h4>
            <ul>
              <li>it effect s the management easilh whicn is good gor the </li>
              <li>
                asdf Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cum, recusandae?
              </li>
              <li>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente similique harum dolorum nemo molestiae.
              </li>
            </ul>
            <p className="text-center">
              TechStack : React.JS , Node.js , Bootstrap{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="project-card d-flex  ">
        <div className="w-50">
          <img src="ftimg.png" alt="" className="img-fluid" />

          <h5 className="pt-2 text-center">
            <FaGithub /> <MdComputer />
          </h5>
        </div>

        <div className="w-50 p-3 bg-success text-dark fw-bold d-flex align-items-center">
          <div>
            <h4 className="text-white text-center pb-2">Features</h4>
            <ul>
              <li>it effect s the management easilh whicn is good gor the </li>
              <li>
                asdf Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cum, recusandae?
              </li>
              <li>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente similique harum dolorum nemo molestiae.
              </li>
            </ul>
            <p className="text-center">
              TechStack : React.JS , Node.js , Bootstrap{" "}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Work;
