import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
import { LiaHandPointer } from "react-icons/lia";
import Work from "./Work";
import ResumeModal from "./ResumeModal";
import TechStackTree from "./TechStackTree";
import ContactMeModal from "./ContactMeModal";

const Home = ({ ContactModalShow, setContactModalShow }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container className="container  ">
      <Row className="mt-5">
        <Col className="d-flex-c-a">
          <img src="/profilecartoon.png" alt="" />
        </Col>
        <Col className="d-flex-c-a flex-column">
          <div className=" text-white">
            <h4 className="typed-effect">Your Next Full-Stack Web Developer</h4>
            <h5> Ready to Drive Results:</h5>
            <p>
              With expertise in{" "}
              <b style={{ color: "#179b06" }}>
                React.js, Node.js, MongoDb, and JavaScript,
              </b>{" "}
              I bring the ability to build efficent, scalable applicaitons that
              align with your company's goals. I'm{" "}
              <b>solutions-oriented developer</b> who can quickly adapt and
              contribute to your team, helping you deliver high-quality,
              user-friendly products. Let's connect and i'll show you how i can
              help dirive your projects forward and add value form day one.
            </p>
          </div>
          <div className="d-flex w-100  gap-2">
            <a href="#contact-me">
              <Button
                variant="dark border-light"
                onClick={() => setContactModalShow(true)}
              >
                Contact me
              </Button>
            </a>
            <Button
              variant="dark border-light"
              onClick={() => setModalShow(true)}
            >
              See Resume <LiaHandPointer />{" "}
            </Button>
          </div>
        </Col>
      </Row>
      {/* modals 
    
    */}
      <ResumeModal show={modalShow} onHide={() => setModalShow(false)} />
      <ContactMeModal
        show={ContactModalShow}
        onHide={() => setContactModalShow(false)}
      />

      <Work />

      <section id="skills">
        <div className="skills text-center mt-5">
          <h3>My Tech Stacks</h3>
          <div className="d-flex justify-content-around pt-5 flex-wrap gap-3">
            <div className="skill-item">
              <FaHtml5 size={40} title="HTML" color="#E34F26" />
              <p>HTML</p>
            </div>
            <div className="skill-item">
              <FaCss3Alt size={40} title="CSS" color="#1572B6" />
              <p>CSS</p>
            </div>
            <div className="skill-item">
              <FaJs size={40} title="JavaScript" color="#F7DF1E" />
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <FaBootstrap size={40} title="Bootstrap" color="#563d7c" />
              <p>Bootstrap</p>
            </div>
            <div className="skill-item">
              <FaReact size={40} title="React" color="#61DAFB" />
              <p>React</p>
            </div>
            <div className="skill-item">
              <FaNode size={40} title="Node.js" color="#68A063" />
              <p>Node.js</p>
            </div>
            <div className="skill-item">
              <SiMongodb size={40} title="MongoDB" color="#47A248" />
              <p>MongoDB</p>
            </div>
            <div className="skill-item">
              <FaGithub size={40} title="GitHub" color="#333333" />
              <p>GitHub</p>
            </div>
            <div className="skill-item">
              <SiRedux size={40} title="Redux" color="#764ABC" />
              <p>Redux</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <TechStackTree />
      </div>

      <section className=" my-5 p-md-5" id="about-me">
        <h2 className="text-center mb-5">
          <span>About Me</span>
        </h2>

        <div className="container d-flex gap-5 flex-md-row  flex-sm-column-reverse align-items-center ">
          <div className="my-bio ms-md-5 ">
            <p>
              I am a Full-Stack Web Developer skilled in React.js, Node.js,
              MongoDB, and JavaScript, with a passion for building scalable,
              high-performance applications. From designing intuitive front-end
              interfaces to developing secure and efficient back-end systems, I
              enjoy working across the entire software development lifecycle
              (SDLC).
            </p>

            <p>
              Eager to contribute to a dynamic team, I am open to any
              entry-level opportunities where I can contribute in designing,
              developing, and optimizing web applications. With a strong
              problem-solving mindset and adaptability, I am ready to make an
              impact and grow alongside innovative projects. Let’s connect!
            </p>

            <div>
              <div className="fw-bold mb-2">Interests:</div>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge bg-primary">Coding</span>
                <span className="badge bg-info">Music/football</span>
                <span className="badge bg-success">Learning</span>
              </div>
            </div>
          </div>
          <div className="text-center fade-in-right">
            <div
              className="border border-3 overflow-hidden rounded-circle "
              style={{ height: "300px", width: "300px" }}
            >
              <img
                src="/myprofile.png"
                alt="Ishwor's image"
                className="img-fluid p-3"
              />
            </div>
            <br />
            <h5>Ishwor Karki</h5>
            Full stack developer
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
