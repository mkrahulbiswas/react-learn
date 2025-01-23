import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='contact'>Contact</NavLink>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to='/'>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to='/'>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to='/'>Home</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  )
}