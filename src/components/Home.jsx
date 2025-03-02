import React from "react";
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

const Home = () => {
  return (
    <Container className="container">
      <div className="d-flex gap-3 flex-column logo-container">
        <img src="/git.png" alt="git" />
        <img src="/linked.png" alt="linked" />
        <img src="/email.png" alt="email" />
      </div>
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
            <Button variant="dark border-light">Contact me</Button>
            <Button variant="dark border-light">
              See Resume <LiaHandPointer />{" "}
            </Button>
          </div>
        </Col>
      </Row>

      <Work />

      <div className="skills text-center" id="skills">
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

      <section className=" my-5 p-md-5">
        <h2 className="text-center mb-5">
          <span>About Me</span>
        </h2>

        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center ">
          <div className="d-flex justify-content-center ">
            <img
              src="/myprofile.png"
              alt="Ishwor's image"
              className="img-fluid rounded-circle"
            />
          </div>

          <div className="my-bio ms-md-5">
            <h3 className="h4">Ishwor Karki</h3>
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
        </div>
      </section>
    </Container>
  );
};

export default Home;
