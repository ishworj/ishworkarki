import React from "react";
import Col from "react-bootstrap/esm/Col";
import { HashLink as Link } from "react-router-hash-link";

const Footer = ({ setContactModalShow }) => {
  return (
    <>
      <div className="bg-black p-5 text-center text-white">
        <hr style={{ opacity: "0.65" }} />
        <div className="footer-navs d-flex justify-content-center gap-5 pt-md-3 text-center">
          <Col>
            <p className="text-decoration-underline">Links</p>
            <Link className="nav-link" to="/#navbar">
              Home
            </Link>
            <Link className="nav-link" to="/#skills">
              Skills
            </Link>
            <Link
              className="nav-link"
              onClick={() => setContactModalShow(true)}
            >
              Contact
            </Link>
            <Link className="nav-link" to="/#about-me">
              About
            </Link>
          </Col>

          <Col>
            <p className="text-decoration-underline">CONNECT </p>
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
              Github
            </a>
            <a className="nav-link" href="mailto:karkiishwor10@gmail.com">
              Email
            </a>
          </Col>
        </div>
      </div>

      <div className="text-center">
        <div className="pb-2">
          &copy; 2025 ishworkarki.com . All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
