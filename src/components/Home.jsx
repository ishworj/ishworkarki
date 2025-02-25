import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";

const Home = () => {
  return (
    <Container className="container p-5 mt-5">
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

      <div className="d-flex-c-a card  p-5 mt-5 bg-black text-white">
        <div className="w-50">
          <a className="text-white text-decoration-none" href="">
            <h6>
              FinanceTracker.com <CiLocationArrow1 />
            </h6>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            placeat hic fugit quis. Ullam deserunt sequi neque ad fuga,
            blanditiis quos est earum atque dolorem! Tempore aspernatur quos
            aliquam eveniet quaerat accusantiumt.
          </p>
        </div>


        <div>
          <img src="/ft.png" alt="" />
        </div>

        <div className="w-50">
          <a className="text-white text-decoration-none" href="">
            <h6>
              FinanceTracker.com <CiLocationArrow1 />
            </h6>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            placeat hic fugit quis. Ullam deserunt sequi neque ad fuga,
            blanditiis quos est earum atque dolorem! Tempore aspernatur quos
            aliquam eveniet quaerat accusantiumt.
          </p>
        </div>
        <div>
          <img src="/ft.png" alt="" />
        </div>

        <div className="w-50">
          <a className="text-white text-decoration-none" href="">
            <h6>
              FinanceTracker.com <CiLocationArrow1 />
            </h6>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            placeat hic fugit quis. Ullam deserunt sequi neque ad fuga,
            blanditiis quos est earum atque dolorem! Tempore aspernatur quos
            aliquam eveniet quaerat accusantiumt.
          </p>
        </div>
        <div>
          <img src="/ft.png" alt="" />
        </div>
      </div>

      <div className="skills text-center text-light">
        <h5>My skills</h5>
        <div className="d-flex justify-content-around pt-5 flex-wrap gap-3">
          <div className="skill-item">
            <FaHtml5 size={40} title="HTML" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt size={40} title="CSS" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <FaJs size={40} title="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <FaReact size={40} title="React" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <FaNode size={40} title="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="skill-item">
            <SiMongodb size={40} title="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className="skill-item">
            <FaGithub size={40} title="GitHub" />
            <p>GitHub</p>
          </div>
          <div className="skill-item">
            <SiRedux size={40} title="Redux" />
            <p>Redux</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
