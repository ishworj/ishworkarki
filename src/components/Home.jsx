import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

const Home = () => {
  return (
    <Container className="container p-md-5 mt-5">
      <Row className="mt-5">
        <Col className="d-flex-c-a">
          <div style={{ height: "300px" }}>
            <img
              src="/myprofile.png"
              alt="ishwor karki image"
              className="h-100"
            />
          </div>
        </Col>
        <Col className="d-flex-c-a">
          <div className=" text-white">
            <h4 className="text-success">Your Next Full-Stack Developer</h4>
            <h5 className="text-success"> Ready to Drive Results:</h5>
            <p>
              With expertise in{" "}
              <b className="text-success">
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
        </Col>
      </Row>

      <div className="m-4" style={{ height: "500px" }}></div>

      <div className="skills text-center" id="skills">
        <h3>My skills</h3>
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
    </Container>
  );
};

export default Home;
