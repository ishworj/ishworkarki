import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FaGithub } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Work = () => {
  const projects = [
    {
      title: "AI Ticket Assistant",
      image: "ticketassistant.png",
      features: [
        "AI agent evaluates the issue and assigns the ticket to the most relevant team member based on skills.",
        "Automatically updates ticket status and includes extra context to the assignee.",
        "Uses background workers with Inngest to handle tasks asynchronously without blocking the app.",
        "Secure login and role-based access using JWT, bcrypt for hashing, and email notification via Mailtrap.",
      ],
      techStack: "Express.js, Inngest, Gemini LLM, JWT, Mailtrap, Tailwind",
    },
    {
      title: "FinanceTracker",
      image: "ftimg.png",
      features: [
        "AI-powered expense tracking with real-time financial suggestions.",
        "Interactive financial reports with pie charts and line graphs.",
        "Secure user authentication with JWT-based authentication.",
        "Seamless transaction management with add, edit, and delete options.",
      ],
      techStack:
        "React.js, Node.js, Express.js, MongoDB, AI Integration, Bootstrap",
    },
    {
      title: "Platform for E-commerce",
      image: "ecom.png",
      features: [
        "Product browsing and filtering",
        "Customer reviews and ratings",
        "Secure JWT-based login",
        "Email verification",
        "Role-based access for admin and customer",
        "Shopping cart and order tracking",
        "Product and category management",
        "Review moderation",
        "Sales dashboard",
        "RESTful APIs",
        "Stripe integration for payments",
        "Cloudinary image upload",
        "LangChain-powered smart insights",
      ],
      techStack:
        "Redux Toolkit, Express, MongoDB, JWT, Nodemailer, Stripe, Cloudinary, LangChain, OpenAI",
    },
    {
      title: "ReadEase - Library Management System",
      image: "ReadEase.png",
      features: [
        "User Authentication with JWT tokens for secure login.",
        "Book Management by Admins, including adding, editing, and deleting books.",
        "Borrowing System for both Admins and Members, with due dates and return functionality.",
        "Review and Rating System where users can rate books, subject to Admin approval.",
        "Reports and Analytics for Admins to track library usage.",
      ],
      techStack: "React.JS, Node.js, MongoDB, Express.js, Vercel, Render",
    },
    {
      title: "Task & Notes Manager",
      image: "ntdl.png",
      features: [
        "Real-Time Task Movement: Organize tasks seamlessly by moving them through different stages.",
        "Dual Purpose: Acts as both a powerful task manager and a note-taking application.",
        "Enhanced Management Efficiency: Boosts productivity with real-time task updates.",
      ],
      techStack: "React.js, Node.js, Bootstrap",
    },
  ];

  return (
    <Container className="p-md-5 mt-5">
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card d-flex flex-column flex-sm-row mb-4"
        >
          <div className="w-md-50" style={{ flexBasis: "70%" }}>
            <img
              src={project.image}
              alt={project.title}
              className="img-fluid"
            />
          </div>

          <div
            className="w-md-50 p-3 fw-bold d-flex align-items-center"
            style={{ flexBasis: "30%", borderLeft: "2px solid white" }}
          >
            <div>
              <h4 className="text-white text-center pb-2">{project.title}</h4>

              {/* Mobile: Collapsible */}
              <div className="d-block d-md-none">
                <button
                  className="btn btn-outline-light btn-sm mb-2 d-block mx-auto"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#features${index}`}
                  aria-expanded="false"
                  aria-controls={`features${index}`}
                  style={{
                    borderColor: "#00c8ff",
                    color: "#00c8ff",
                  }}
                >
                  See Features
                </button>

                <div className="collapse" id={`features${index}`}>
                  <ul>
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop: Always visible */}
              <div className="d-none d-md-block">
                <ul>
                  {project.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <p className="text-center">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Work;
