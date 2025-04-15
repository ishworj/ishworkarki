import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink as Link } from "react-router-hash-link";
import { GiSharpCrown } from "react-icons/gi";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef();

  useEffect(() => {
    const handleScroll = () => setExpanded(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setExpanded(false);

  return (
    <div
      className="position-fixed w-100"
      style={{ top: 0, left: 0, zIndex: 10 }}
      id="navbar"
      ref={navbarRef}
    >
      <Navbar
        expand="lg"
        className="bg-black"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center gap-3">
            <div className="text-success fs-1 d-flex">
              <GiSharpCrown color="success" />
            </div>
            <div className="text-white"> Ishwor Karki | Web Developer</div>
          </Navbar.Brand>

          {/* Custom Toggle Icon */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            {expanded ? (
              <IoClose size={30} color="white" />
            ) : (
              <IoMenu size={30} color="white" />
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-end pe-2">
              <Link
                className="nav-link"
                to="/#about-me"
                onClick={handleNavClick}
              >
                About me
              </Link>
              <Link className="nav-link" to="/work" onClick={handleNavClick}>
                Work
              </Link>
              <Link className="nav-link" to="/#skills" onClick={handleNavClick}>
                Skills
              </Link>
              <Link className="nav-link" to="/blogs" onClick={handleNavClick}>
                Blogs
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
