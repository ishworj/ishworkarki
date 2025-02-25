import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiSharpCrown } from "react-icons/gi";

const Header = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ backgroundColor: "inherit !important"}}
      >
        <Container >
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center gap-3"
          >
            <div className="text-success fs-1 d-flex">
              <GiSharpCrown color="success" />
            </div>
            <div className="text-white"> Ishwor karki</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Link className="nav-link" to="/">
                About
              </Link>
              <Link className="nav-link" to="/">
                Work
              </Link>
              <Link className="nav-link" to="/">
                Skills
              </Link>
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
