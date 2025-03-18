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
import ResumeModal from "./ResumeModal";
import ContactMeModal from "./ContactMeModal";
import { CiLocationArrow1 } from "react-icons/ci";
import SkillTree from "./SkillTree";

const Home = ({ ContactModalShow, setContactModalShow }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container className="overflow-hidden">
      <Row className="mt-md-5">
        <Col className="d-flex-c-a">
          <img src="/profilecartoon.png" alt="" />
        </Col>
        {/* //TODO text cutt on ends */}
        <Col className="d-flex-c-a flex-column">
          <div className=" text-white  ">
            <h4 className="typed-effect ">
              Your Next Full-Stack Web Developer
            </h4>
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
          <div className="d-flex justify-content-center  justify-content-md-start   w-100 gap-2">
            <Button
              variant="dark border-light"
              onClick={() => setContactModalShow(true)}
            >
              Contact me
            </Button>
            <Button
              variant="dark border-light"
              onClick={() => setModalShow(true)}
            >
              See Resume <LiaHandPointer />
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

      <h1 className="text-center pt-5 pt-sm-0">Featured projects</h1>

      <div className="w-md-50 mt-5 pt-5">
        <a className="text-white text-decoration-none" href="">
          <h6
            onClick={() => {
              window.open(
                "https://finance-tracker-jet-rho.vercel.app/",
                "_blank"
              );
            }}
          >
            FinanceTracker <CiLocationArrow1 />
          </h6>
        </a>
        <p>
          The Finance Tracker App is a web-based application designed to help
          users manage their finances efficiently. It enables users to track
          income and expenses, view real-time balance updates, and analyze
          spending habits through interactive reports. Additionally, the app
          integrates AI to provide personalized financial insights and real-time
          suggestions based on spending patterns.
        </p>
      </div>

      <video autoPlay loop muted className="h-100 w-100">
        <source src="financeTracker.mp4" type="video/mp4" />
      </video>

      <div className="w-md-50 mt-5 pt-5">
        <a className="text-white text-decoration-none" href="">
          <h6>
            Readease <CiLocationArrow1 />
          </h6>
        </a>
        <p className="">
          The Library Management System (LMS) ie ReadEase is a web application
          designed to facilitate the management of books, users, and borrowing
          history in a library. It allows two types of users: Admin (who can
          manage books, users, and reports) and Members (who can borrow books,
          return them, rate them, and view their history).
        </p>
      </div>

      <video autoPlay loop muted className="h-100 w-100">
        <source src="lms.mp4" type="video/mp4" />
      </video>

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

      <section className=" my-5 p-md-5" id="about-me">
        <h2 className="text-center mb-5">
          <span>About Me</span>
        </h2>

        <div className="container d-flex gap-5  flex-column-reverse flex-md-row  align-items-center ">
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
                <span className="badge bg-primary p-2">Coding</span>
                <span className="badge bg-info p-2">Music/football</span>
                <span className="badge bg-success p-2">Learning</span>
              </div>
            </div>
          </div>

          <div clas sName="text-center fade-in-right">
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
            <h5 className="text-center">Ishwor Karki</h5>
            <p className="text-center">Full stack developer</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
