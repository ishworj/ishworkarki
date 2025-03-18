import React from "react";
import Container from "react-bootstrap/esm/Container";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Work = () => {
  return (
    <Container className=" p-md-5 mt-5  ">
      <h1>My projects</h1>

      <div className="project-card d-flex flex-column flex-sm-row ">
        <div className="w-md-50">
          <img src="ftimg.png" alt="" className="img-fluid" />

          <h5 className="pt-2 text-center">
            <FaGithub /> <MdComputer />
          </h5>
        </div>

        <div className="w-md-50 p-3 bg-success text-dark fw-bold d-flex align-items-center">
          <div>
            <h4 className="text-white text-center pb-2">FinanceTracker</h4>
            <ul>
              <li>
                AI-powered expense tracking with real-time financial
                suggestions.
              </li>
              <li>
                Interactive financial reports with pie charts and line graphs.
              </li>
              <li>Secure user authentication with JWT-based authentication.</li>
              <li>
                Seamless transaction management with add, edit, and delete
                options.
              </li>
            </ul>
            <p className="text-center">
              Tech Stack: React.js, Node.js, Express.js, MongoDB, AI
              Integration, Bootstrap
            </p>
          </div>
        </div>
      </div>
      <div className="project-card d-flex flex-column flex-sm-row  ">
        <div className="w-md-50 ">
          <img src="ReadEase.png" alt="" className="img-fluid p-3" />

          <h5 className="pt-2 text-center">
            <FaGithub /> <MdComputer />
          </h5>
        </div>

        <div className="w-md-50 p-3 bg-success text-dark fw-bold d-flex align-items-center">
          <div>
            <h4 className="text-white text-center pb-2">
              ReadEase ie library managment system
            </h4>
            <ul>
              <li>User Authentication with JWT tokens for secure login.</li>
              <li>
                Book Management by Admins, including adding, editing, and
                deleting books.
              </li>
              <li>
                Borrowing System for both Admins and Members, with due dates and
                return functionality.
              </li>
              <li>
                Review and Rating System where users can rate books, subject to
                Admin approval.
              </li>
              <li>Reports and Analytics for Admins to track library usage.</li>
            </ul>
            <p className="text-center">
              TechStack : React.JS, Node.js, MongoDB, Express.js, Vercel, Render
            </p>
          </div>
        </div>
      </div>
      <div className="project-card d-flex  flex-column flex-sm-row ">
        <div className="w-md-50 ">
          <img src="ntdl.png" alt="" className="img-fluid p-3" />

          <h5 className="pt-2 text-center">
            <FaGithub /> <MdComputer />
          </h5>
        </div>

        <div className="w-md-50 p-3 bg-success text-dark fw-bold d-flex align-items-center">
          <div>
            <h4 className="text-white text-center pb-2">Features</h4>
            <ul>
              <li>
                Real-Time Task Movement: Organize tasks seamlessly by moving
                them through different stages as you work, ensuring fluid
                management of priorities.
              </li>
              <li>
                Dual Purpose: Acts as both a powerful task manager and a
                note-taking application, giving you the flexibility to track
                to-dos and jot down quick thoughts in one place.
              </li>
              <li>
                Enhanced Management Efficiency: Boost your productivity by
                offering real-time task updates, ensuring nothing slips through
                the cracks.
              </li>
            </ul>
            <p className="text-center">
              <strong>Tech Stack:</strong> React.js, Node.js, Bootstrap
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Work;
