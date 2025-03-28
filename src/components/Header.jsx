import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink as Link } from "react-router-hash-link";
import { GiSharpCrown } from "react-icons/gi";

const Header = () => {
  return (
    <div
      className="position-fixed w-100"
      style={{ top: 0, left: 0, zIndex: 10 }}
      id="navbar"
    >
      <Navbar expand="lg" className="bg-black">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center gap-3">
            <div className="text-success fs-1 d-flex">
              <GiSharpCrown color="success" />
            </div>
            <div className="text-white"> Ishwor karki | Web Developer</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-end pe-2 ">
              <Link className="nav-link" to="/#about-me">
                About me 
              </Link>
              <Link className="nav-link" to="/work">
                Work
              </Link>
              <Link className="nav-link" to="/#skills">
                Skills
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
