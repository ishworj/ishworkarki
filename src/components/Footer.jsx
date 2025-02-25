import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black p-5  text-center">
        <hr style={{ opacity: "0.65" }} />
        <div className="d-flex-c-a pt-md-3">
          <Col>
            <p className="text-decoration-underline">Links</p>
            <Link className="nav-link" to="/hero">
              Home
            </Link>

            <Link className="nav-link" to="/skills">
              Skills
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>
          </Col>

          <Col>
            <p className="text-decoration-underline">CONNECT WITH ME</p>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/ishwor-karki-4b3973272/"
              target="_blank"
            >
              Linkedin
            </a>

            <a
              className="nav-link"
              href="https://github.com/ishworj"
              target="_blank"
            >
              {" "}
              Github
            </a>

            <a className="nav-link" href="mailto:karkiishwor10@gmail.com">
              Email
            </a>
          </Col>
        </div>
      </div>
      <div className="text-center">
        <p className="pb-2">
          &copy; 2025 ishworkarki.com . All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
